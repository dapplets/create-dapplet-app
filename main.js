import chalk from "chalk";
import fs from "fs";
import Listr from "listr";
import ncp from "ncp";
import { readFileSync, writeFileSync } from "fs";
import {
  notOverlayNotServer,
  yesServerNotOverlay,
  notServerYesOverlay,
  yesServerYesOverlay,
  optionsAdapter,
  createAdapter,
  createInterface,createContext
} from "./utils";

function createModule(template, name, author, license,title,description, options) {
  const context = options.optionsContextID ? options.optionsContextID.split(","): null;
  ncp(__dirname + `/${template}`, `./${name}`, function (err) {
    const json1 = readFileSync(`./${name}/package.json`, "utf8");
    const object = JSON.parse(json1);
    object.name = name;
    object.license = license;
    object.author = author;
    object.description = description;
    const json2 = JSON.stringify(object);
    writeFileSync(`./${name}/package.json`, json2);
    updateConfiguration(name, options, template);
    updateScript(name,title,description, options,author,license, template,context);
    if (err) {
      return console.error(err);
    }
    console.log("created module!");
  });
}

function updateConfiguration(moduleName, options, template) {
  options.optionsDappletAdapter && template === "dapplet"
    ? null
    : fs.rmSync(`./${moduleName}/adapter`, { recursive: true, force: true });

  options.optionsDappletServer && template === "dapplet"
    ? null
    : fs.rmSync(`./${moduleName}/server`, {
        recursive: true,
        force: true,
      });

  options.optionsDappletOverlay && template === "dapplet"
    ? null
    : fs.rmSync(`./${moduleName}/overlay`, { recursive: true, force: true });
}
function updateScript(moduleName,title,description, options,author,license, template,context) {
  if (
    !options.optionsDappletServer &&
    !options.optionsDappletOverlay &&
    template === "dapplet"
  ) {
    notOverlayNotServer(moduleName,title,description, author,license);

    options.optionsDappletAdapter ?optionsAdapter(moduleName): null
  } else if (
    !options.optionsDappletServer &&
    options.optionsDappletOverlay &&
    template === "dapplet"
  ) {
    notServerYesOverlay(moduleName,title,description, author,license);
    options.optionsDappletAdapter ?optionsAdapter(moduleName): null
  } else if (
    options.optionsDappletServer &&
    !options.optionsDappletOverlay &&
    template === "dapplet"
  ) {
    yesServerNotOverlay(moduleName,title,description, author,license);
    options.optionsDappletAdapter ?optionsAdapter(moduleName): null
    
  } else if (
    options.optionsDappletServer &&
    options.optionsDappletOverlay &&
    template === "dapplet"
  ) {
    yesServerYesOverlay(moduleName,title,description, author,license);

    options.optionsDappletAdapter ?optionsAdapter(moduleName): null
  }
  else if(template === "adapter"){
    createAdapter(moduleName,title)
  }
  else if(template === "interface"){
    createInterface(moduleName,title)
  }
  createContext(template,moduleName,context);
}

export async function createProject(options, packageInfo) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };
  const nameProject = packageInfo.name;
  const authorProject = packageInfo.author;
  const licenseProject = packageInfo.license.toUpperCase();
  const titleProject = packageInfo.title;
  const descriptionProject = packageInfo.description;
  const tasks = new Listr(
    [
      {
        title: "Install dependencies",
        task: () => {
          createModule(
            options.template,
            nameProject,
            authorProject,
            licenseProject,
            titleProject,
            descriptionProject,
            options
          );
        },
        skip: () => {},
      },
    ],
    {
      exitOnError: false,
    }
  );

  await tasks.run();
  console.log("%s Project ready", chalk.green.bold("DONE"));
  return true;
}
