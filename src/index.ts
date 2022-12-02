#! /usr/bin/env node
import inquirer from "inquirer";
import { questions } from "./interactive/questions.js";
import { writeFile } from "./utils/utils.js";

const main = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    console.log("Writing to output.json");
    await writeFile("output.json", JSON.stringify(answers, null, "  "));
  } catch (error) {
    console.error(error);
  }
};

main();
