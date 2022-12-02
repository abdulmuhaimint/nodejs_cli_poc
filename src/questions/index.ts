import { itemChoices, sizeChoices } from "../choices/index.js";

export const questions = [
  {
    type: "list",
    name: "item",
    message: "What do you want to do?",
    choices: itemChoices,
  },
  {
    type: "list",
    name: "size",
    message: "What size do you need?",
    choices: sizeChoices,
  },
];
