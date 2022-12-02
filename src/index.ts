#! /usr/bin/env node
import inquirer from "inquirer";
import inquirerPrompt from 'inquirer-autocomplete-prompt';
import { questions } from "./interactive/questions.js";
import { writeFile } from "./utils/utils.js";

const main = async () => {
  try {
    //register inquirer plugins
    inquirer.registerPrompt('autocomplete', inquirerPrompt);

    //prompts
    const answers = await inquirer.prompt(questions);
    console.log("Writing to output.json");

    //writing answers to output file
    await writeFile("output.json", JSON.stringify(answers, null, "  "));
  } catch (error) {
    console.error(error);
  }
};

main();
