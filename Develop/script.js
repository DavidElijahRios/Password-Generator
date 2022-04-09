// Assignment Code

//TODO need to make a global variable to store letters and characters

var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "0123456789";
var special = "!#$%&)(*+-./:;?@[]^_{}~";

var generateBtn = document.querySelector("#generate");

//TODO need to write a function named writePassword to run below

var generatePassword = function () {

}

// function: Plan build out below

// need a confirm method to user to see if they want lowercase, uppercase, numbers, and or special characters
// need to capture user input in variables 
// need to use a prompt method to ask user how many characters they want for password min 8 max 128 characters

// once submitted password needs to be generated in alert window or in password generator box.


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
