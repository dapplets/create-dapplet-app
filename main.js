import chalk from "chalk";
import fs from "fs";
import Listr from "listr";
import ncp from "ncp";
import { readFileSync, writeFileSync } from "fs";


function createModule(template, name, author, license,options) {
  ncp(__dirname + `/${template}`, `./${name}`, function (err) {
    const json1 = readFileSync(`./${name}/package.json`, "utf8");
    const object = JSON.parse(json1);
    object.name = name;
    object.license = license;
    object.author = author;
    const json2 = JSON.stringify(object);
    writeFileSync(`./${name}/package.json`, json2);
    updateConfiguration(name,options,template)
    if (err) {
      return console.error(err);
    }
    console.log("created interface!");
  });
}

function updateConfiguration(moduleName,options, template) {
  options.optionsDappletAdapter && template === 'dapplet'
    ? null
    : fs.rmSync(`./${moduleName}/adapter`, { recursive: true, force: true })

    options.optionsDappletServer && template === 'dapplet'
    ? null
    : fs.rmSync(`./${moduleName}/server`, { recursive: true, force: true })

    options.optionsDappletOverlay && template === 'dapplet'
    ? null
    : fs.rmSync(`./${moduleName}/overlay`, { recursive: true, force: true })
   
}

export async function createProject(options, packageInfo) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };
  const nameProject = packageInfo.name;
  const authorProject = packageInfo.author;
  const licenseProject = packageInfo.license.toUpperCase();
  const tasks = new Listr(
    [
      {
        title: "Install dependencies",
        task: () => {
          createModule(
            options.template,
            nameProject,
            authorProject,
            licenseProject,options
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
