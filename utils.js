import { readFileSync, writeFileSync } from "fs";
import { scriptsDefault, scriptsMain, cacheDirectories, overlaysDapplet, dependenciesDefault, configSchemaNotServer, configDefaultNotServer, dependenciesNotOverlay, dependenciesWithAdapter } from './constants'

export function notOverlayNotServer(moduleName,title,description, author,license){
    const jsonDapplet = readFileSync(
        `./${moduleName}/dapplet/dapplet.json`,
        "utf8"
      );
      const objectDapplet = JSON.parse(jsonDapplet);
      objectDapplet.overlays = overlaysDapplet;
      objectDapplet.title = title;
      const json2Dapplet = JSON.stringify(objectDapplet);
      writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
  
      const json1 = readFileSync(`./${moduleName}/dapplet/package.json`, "utf8");
      const object = JSON.parse(json1);
      object.scripts = scriptsDefault;
      object.name = moduleName;
      object.title = title;
      object.dependencies = {};
      object.description = description;
      object.author = author;
      object.license = license;
      const json2 = JSON.stringify(object);
      writeFileSync(`./${moduleName}/dapplet/package.json`, json2);
  
      const jsonMain = readFileSync(`./${moduleName}/package.json`, "utf8");
      const objectMain = JSON.parse(jsonMain);
      objectMain.scripts = scriptsMain;
      objectMain.cacheDirectories = cacheDirectories;
      objectMain.dependencies = dependenciesDefault;
      const jsonMain2 = JSON.stringify(objectMain);
      writeFileSync(`./${moduleName}/package.json`, jsonMain2);
}

export function yesServerNotOverlay(moduleName,title,description, author,license){
    const jsonDapplet = readFileSync(
        `./${moduleName}/dapplet/dapplet.json`,
        "utf8"
      );
      const objectDapplet = JSON.parse(jsonDapplet);
      objectDapplet.title = title;
      const json2Dapplet = JSON.stringify(objectDapplet);
      writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
  
      const json1 = readFileSync(`./${moduleName}/dapplet/package.json`, "utf8");
      const object = JSON.parse(json1);
      object.scripts = scriptsDefault;
      object.name = moduleName;
      object.title = title;
      object.description = description;
      object.author = author;
      object.license = license;
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
}

export function notServerYesOverlay(moduleName,title,description, author,license){
    const jsonDapplet = readFileSync(
        `./${moduleName}/dapplet/dapplet.json`,
        "utf8"
      );
      const objectDapplet = JSON.parse(jsonDapplet);
      objectDapplet.title = title;
      objectDapplet.overlays = overlaysDapplet
      const json2Dapplet = JSON.stringify(objectDapplet);
      writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
  
  
      const json1 = readFileSync(`./${moduleName}/dapplet/package.json`, "utf8");
      const object = JSON.parse(json1);
      object.dependencies = {};
      object.name = moduleName;
      object.title = title;
      object.description = description;
      object.author = author;
      object.license = license;
      const json2 = JSON.stringify(object);
      writeFileSync(`./${moduleName}/dapplet/package.json`, json2);
  
      const jsonMain = readFileSync(`./${moduleName}/package.json`, "utf8");
      const objectMain = JSON.parse(jsonMain);
      objectMain.scripts = scriptsMain;
      objectMain.cacheDirectories = cacheDirectories;
      objectMain.dependencies = dependenciesNotOverlay;
      const jsonMain2 = JSON.stringify(objectMain);
      writeFileSync(`./${moduleName}/package.json`, jsonMain2);
}

export function yesServerYesOverlay(moduleName,title,description, author,license){
    const json1 = readFileSync(`./${moduleName}/dapplet/package.json`, "utf8");
    const object = JSON.parse(json1);
    object.name = moduleName;
    object.title = title;
    object.description = description;
    object.author = author;
    object.license = license;
    const json2 = JSON.stringify(object);
    writeFileSync(`./${moduleName}/dapplet/package.json`, json2);

    const jsonDapplet = readFileSync(
      `./${moduleName}/dapplet/dapplet.json`,
      "utf8"
    );
    const objectDapplet = JSON.parse(jsonDapplet);
    objectDapplet.title = title;
    const json2Dapplet = JSON.stringify(objectDapplet);
    writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
}

export function optionsAdapter(moduleName){
  const jsonDapplet = readFileSync(
    `./${moduleName}/dapplet/dapplet.json`,
    "utf8"
  );
  const objectDapplet = JSON.parse(jsonDapplet);
  objectDapplet.dependencies = dependenciesWithAdapter;
  const json2Dapplet = JSON.stringify(objectDapplet);
  writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
}

export function createAdapter(moduleName,title){
  const jsonDapplet = readFileSync(
    `./${moduleName}/dapplet.json`,
    "utf8"
  );
  const objectDapplet = JSON.parse(jsonDapplet);
  objectDapplet.title = title;
  const json2Dapplet = JSON.stringify(objectDapplet);
  writeFileSync(`./${moduleName}/dapplet.json`, json2Dapplet);
}

export function createInterface(moduleName,title){
  const jsonDapplet = readFileSync(
    `./${moduleName}/dapplet.json`,
    "utf8"
  );
  const objectDapplet = JSON.parse(jsonDapplet);
  objectDapplet.title = title;
  const json2Dapplet = JSON.stringify(objectDapplet);
  writeFileSync(`./${moduleName}/dapplet.json`, json2Dapplet);
}