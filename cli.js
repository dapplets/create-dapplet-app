import arg from 'arg'
import fs from 'fs'
import inquirer from 'inquirer'
import { createProject } from './main'
let defaultNameDapplet = 'my-dapplet'
let defaultNameAdapter = 'my-adapter'
let defaultNameInterface = 'my-virtual-adapter'
let counter = 0

function checkNameFolderDapplet() {
  fs.stat(`./${defaultNameDapplet}`, function (err) {
    if (!err) {
      defaultNameDapplet = defaultNameDapplet + '-' + counter++
      return checkNameFolderDapplet()
    } else if (err.code === 'ENOENT') {
    }
  })
}

function checkNameFolderAdapter() {
  fs.stat(`./${defaultNameAdapter}`, function (err) {
    if (!err) {
      defaultNameAdapter = defaultNameAdapter + '-' + counter++
      return checkNameFolderAdapter()
    } else if (err.code === 'ENOENT') {
    }
  })
}

function checkNameFolderInterface() {
  fs.stat(`./${defaultNameInterface}`, function (err) {
    if (!err) {
      defaultNameInterface = defaultNameInterface + '-' + counter++
      return checkNameFolderInterface()
    } else if (err.code === 'ENOENT') {
    }
  })
}

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--choice': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--choice',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  )
  return {
    skipPrompts: args['--yes'] || false,
    type: args._[0],
    author: args._[0],
    license: args._[0],
    description: args._[0],
  }
}

async function promptForMissingOptions(options) {
  const defaultType = 'dapplet'

  if (options.skipPrompts) {
    return {
      ...options,
      type: options.type || defaultType,
      author: options.author || '',
      license: options.license || '',
      description: options.description || '',
    }
  }

  const questions = []

  if (!options.type) {
    questions.push({
      type: 'list',
      name: 'type',
      message: 'Please select project type',
      choices: ['adapter', 'interface', 'dapplet'],
      default: defaultType,
    })
  }

  if (!options.author) {
    questions.push({
      type: 'string',
      name: 'author',
      message: 'Please enter name company',
      default: '',
    })
  }
  if (!options.license) {
    questions.push({
      type: 'string',
      name: 'license',
      message: 'Please enter type license',
      default: '',
    })
  }

  if (!options.description) {
    questions.push({
      type: 'string',
      name: 'description',
      message: 'Please enter module description',
      default: '',
    })
  }

  checkNameFolderDapplet()
  checkNameFolderAdapter()
  checkNameFolderInterface()
  const answers = await inquirer.prompt(questions)
  return {
    ...options,
    type: options.type || answers.type,
    author: options.author || answers.author,
    license: options.license || answers.license,
    description: options.description || answers.description,
  }
}

function parseArgumentsIntoOptionsDapplets(rawArgs) {
  const args = arg(
    {
      '--choice': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--choice',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  )
  return {
    skipPrompts: args['--yes'] || false,
    type: args._[0],
    name: args._[0],
    title: args._[0],
    optionsDappletAdapter: args['--choice'] || false,
    optionsDappletServer: args['--choice'] || false,
    optionsDappletOverlay: args['--choice'] || false,
    optionsContextID: args._[0],
  }
}

async function promptForMissingOptionsDapplets(options) {
  const defaultType = 'dapplet'
  const defaultTitle = 'My Dapplet'
  if (options.skipPrompts) {
    return {
      ...options,
      type: options.type || defaultType,
      name: options.name.toLowerCase() || defaultNameDapplet,
      title: options.title || defaultTitle,
      description: options.optionsDappletDescription || '',
      context: options.optionsContextID || null,
    }
  }

  const questions = []

  if (!options.name) {
    questions.push({
      type: 'string',
      name: 'name',
      message: 'Please enter name project',
      default: defaultNameDapplet,
    })
  }

  if (!options.title) {
    questions.push({
      type: 'string',
      name: 'title',
      message: 'Please enter title module (display name in extension)',
      default: defaultTitle,
    })
  }

  if (!options.optionsDappletAdapter) {
    questions.push({
      type: 'confirm',
      name: 'adapter',
      message: 'Add adapter?',
      default: false,
    })
  }

  if (!options.optionsDappletServer) {
    questions.push({
      type: 'confirm',
      name: 'server',
      message: 'Add server?',
      default: false,
    })
  }
  if (!options.optionsDappletOverlay) {
    questions.push({
      type: 'confirm',
      name: 'overlay',
      message: 'Add overlay?',
      default: false,
    })
  }

  if (!options.optionsContextID) {
    questions.push({
      type: 'string',
      name: 'context',
      message: 'Please add ContextID separated by spaces',
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    ...options,
    type: 'dapplet',
    name: options.name || answers.name,
    title: options.title || answers.title,
    optionsDappletAdapter: options.optionsDappletAdapter || answers.adapter,
    optionsDappletServer: options.optionsDappletServer || answers.server,
    optionsDappletOverlay: options.optionsDappletOverlay || answers.overlay,
    optionsContextID: options.optionsContextID || answers.context,
  }
}

function parseArgumentsIntoOptionsAdapter(rawArgs) {
  const args = arg(
    {
      '--choice': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--choice',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  )
  return {
    skipPrompts: args['--yes'] || false,
    type: args._[0],
    name: args._[0],
    title: args._[0],
    optionsContextID: args._[0],
  }
}

async function promptForMissingOptionsAdapter(options) {
  const defaultType = 'adapter'
  const defaultTitle = 'My Adapter'
  if (options.skipPrompts) {
    return {
      ...options,
      type: options.type || defaultType,
      name: options.name.toLowerCase() || defaultNameAdapter,
      title: options.title || defaultTitle,
      context: options.optionsContextID || null,
    }
  }

  const questions = []

  if (!options.name) {
    questions.push({
      type: 'string',
      name: 'name',
      message: 'Please enter name project',
      default: defaultNameAdapter,
    })
  }

  if (!options.title) {
    questions.push({
      type: 'string',
      name: 'title',
      message: 'Please enter title module (display name in extension)',
      default: defaultTitle,
    })
  }

  if (!options.optionsContextID) {
    questions.push({
      type: 'string',
      name: 'context',
      message: 'Please add ContextID separated by spaces',
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    ...options,
    type: 'adapter',
    name: options.name || answers.name,
    title: options.title || answers.title,
    optionsContextID: options.optionsContextID || answers.context,
  }
}

function parseArgumentsIntoOptionsInterface(rawArgs) {
  const args = arg(
    {
      '--choice': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--choice',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  )
  return {
    skipPrompts: args['--yes'] || false,
    type: args._[0],
    name: args._[0],
    title: args._[0],
  }
}

async function promptForMissingOptionsInterface(options) {
  const defaultType = 'interface'
  const defaultTitle = 'My Virtual Adapter'
  if (options.skipPrompts) {
    return {
      ...options,
      type: options.type || defaultType,
      name: options.name.toLowerCase() || defaultNameInterface,
      title: options.title || defaultTitle,
    }
  }

  const questions = []

  if (!options.name) {
    questions.push({
      type: 'string',
      name: 'name',
      message: 'Please enter name project',
      default: defaultNameInterface,
    })
  }

  if (!options.title) {
    questions.push({
      type: 'string',
      name: 'title',
      message: 'Please enter title module (display name in extension)',
      default: defaultTitle,
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    ...options,
    type: 'interface',
    name: options.name || answers.name,
    title: options.title || answers.title,
  }
}

function parseArgumentsIntoOptionsDappletAdapter(rawArgs) {
  const args = arg(
    {
      '--choice': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--choice',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  )
  return {
    skipPrompts: args['--yes'] || false,
    nameAdapter: args._[0],
  }
}

async function promptForMissingOptionsDappletAdapter(options, name, author) {
  const parseName = name.toString().replace(' ', '-').toLowerCase()
  const parseAuthor = author ? author.toString().replace(' ', '-').toLowerCase() : null
  const finalName = `.${parseAuthor}`
  const defaultNameAdapter = `${parseName}-adapter${parseAuthor ? finalName : ''}`

  if (options.skipPrompts) {
    return {
      ...options,
      nameAdapter: options.nameAdapter.toLowerCase() || defaultNameAdapter,
    }
  }

  const questions = []

  if (!options.nameAdapter) {
    questions.push({
      type: 'string',
      name: 'nameAdapter',
      message: 'Please enter name adapter',
      default: defaultNameAdapter,
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    ...options,
    nameAdapter: options.nameAdapteroptions || answers.nameAdapter,
  }
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)
  if (options.type === 'interface') {
    let optionsInterface = parseArgumentsIntoOptionsInterface(args)
    optionsInterface = await promptForMissingOptionsInterface(optionsInterface)
    await createProject(optionsInterface, options)
  } else if (options.type === 'adapter') {
    let optionsAdapter = parseArgumentsIntoOptionsAdapter(args)
    optionsAdapter = await promptForMissingOptionsAdapter(optionsAdapter)
    await createProject(optionsAdapter, options)
  } else if (options.type === 'dapplet') {
    let optionsDapplet = parseArgumentsIntoOptionsDapplets(args)
    optionsDapplet = await promptForMissingOptionsDapplets(optionsDapplet)
    if (optionsDapplet.optionsDappletAdapter) {
      let optionsAdapter = parseArgumentsIntoOptionsDappletAdapter(args)
      optionsAdapter = await promptForMissingOptionsDappletAdapter(
        optionsAdapter,
        optionsDapplet.name,
        options.author
      )
      const newOptions = { ...optionsDapplet, ...optionsAdapter }
      await createProject(newOptions, options)
    } else {
      await createProject(optionsDapplet, options)
    }
  }
}
