#! /usr/bin/env node
import inquirer from "inquirer";

const main = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "theme",
        message: "What do you want to do?",
        choices: [
          "Order a pizza",
          "Make a reservation",
          new inquirer.Separator(),
          "Ask for opening hours",
          {
            name: "Contact support",
            type: "list",
            choices: ["ine", "two"],
          },
          "Talk to the receptionist",
        ],
      },
      {
        type: "list",
        name: "size",
        message: "What size do you need?",
        choices: ["Jumbo", "Large", "Standard", "Medium", "Small", "Micro"],
        filter(val) {
          return val.toLowerCase();
        },
      },
    ]);
    console.log(JSON.stringify(answers, null, "  "));
  } catch (error) {
    console.error(error);
  }
};

main();
