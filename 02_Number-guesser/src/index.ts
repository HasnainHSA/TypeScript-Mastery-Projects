#! /usr/bin/env node

// Calling inquirer from the packages
import inquirer from "inquirer";

// creating a function
async function NumberGuesser() {

    // generating random number from maths method
    const random_number = Math.floor(Math.random() * 10 + 1);

    const userInput = await inquirer.prompt([
        {
            name: "user_guess_no",
            type: "number",
            message: "Please guess a number between 1 to 10.",
        },
    ]);

    // comparing the random number and user guessed number
    if (userInput.user_guess_no === random_number) {
        console.log("Congratulations! You guessed the right number.");
    } else {
        console.log(`Sorry, the correct number was ${random_number}. Guess again!`);
    }
}

// Calling the function
NumberGuesser();