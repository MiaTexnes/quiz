const prompt = require('prompt-sync')();
const open = require('open');

const correctUsername = "2222"; // Set your username here
const correctPassword = "1111"; // Set your password here

function login(inputUsername, inputPassword) {
    return inputUsername === correctUsername && inputPassword === correctPassword;
}

// Ask for username first
const userNameInput = prompt('Enter username: ');
const userInput = prompt('Enter password: ');

if (login(userNameInput, userInput)) {
    console.log("Login successful!");
    open('quiz.html');
} else {
    console.log("Incorrect username or password.");
}