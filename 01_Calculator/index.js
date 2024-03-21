#! /usr/bin/env node
import inquirer from "inquirer";
const userinput = await inquirer.prompt([{
        message: "Enter first operand",
        type: "Number",
        name: "FirstOperand"
    },
    {
        message: "Enter Second operand",
        type: "Number",
        name: "SecondOperand"
    },
    {
        message: "Select one of the Aritnmetic operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
console.log(userinput);
// conditional statement
if (userinput.operator === "Addition") {
    console.log(`Your value is ${userinput.FirstOperand + userinput.SecondOperand}`);
}
else if (userinput.operator === "Subtraction") {
    console.log(`Your value is ${userinput.FirstOperand - userinput.SecondOperand}`);
}
else if (userinput.operator === "Multiplication") {
    console.log(`Your value is ${userinput.FirstOperand * userinput.SecondOperand}`);
}
else if (userinput.operator === "Division") {
    console.log(userinput.FirstOperand / userinput.SecondOperand);
}
