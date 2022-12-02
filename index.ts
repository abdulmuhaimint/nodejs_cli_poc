#! /usr/bin/env node
import inquirer from "inquirer";
import { questions } from "./questions/index.js";

const main = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(JSON.stringify(answers, null, "  "));
  } catch (error) {
    console.error(error);
  }
};

main();
