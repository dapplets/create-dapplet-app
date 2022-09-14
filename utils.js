import { readFileSync, writeFileSync } from "fs";
import fs from "fs";
import {
  scriptsMain,
  cacheDirectories,
  overlaysDapplet,
  configSchemaNotServer,
  configDefaultNotServer,
  scriptsMainNotServer,
  cacheDirectoriesWithOverlay,
  scriptsMainNotOverlay,
  cacheDirectoriesWithServer,
  scriptAdapterNotServerNotOverlay,
  cacheDirectoriesAdapterNotServerNotOverlay,
  scriptAdapterNotServerYesOverlay,
  cacheDirectoriesAdapterNotServerYesOverlay,
  scriptAdapterYesServerNoOverlay,
  cacheDirectoriesAdapterYesServerNoOverlay,
  scriptAdapterYesServerYesOverlay,
  cacheDirectoriesAdapterYesServerYesOverlay,
  scriptNoAdapterYesServerYesOverlay,
  cacheDirectoriesNoAdapterYesServerYesOverlay,
} from "./constants";

export function notOverlayNotServer(
  moduleName,
  title,
  description,
  author,
  license
) {
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
  const jsonMain2 = JSON.stringify(objectMain);
  writeFileSync(`./${moduleName}/package.json`, jsonMain2);

  fs.unlink(`./${moduleName}/dapplet/src/api.ts`, (err) => {
    if (err) throw err;
  });
  fs.unlink(`./${moduleName}/dapplet/src/types.ts`, (err) => {
    if (err) throw err;
  });
}

export function notServerYesOverlay(
  moduleName,
  title,
  description,
  author,
  license
) {
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
  object.name = moduleName;
  object.title = title;
  object.description = description;
  object.author = author;
  object.license = license;
  const json2 = JSON.stringify(object);
  writeFileSync(`./${moduleName}/dapplet/package.json`, json2);

  const jsonSchemaDefault = readFileSync(
    `./${moduleName}/dapplet/config/default.json`,
    "utf8"
  );
  const objectSchema = JSON.parse(jsonSchemaDefault);
  objectSchema.dev = configDefaultNotServer;
  const jsonSchemaDefault2 = JSON.stringify(objectSchema);
  writeFileSync(
    `./${moduleName}/dapplet/config/default.json`,
    jsonSchemaDefault2
  );

  const jsonSchema = readFileSync(
    `./${moduleName}/dapplet/config/schema.json`,
    "utf8"
  );
  const objectSchemaConfig = JSON.parse(jsonSchema);
  objectSchemaConfig.properties = configSchemaNotServer;
  const jsonSchema2 = JSON.stringify(objectSchemaConfig);
  writeFileSync(`./${moduleName}/dapplet/config/schema.json`, jsonSchema2);

  const jsonMain = readFileSync(`./${moduleName}/package.json`, "utf8");
  const objectMain = JSON.parse(jsonMain);
  objectMain.scripts = scriptsMainNotServer;
  objectMain.cacheDirectories = cacheDirectoriesWithOverlay;
  const jsonMain2 = JSON.stringify(objectMain);
  writeFileSync(`./${moduleName}/package.json`, jsonMain2);

  const jsonOverlay = readFileSync(`./${moduleName}/overlay/package.json`, "utf8");
  const objectOverlay = JSON.parse(jsonOverlay);
  objectOverlay.author = author;
  objectOverlay.license = license;
  const jsonOverlay2 = JSON.stringify(objectOverlay);
  writeFileSync(`./${moduleName}/overlay/package.json`, jsonOverlay2);
}

export function yesServerNotOverlay(
  moduleName,
  title,
  description,
  author,
  license
) {
  const jsonDapplet = readFileSync(
    `./${moduleName}/dapplet/dapplet.json`,
    "utf8"
  );
  const objectDapplet = JSON.parse(jsonDapplet);
  objectDapplet.title = title;
  objectDapplet.overlays = overlaysDapplet;
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
  objectMain.scripts = scriptsMainNotOverlay;
  objectMain.cacheDirectories = cacheDirectoriesWithServer;
  const jsonMain2 = JSON.stringify(objectMain);
  writeFileSync(`./${moduleName}/package.json`, jsonMain2);

  const jsonServer = readFileSync(`./${moduleName}/server/package.json`, "utf8");
  const objectServer = JSON.parse(jsonServer);
  objectServer.author = author;
  objectServer.license = license;
  const jsonServer2 = JSON.stringify(objectServer);
  writeFileSync(`./${moduleName}/server/package.json`, jsonServer2);

  fs.unlink(`./${moduleName}/dapplet/src/api.ts`, (err) => {
    if (err) throw err;
  });
  fs.unlink(`./${moduleName}/dapplet/src/types.ts`, (err) => {
    if (err) throw err;
  });
}

export function yesServerYesOverlay(
  moduleName,
  title,
  description,
  author,
  license
) {
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

  const jsonOverlay = readFileSync(`./${moduleName}/overlay/package.json`, "utf8");
  const objectOverlay = JSON.parse(jsonOverlay);
  objectOverlay.author = author;
  objectOverlay.license = license;
  const jsonOverlay2 = JSON.stringify(objectOverlay);
  writeFileSync(`./${moduleName}/overlay/package.json`, jsonOverlay2);

  const jsonServer = readFileSync(`./${moduleName}/server/package.json`, "utf8");
  const objectServer = JSON.parse(jsonServer);
  objectServer.author = author;
  objectServer.license = license;
  const jsonServer2 = JSON.stringify(objectServer);
  writeFileSync(`./${moduleName}/server/package.json`, jsonServer2);
}

export function createAdapter(moduleName, title) {
  const jsonDapplet = readFileSync(`./${moduleName}/dapplet.json`, "utf8");
  const objectDapplet = JSON.parse(jsonDapplet);
  objectDapplet.title = title;
  const json2Dapplet = JSON.stringify(objectDapplet);
  writeFileSync(`./${moduleName}/dapplet.json`, json2Dapplet);
}

export function createInterface(moduleName, title) {
  const jsonDapplet = readFileSync(`./${moduleName}/dapplet.json`, "utf8");
  const objectDapplet = JSON.parse(jsonDapplet);
  objectDapplet.title = title;
  const json2Dapplet = JSON.stringify(objectDapplet);
  writeFileSync(`./${moduleName}/dapplet.json`, json2Dapplet);
}

export function createContext(template, moduleName, context, options) {
  if (template === "adapter") {
    const jsonDapplet = readFileSync(`./${moduleName}/dapplet.json`, "utf8");
    const objectDapplet = JSON.parse(jsonDapplet);
    objectDapplet.contextIds = context ? context : [];
    const json2Dapplet = JSON.stringify(objectDapplet);
    writeFileSync(`./${moduleName}/dapplet.json`, json2Dapplet);
  } else if (template === "dapplet") {
    if (!options.optionsDappletAdapter) {
      const jsonDapplet = readFileSync(
        `./${moduleName}/dapplet/dapplet.json`,
        "utf8"
      );
      const objectDapplet = JSON.parse(jsonDapplet);
      objectDapplet.contextIds = context ? context : [];
      const json2Dapplet = JSON.stringify(objectDapplet);
      writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);
    } else {
      const jsonDapplet = readFileSync(
        `./${moduleName}/dapplet/dapplet.json`,
        "utf8"
      );
      const objectDapplet = JSON.parse(jsonDapplet);
      objectDapplet.contextIds = context ? ["adapter"] : [];
      const json2Dapplet = JSON.stringify(objectDapplet);
      writeFileSync(`./${moduleName}/dapplet/dapplet.json`, json2Dapplet);

      const jsonAdapter = readFileSync(
        `./${moduleName}/adapter/dapplet.json`,
        "utf8"
      );
      const objectAdapter = JSON.parse(jsonAdapter);
      objectAdapter.contextIds = context ? context : [];
      const json2Adapter = JSON.stringify(objectAdapter);
      writeFileSync(`./${moduleName}/adapter/dapplet.json`, json2Adapter);
    }
  }
}

export function optionsAdapterNotServerNotOverlay(moduleName) {
  const json = readFileSync(`./${moduleName}/package.json`, "utf8");
  const object = JSON.parse(json);
  object.scripts = scriptAdapterNotServerNotOverlay;
  object.cacheDirectories = cacheDirectoriesAdapterNotServerNotOverlay;
  const json2 = JSON.stringify(object);
  writeFileSync(`./${moduleName}/package.json`, json2);
}

export function optionsNoAdapterNotServerNotOverlay(moduleName) {
  const json = readFileSync(`./${moduleName}/package.json`, "utf8");
  const object = JSON.parse(json);
  object.cacheDirectories = cacheDirectories;
  object.scripts = scriptsMain;
  const json2 = JSON.stringify(object);
  writeFileSync(`./${moduleName}/package.json`, json2);
}

export function optionsAdapterNotServerYesOverlay(moduleName) {
  const json = readFileSync(`./${moduleName}/package.json`, "utf8");
  const object = JSON.parse(json);
  object.scripts = scriptAdapterNotServerYesOverlay;
  object.cacheDirectories = cacheDirectoriesAdapterNotServerYesOverlay;
  const json2 = JSON.stringify(object);
  writeFileSync(`./${moduleName}/package.json`, json2);
}

export function optionsNoAdapterNotServerYesOverlay(moduleName) {
  const json = readFileSync(`./${moduleName}/package.json`, "utf8");
  const object = JSON.parse(json);
  object.cacheDirectories = cacheDirectoriesWithOverlay;
  object.scripts = scriptsMainNotServer;
  const json2 = JSON.stringify(object);
  writeFileSync(`./${moduleName}/package.json`, json2);
}

export function optionsAdapterYesServerNotOverlay(moduleName) {
  const json = readFileSync(`./${moduleName}/package.json`, "utf8");
  const object = JSON.parse(json);
  object.scripts = scriptAdapterYesServerNoOverlay;
  object.cacheDirectories = cacheDirectoriesAdapterYesServerNoOverlay;
  const json2 = JSON.stringify(object);
  writeFileSync(`./${moduleName}/package.json`, json2);
}

export function optionsNoAdapterYesServerNotOverlay(moduleName) {
  const json = readFileSync(`./${moduleName}/package.json`, "utf8");
  const object = JSON.parse(json);
  object.scripts = scriptsMainNotOverlay;
  object.cacheDirectories = cacheDirectoriesWithServer;
  const json2 = JSON.stringify(object);
  writeFileSync(`./${moduleName}/package.json`, json2);
}

export function optionsAdapterYesServerYesOverlay(moduleName) {
  const json = readFileSync(`./${moduleName}/package.json`, "utf8");
  const object = JSON.parse(json);
  object.scripts = scriptAdapterYesServerYesOverlay;
  object.cacheDirectories = cacheDirectoriesAdapterYesServerYesOverlay;
  const json2 = JSON.stringify(object);
  writeFileSync(`./${moduleName}/package.json`, json2);
}

export function optionsNoAdapterYesServerYesOverlay(moduleName) {
  const json = readFileSync(`./${moduleName}/package.json`, "utf8");
  const object = JSON.parse(json);
  object.scripts = scriptNoAdapterYesServerYesOverlay;
  object.cacheDirectories = cacheDirectoriesNoAdapterYesServerYesOverlay;
  const json2 = JSON.stringify(object);
  writeFileSync(`./${moduleName}/package.json`, json2);
}

export function addInfoAdapter(moduleName, license, author){
  const jsonAdapter = readFileSync(`./${moduleName}/adapter/package.json`, "utf8");
  const objectAdapter = JSON.parse(jsonAdapter);
  objectAdapter.author = author;
  objectAdapter.license = license;
  const jsonAdapter2 = JSON.stringify(objectAdapter);
  writeFileSync(`./${moduleName}/adapter/package.json`, jsonAdapter2);
}
