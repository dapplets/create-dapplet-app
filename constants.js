export const scriptsDefault = {
  start: 'rollup -w --config rollup.config.js',
  build: 'rollup --config rollup.config.js',
  linter: 'npx eslint .',
}

export const scriptsMain = {
  postinstall: 'npm run install:dapplet',
  'install:dapplet': 'cd dapplet && npm i',
  start: 'cd dapplet && npm start',
  'start:dapplet': 'cd dapplet && npm start',
  prettier: 'npx prettier --write .',
}

export const scriptsMainNotServer = {
  postinstall:
    'concurrently -c "magenta,cyan" -n "dapplet,overlay" "npm run install:dapplet" "npm run install:overlay"',
  'install:dapplet': 'cd dapplet && npm i',
  'install:overlay': 'cd overlay && npm i',
  start:
    'concurrently -c "magenta,cyan" -n "dapplet,overlay" "npm run start:dapplet" "npm run start:overlay"',
  'start:dapplet': 'cd dapplet && npm start',
  'start:overlay': 'cd overlay && npm start',
  prettier: 'npx prettier --write .',
}

export const scriptsMainNotOverlay = {
  postinstall:
    'concurrently -c "magenta,cyan" -n "dapplet,server" "npm run install:dapplet" "npm run install:server"',
  'install:dapplet': 'cd dapplet && npm i',
  'install:server': 'cd server && npm i',
  start:
    'concurrently -c "magenta,cyan" -n "dapplet,server" "npm run start:dapplet" "npm run start:server"',
  'start:dapplet': 'cd dapplet && npm start',
  'start:server': 'cd server && npm start',
  prettier: 'npx prettier --write .',
}

export const cacheDirectories = ['dapplet/node_modules']
export const cacheDirectoriesWithServer = ['dapplet/node_modules', 'server/node_modules']
export const cacheDirectoriesWithOverlay = ['dapplet/node_modules', 'overlay/node_modules']

export const overlaysDapplet = {}

export const configSchemaNotServer = {
  exampleString: {
    type: 'string',
    title: 'Example of string property',
  },
  exampleHiddenString: {
    type: 'string',
    title: 'Example of hidden string property',
    hidden: true,
  },
}

export const configDefaultNotServer = {
  exampleString: 'some string value',
  exampleHiddenString: 'some string value',
}

export const scriptAdapterNotServerNotOverlay = {
  postinstall:
    'concurrently -c "magenta,cyan" -n "dapplet,adapter" "npm run install:dapplet" "npm run install:adapter"',
  'install:dapplet': 'cd dapplet && npm i',
  'install:adapter': 'cd adapter && npm i',
  start:
    'concurrently -c "magenta,cyan" -n "dapplet,adapter" "npm run start:dapplet" "npm run start:adapter"',
  'start:dapplet': 'cd dapplet && npm start',
  'start:adapter': 'cd adapter && npm start',
  prettier: 'npx prettier --write .',
}

export const cacheDirectoriesAdapterNotServerNotOverlay = [
  'dapplet/node_modules',
  'adapter/node_modules',
]

export const scriptAdapterNotServerYesOverlay = {
  postinstall:
    'concurrently -c "magenta,cyan,yellow" -n "dapplet,adapter,overlay" "npm run install:dapplet" "npm run install:overlay" "npm run install:adapter"',
  'install:dapplet': 'cd dapplet && npm i',
  'install:overlay': 'cd overlay && npm i',
  'install:adapter': 'cd adapter && npm i',
  start:
    'concurrently -c "magenta,cyan,yellow" -n "dapplet,overlay,adapter" "npm run start:dapplet" "npm run start:overlay" "npm run start:adapter"',
  'start:dapplet': 'cd dapplet && npm start',
  'start:adapter': 'cd adapter && npm start',
  'start:overlay': 'cd overlay && npm start',
  prettier: 'npx prettier --write .',
}

export const cacheDirectoriesAdapterNotServerYesOverlay = [
  'dapplet/node_modules',
  'adapter/node_modules',
  'overlay/node_modules',
]

export const scriptAdapterYesServerNoOverlay = {
  postinstall:
    'concurrently -c "magenta,cyan,yellow" -n "dapplet,adapter,server" "npm run install:dapplet" "npm run install:server" "npm run install:adapter"',
  'install:dapplet': 'cd dapplet && npm i',
  'install:server': 'cd server && npm i',
  'install:adapter': 'cd adapter && npm i',
  start:
    'concurrently -c "magenta,cyan,yellow" -n "dapplet,server,adapter" "npm run start:dapplet" "npm run start:server" "npm run start:adapter"',
  'start:dapplet': 'cd dapplet && npm start',
  'start:adapter': 'cd adapter && npm start',
  'start:server': 'cd overlay && npm start',
  prettier: 'npx prettier --write .',
}

export const cacheDirectoriesAdapterYesServerNoOverlay = [
  'dapplet/node_modules',
  'adapter/node_modules',
  'server/node_modules',
]

export const scriptAdapterYesServerYesOverlay = {
  postinstall:
    'concurrently -c "magenta,cyan,yellow,gray" -n "dapplet,overlay,server,adapter" "npm run install:dapplet" "npm run install:overlay" "npm run install:server" "npm run install:adapter"',
  'install:dapplet': 'cd dapplet && npm i',
  'install:overlay': 'cd overlay && npm i',
  'install:server': 'cd server && npm i',
  'install:adapter': 'cd adapter && npm i',
  start:
    'concurrently -c "magenta,cyan,yellow,gray" -n "dapplet,overlay,server,adapter" "npm run start:dapplet" "npm run start:overlay" "npm run start:server" "npm run start:adapter"',
  'start:dapplet': 'cd dapplet && npm start',
  'start:overlay': 'cd overlay && npm start',
  'start:server': 'cd server && npm start',
  'start:adapter': 'cd adapter && npm start',
  prettier: 'npx prettier --write .',
}

export const cacheDirectoriesAdapterYesServerYesOverlay = [
  'dapplet/node_modules',
  'overlay/node_modules',
  'server/node_modules',
  'adapter/node_modules',
]

export const scriptNoAdapterYesServerYesOverlay = {
  postinstall:
    'concurrently -c "magenta,cyan,gray" -n "dapplet,overlay,server" "npm run install:dapplet" "npm run install:overlay" "npm run install:server"',
  'install:dapplet': 'cd dapplet && npm i',
  'install:overlay': 'cd overlay && npm i',
  'install:server': 'cd server && npm i',
  start:
    'concurrently -c "magenta,cyan,gray" -n "dapplet,overlay,server" "npm run start:dapplet" "npm run start:overlay" "npm run start:server"',
  'start:dapplet': 'cd dapplet && npm start',
  'start:overlay': 'cd overlay && npm start',
  'start:server': 'cd server && npm start',
  prettier: 'npx prettier --write .',
}

export const cacheDirectoriesNoAdapterYesServerYesOverlay = [
  'dapplet/node_modules',
  'overlay/node_modules',
  'server/node_modules',
]
