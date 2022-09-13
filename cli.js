import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--choice": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--choice",
      "-y": "--yes",
      "-i": "--install",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args["--yes"] || false,
    template: args._[0],
    name: args._[0],
    author: args._[0],
    license: args._[0],
    title: args._[0],
    optionsDappletAdapter: args["--choice"] || false,
    optionsDappletServer: args["--choice"] || false,
    optionsDappletOverlay: args["--choice"] || false,
    optionsContextID: args._[0],
    description: args._[0],
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = "dapplet";
  const defaultName = "dapplet-module";

  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
      name: options.name || defaultName,
      author: options.author || "",
      license: options.license || "",
      title: options.title || defaultName,
      description : options.description || ''
    };
  }

  const questions = [];

  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Please choose which project install",
      choices: ["adapter", "interface", "dapplet"],
      default: defaultTemplate,
    });
  }

  if (!options.name) {
    questions.push({
      type: "string",
      name: "name",
      message: "Please enter name project",
      default: defaultName,
    });
  }

  if (!options.title) {
    questions.push({
      type: "string",
      name: "title",
      message: "Please enter title module (display name in extension)",
      default: defaultName,
    });
  }

  if (!options.author) {
    questions.push({
      type: "string",
      name: "author",
      message: "Please enter name company",
      default: "",
    });
  }
  if (!options.license) {
    questions.push({
      type: "string",
      name: "license",
      message: "Please enter type license",
      default: "",
    });
  }

  if (!options.description) {
    questions.push({
      type: "string",
      name: "description",
      message: "add description module",
      default: "",
    });
  }


  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    name: options.name || answers.name,
    author: options.author || answers.author,
    license: options.license || answers.license,
    title: options.title || answers.title,
    description: options.description  || answers.description
  };
}

function parseArgumentsIntoOptionsDapplets(rawArgs) {
  const args = arg(
    {
      "--choice": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--choice",
      "-y": "--yes",
      "-i": "--install",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args["--yes"] || false,
    template: args._[0],
    optionsDappletAdapter: args["--choice"] || false,
    optionsDappletServer: args["--choice"] || false,
    optionsDappletOverlay: args["--choice"] || false,
    optionsContextID: args._[0],
  };
}

async function promptForMissingOptionsDapplets(options) {
  const defaultTemplate = "dapplet";
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
      description: options.optionsDappletDescription || "",
      context: options.optionsContextID || "",
    };
  }

  const questions = [];

  if (!options.optionsDappletAdapter) {
    questions.push({
      type: "confirm",
      name: "adapter",
      message: "add adapter?",
      default: false,
    });
  }

  if (!options.optionsDappletServer) {
    questions.push({
      type: "confirm",
      name: "server",
      message: "add server?",
      default: false,
    });
  }
  if (!options.optionsDappletOverlay) {
    questions.push({
      type: "confirm",
      name: "overlay",
      message: "add overlay?",
      default: false,
    });
  }

  if (!options.optionsContextID) {
    questions.push({
      type: "string",
      name: "context",
      message: "add ContextID separated by commas",
      default: "",
    });
  }



  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    template: "dapplet",
    optionsDappletAdapter: options.optionsDappletAdapter || answers.adapter,
    optionsDappletServer: options.optionsDappletServer || answers.server,
    optionsDappletOverlay: options.optionsDappletOverlay || answers.overlay,
    optionsContextID: options.optionsContextID || answers.context,
  };
}

function parseArgumentsIntoOptionsAdapter(rawArgs) {
  const args = arg(
    {
      "--choice": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--choice",
      "-y": "--yes",
      "-i": "--install",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args["--yes"] || false,
    template: args._[0],
    optionsContextID: args._[0],
  };
}

async function promptForMissingOptionsAdapter(options) {
  const defaultTemplate = "adapter";
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
      context: options.optionsContextID || "",
    };
  }

  const questions = [];

  if (!options.optionsContextID) {
    questions.push({
      type: "string",
      name: "context",
      message: "add ContextIDs separated by commas",
      default: "",
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    template: "adapter",
    optionsContextID: options.optionsContextID || answers.context,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  if (options.template === "interface") {
    await createProject(options, options);
  } else if(options.template === "adapter"){
    let optionsAdapter = parseArgumentsIntoOptionsAdapter(args);
    optionsAdapter = await promptForMissingOptionsAdapter(optionsAdapter);
    await createProject(optionsAdapter, options);
  }
  else if(options.template === "dapplet") {
   
    let optionsDapplet = parseArgumentsIntoOptionsDapplets(args);
    optionsDapplet = await promptForMissingOptionsDapplets(optionsDapplet);
    await createProject(optionsDapplet, options);
  }
}
