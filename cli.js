import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from './main';

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
  );
  return {
    skipPrompts: args['--yes'] || false,
    template: args._[0],
    name: args._[0],
    author: args._[0],
    license: args._[0],
    optionsDappletAdapter: args['--choice'] || false,
    optionsDappletServer: args['--choice'] || false,
    optionsDappletOverlay: args['--choice'] || false
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = 'dapplet';
  const defaultName = 'dapplet-module';

  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
      name: options.name ||  defaultName,
      author: options.author ||  "",
      license: options.license || ""
    };
  }

  const questions = [];
 
  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project install',
      choices: ['adapter', 'interface', 'dapplet'],
      default: defaultTemplate,
    });

  }
  if (!options.name) {
    questions.push({
      type: 'string',
      name: 'name',
      message: 'Please enter name project',
      default: defaultName,
    });
  }
  if (!options.author) {
    questions.push({
      type: 'string',
      name: 'author',
      message: 'Please enter name company',
      default: '',
    });
  }
  if (!options.license) {
    questions.push({
      type: 'string',
      name: 'license',
      message: 'Please enter type license',
      default: '',
    });
  }
  

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    name: options.name || answers.name,
    author: options.author || answers.author,
    license: options.license || answers.license,
    optionsDappletAdapter: options.optionsDappletAdapter || answers.adapter,
    optionsDappletServer: options.optionsDappletServer || answers.server,
    optionsDappletOverlay: options.optionsDappletOverlay || answers.overlay
  };
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
    );
    return {
      skipPrompts: args['--yes'] || false,
      template: args._[0],
      optionsDappletAdapter: args['--choice'] || false,
      optionsDappletServer: args['--choice'] || false,
      optionsDappletOverlay: args['--choice'] || false
    };
  }

async function promptForMissingOptionsDapplets(options) {
    const defaultTemplate = 'dapplet';
    if (options.skipPrompts) {
      return {
        ...options,
        template: options.template || defaultTemplate,
      };
    }
  
    const questions = [];
   
    if(!options.optionsDappletAdapter ){
      questions.push({
          type: 'confirm',
          name: 'adapter',
          message: 'add adapter?',
          default: false,
        });
    }
  
    if(!options.optionsDappletServer){
      questions.push({
          type: 'confirm',
          name: 'server',
          message: 'add server?',
          default: false,
        });
    }
    if(!options.optionsDappletOverlay){
      questions.push({
          type: 'confirm',
          name: 'overlay',
          message: 'add overlay?',
          default: false,
        });
    }
  
    const answers = await inquirer.prompt(questions);
 
    return {
      ...options,
      template: 'dapplet',
      optionsDappletAdapter: options.optionsDappletAdapter || answers.adapter,
      optionsDappletServer: options.optionsDappletServer || answers.server,
      optionsDappletOverlay: options.optionsDappletOverlay || answers.overlay
    };
  }


export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  if(options.template !== 'dapplet') {
    await createProject(options, options); 
  }else{
   let optionsDapplet = parseArgumentsIntoOptionsDapplets(args)
   optionsDapplet = await promptForMissingOptionsDapplets(optionsDapplet) 
   await createProject(optionsDapplet,options);
  }

}
