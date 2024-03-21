#! /usr/bin/env node 

// Prompt user for input
import inquirer from "inquirer";
const userinput = await inquirer.prompt([{
    message: "Enter first operand",
    type: "number",
    name: "FirstOperand"
},
{
    message: "Enter Second operand",
    type: "number",
    name: "SecondOperand"
},
{
    message: "Select one of the Aritnmetic operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
}
]);

console.log(userinput)

// Perform arithmetic operation based on user input
if(userinput.operator === "Addition"){
    console.log(`Your value is ${userinput.FirstOperand + userinput.SecondOperand}`)
}
else if(userinput.operator === "Subtraction"){
    console.log(`Your value is ${userinput.FirstOperand - userinput.SecondOperand}`)
}
else if(userinput.operator === "Multiplication"){
    console.log(`Your value is ${userinput.FirstOperand * userinput.SecondOperand}`)
}
else if(userinput.operator === "Division"){
    console.log(`Your value is ${userinput.FirstOperand / userinput.SecondOperand}`)
}