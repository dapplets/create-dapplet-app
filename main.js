import chalk from "chalk";
import fs from "fs";
import Listr from "listr";
import ncp from "ncp";
import { readFileSync, writeFileSync } from "fs";
import { scriptsDefault, scriptsMain, cacheDirectories, overlaysDapplet, dependenciesDefault, configSchemaNotServer, configDefaultNotServer, dependenciesNotOverlay, contextIdsAdapter, dependenciesWithAdapter } from './constants'



function createModule(template, name, author, license, options) {
  ncp(__dirname + `/${template}`, `./${name}`, function (err) {
    const json1 = readFileSync(`./${name}/package.json`, "utf8");
    const object = JSON.parse(json1);
    object.name = name;
    object.license = license;
    object.author = author;
    const json2 = JSON.stringify(object);
    writeFileSync(`./${name}/package.json`, json2);
    updateConfiguration(name, options, template);
    updateScript(name, options, template);
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
    : fs.rmSync(`./${moduleName}/dapplet/server`, {
      recursive: true,
      force: true,
    });

  options.optionsDappletOverlay && template === "dapplet"
    ? null
    : fs.rmSync(`./${moduleName}/overlay`, { recursive: true, force: true });
}
function updateScript(moduleName, options, template) {
  if (
    !options.optionsDappletServer &&
    !options.optionsDappletOverlay &&
    template === "dapplet"
  ) {
    const jsonDapplet = readFileSync(
      `./${moduleName}/dapplet/dapplet.json`,
      "utf8"
    );
    const objectDapplet = JSON.parse(jsonDapplet);
    objectDapplet.overlays = overlaysDapplet;
    objectDapplet.title = moduleName;
    const json2Dapplet = JSON.stringify(objectDapplet);
    writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);

    const json1 = readFileSync(`./${moduleName}/dapplet/package.json`, "utf8");
    const object = JSON.parse(json1);
    object.scripts = scriptsDefault;
    object.name = moduleName;
    object.title = moduleName;
    object.dependencies = {};
    const json2 = JSON.stringify(object);
    writeFileSync(`./${moduleName}/dapplet/package.json`, json2);

    const jsonMain = readFileSync(`./${moduleName}/package.json`, "utf8");
    const objectMain = JSON.parse(jsonMain);
    objectMain.scripts = scriptsMain;
    objectMain.cacheDirectories = cacheDirectories;
    objectMain.dependencies = dependenciesDefault;
    const jsonMain2 = JSON.stringify(objectMain);
    writeFileSync(`./${moduleName}/package.json`, jsonMain2);

    if (options.optionsDappletAdapter) {
      const jsonDapplet = readFileSync(
        `./${moduleName}/dapplet/dapplet.json`,
        "utf8"
      );
      const objectDapplet = JSON.parse(jsonDapplet);
      objectDapplet.contextIds = contextIdsAdapter;
      objectDapplet.dependencies = dependenciesWithAdapter;
      const json2Dapplet = JSON.stringify(objectDapplet);
      writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
    }

  } else if (
    !options.optionsDappletServer &&
    options.optionsDappletOverlay &&
    template === "dapplet"
  ) {

    const jsonDapplet = readFileSync(
      `./${moduleName}/dapplet/dapplet.json`,
      "utf8"
    );
    const objectDapplet = JSON.parse(jsonDapplet);
    objectDapplet.title = moduleName;
    const json2Dapplet = JSON.stringify(objectDapplet);
    writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);

    const json1 = readFileSync(`./${moduleName}/dapplet/package.json`, "utf8");
    const object = JSON.parse(json1);
    object.scripts = scriptsDefault;
    object.name = moduleName;
    object.title = moduleName;
    const json2 = JSON.stringify(object);
    writeFileSync(`./${moduleName}/dapplet/package.json`, json2);

    const jsonSchemaDefault = readFileSync(`./${moduleName}/dapplet/config/default.json`, "utf8");
    const objectSchema = JSON.parse(jsonSchemaDefault);
    objectSchema.dev = configDefaultNotServer;
    const jsonSchemaDefault2 = JSON.stringify(objectSchema);
    writeFileSync(`./${moduleName}/dapplet/config/default.json`, jsonSchemaDefault2);

    const jsonSchema = readFileSync(`./${moduleName}/dapplet/config/schema.json`, "utf8");
    const objectSchemaConfig = JSON.parse(jsonSchema);
    objectSchemaConfig.properties = configSchemaNotServer;
    const jsonSchema2 = JSON.stringify(objectSchemaConfig);
    writeFileSync(`./${moduleName}/dapplet/config/schema.json`, jsonSchema2);


    if (options.optionsDappletAdapter) {
      const jsonDapplet = readFileSync(
        `./${moduleName}/dapplet/dapplet.json`,
        "utf8"
      );
      const objectDapplet = JSON.parse(jsonDapplet);
      objectDapplet.contextIds = contextIdsAdapter;
      objectDapplet.dependencies = dependenciesWithAdapter;
      const json2Dapplet = JSON.stringify(objectDapplet);
      writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
    }
  }
  else if (
    options.optionsDappletServer &&
    !options.optionsDappletOverlay &&
    template === "dapplet"
  ) {
    const jsonDapplet = readFileSync(
      `./${moduleName}/dapplet/dapplet.json`,
      "utf8"
    );
    const objectDapplet = JSON.parse(jsonDapplet);
    objectDapplet.title = moduleName;
    objectDapplet.overlays = overlaysDapplet
    const json2Dapplet = JSON.stringify(objectDapplet);
    writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);


    const json1 = readFileSync(`./${moduleName}/dapplet/package.json`, "utf8");
    const object = JSON.parse(json1);
    object.dependencies = {};
    object.name = moduleName;
    object.title = moduleName;
    const json2 = JSON.stringify(object);
    writeFileSync(`./${moduleName}/dapplet/package.json`, json2);

    const jsonMain = readFileSync(`./${moduleName}/package.json`, "utf8");
    const objectMain = JSON.parse(jsonMain);
    objectMain.scripts = scriptsMain;
    objectMain.cacheDirectories = cacheDirectories;
    objectMain.dependencies = dependenciesNotOverlay;
    const jsonMain2 = JSON.stringify(objectMain);
    writeFileSync(`./${moduleName}/package.json`, jsonMain2);


    if (options.optionsDappletAdapter) {
      const jsonDapplet = readFileSync(
        `./${moduleName}/dapplet/dapplet.json`,
        "utf8"
      );
      const objectDapplet = JSON.parse(jsonDapplet);
      objectDapplet.contextIds = contextIdsAdapter;
      objectDapplet.dependencies = dependenciesWithAdapter;
      const json2Dapplet = JSON.stringify(objectDapplet);
      writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
    }
  }
  else {
    const json1 = readFileSync(`./${moduleName}/dapplet/package.json`, "utf8");
    const object = JSON.parse(json1);
    object.name = moduleName;
    object.title = moduleName;
    const json2 = JSON.stringify(object);
    writeFileSync(`./${moduleName}/dapplet/package.json`, json2);

    const jsonDapplet = readFileSync(
      `./${moduleName}/dapplet/dapplet.json`,
      "utf8"
    );
    const objectDapplet = JSON.parse(jsonDapplet);
    objectDapplet.title = moduleName;
    const json2Dapplet = JSON.stringify(objectDapplet);
    writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);


    if (options.optionsDappletAdapter) {
      const jsonDapplet = readFileSync(
        `./${moduleName}/dapplet/dapplet.json`,
        "utf8"
      );
      const objectDapplet = JSON.parse(jsonDapplet);
      objectDapplet.contextIds = contextIdsAdapter;
      objectDapplet.dependencies = dependenciesWithAdapter;
      const json2Dapplet = JSON.stringify(objectDapplet);
      writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
    }
  }

  // options.optionsDappletOverlay && template === 'dapplet'
  // ? null
  // : fs.rmSync(`./${moduleName}/overlay`, { recursive: true, force: true })
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
            licenseProject,
            options
          );
        },
        skip: () => { },
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
