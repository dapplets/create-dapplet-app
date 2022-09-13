export const scriptsDefault = {
    "start": "rollup -w --config rollup.config.js",
    "build": "rollup --config rollup.config.js",
    "linter": "npx eslint .",
  };
  
  export const scriptsMain = {
    "postinstall": "concurrently -c \"dapplet\" \"npm run install:dapplet\"",
    "install:dapplet": "cd dapplet && npm i",
    "start": "cd dapplet && npm start",
    "start:dapplet": "cd dapplet && npm start",
    "prettier": "npx prettier --write ."
  };

  export const scriptsMainNotServer = {
    "postinstall": "concurrently -c \"magenta,cyan\" -n \"dapplet,overlay\" \"npm run install:dapplet\" \"npm run install:overlay\"",
    "install:dapplet": "cd dapplet && npm i",
    "install:overlay": "cd overlay && npm i",
    "start": "concurrently -c \"magenta,cyan\" -n \"dapplet,overlay\" \"npm run start:dapplet\" \"npm run start:overlay\"",
    "start:dapplet": "cd dapplet && npm start",
    "start:overlay": "cd overlay && npm start",
    "prettier": "npx prettier --write ."
  }

  export const scriptsMainNotOverlay = {
    "postinstall": "concurrently -c \"magenta,cyan\" -n \"dapplet,server\" \"npm run install:dapplet\" \"npm run install:server\"",
    "install:dapplet": "cd dapplet && npm i",
    "install:server": "cd server && npm i",
    "start": "concurrently -c \"magenta,cyan\" -n \"dapplet,server\" \"npm run start:dapplet\" \"npm run start:server\"",
    "start:dapplet": "cd dapplet && npm start",
    "start:server": "cd server && npm start",
    "prettier": "npx prettier --write ."
  }
  
  export const cacheDirectories = ["dapplet/node_modules"];
  export const cacheDirectoriesWithServer = ["dapplet/node_modules","server/node_modules"];
  export const cacheDirectoriesWithOverlay = ["dapplet/node_modules","overlay/node_modules"];

  export  const overlaysDapplet = {};
  export  const dependenciesDefault = {
    "@dapplets/dapplet-extension": "^0.47.3",
    "rollup-plugin-typescript": "^1.0.1",
  };

  export const configSchemaNotServer = {
    "exampleString": {
      "type": "string",
      "title": "Example of string property"
    },
    "exampleHiddenString": {
      "type": "string",
      "title": "Example of hidden string property",
      "hidden": true
    }
  }

  export const configDefaultNotServer = {
    "exampleString": "some string value",
    "exampleHiddenString": "some string value"
  }

  export const dependenciesNotOverlay = {
        "@dapplets/dapplet-extension": "^0.47.3",
        "@types/classnames": "^2.3.1",
        "rollup-plugin-typescript": "^1.0.1",
  }


 

