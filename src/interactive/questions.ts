import { QuestionCollection } from "inquirer";
import { languageChoices, osChoices } from "../interactive/choices.js";
import { searchArray } from "../utils/utils.js";

export const questions: QuestionCollection = [
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
  {
    type: "autocomplete",
    name: "Operating systems",
    message: "Select an operating system (search select)",
    source: (answersSoFar, input) => searchArray(osChoices, input),
  },
];
