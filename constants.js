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
  
  export const cacheDirectories = ["dapplet/node_modules"];
  export  const overlaysDapplet = {};
  export  const dependenciesDefault = {
    "@dapplets/dapplet-extension": "^0.47.3",
    "@types/classnames": "^2.3.1",
    "@types/react-copy-to-clipboard": "^5.0.2",
    "rollup-plugin-typescript": "^1.0.1",
    "svg-react-loader": "^0.4.6",
    'webpack': "^5.67.0",
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
        "svg-react-loader": "^0.4.6",
        "webpack": "^5.67.0"
  }

  export const contextIdsAdapter =[
    "twitter-adapter.dapplet-base.eth",
    "example-google-adapter.dapplet-base.eth"
  ]

  export const dependenciesWithAdapter = {
    "example-google-adapter.dapplet-base.eth": "0.2.0",
    "twitter-adapter.dapplet-base.eth": "0.9.0"
  }

