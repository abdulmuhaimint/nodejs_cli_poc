import { QuestionCollection } from "inquirer";
import { languageChoices, sizeChoices } from "../interactive/choices.js";

export const questions:QuestionCollection = [
  {
    type: "list",
    name: "Language",
    message: "Choose the language (normal select)",
    choices: languageChoices,
    
  },
  {
    type: "checkbox",
    name: "Languages",
    message: "Choose the languages (normal checkbox)",
    choices: languageChoices,
  },
];
