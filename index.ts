#! /usr/bin/env node
//SHABANG

import inquirer from "inquirer";

const answer = await inquirer.prompt([

  //First number input
  { message: "enter first number", type: "number", name: "firstNumber" },

  //Second number input
  { message: "enter second number", type: "number", name: "secondNumber" },

  //Select operator
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statement

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);    
}
else if(answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
}
else {
  console.log("please select valid operator");
}
