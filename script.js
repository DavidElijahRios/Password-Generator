// Assignment Code

//TODO need to make a global variable to store letters and characters


var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase =  "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "0123456789";
var special = "!#$%&)(*+-./:;?@[]^_{}~";

var generateBtn = document.querySelector("#generate");


// This function needs to return a password
var generatePassword = function () {
  
  var userPassLength = prompt("how many characters would you like your password to contain?");
  console.log(userPassLength)
  //want to end function if user presses cancel on the prompt button
  if (!userPassLength) {
    return;
 }
 //
  if (userPassLength < 8) {
       window.alert("Password character length must be between 8 and 128 characters!");
      
      return;
   } else if (userPassLength > 128) {
    window.alert("Password character length must be between 8 and 128 characters!");
    
    return;
   } 
   //I need to create a variable that holds user answers
   var allUserInput = "";
   //Variable to hold at least one of each user input selection to ensure that no matter even or odd password length it will include 
   //the min amount of 1 of the desired characters.
   var finalPassword = "";
   // need a confirm window with "Click OK if you would like to include special characters.
   var userCharacter = window.confirm("Click OK if you would like to include special characters.");
   //conditional statements to see weather true or false to use or not use special characters
   if (userCharacter === true) {
     //adding user input to corresponding character to choose from
     allUserInput += special
     //variable to ensure that at least one of the selected character will generate in the password
     // and have it select a random one of the length of the special global variable.
     finalPassword += special [Math.floor(Math.random() * special.length)]
    
   }

   // need a confirm window with "Click OK if you would like to include Numeric characters.
   var userNumb = window.confirm("Click OK if you would like to include Numeric characters.");
   //conditional statements to see weather true or false to use or not use Numeric characters
   if (userNumb === true) {
     allUserInput += numbers
     finalPassword += numbers [Math.floor(Math.random() * numbers.length)]
    
  }
   // need a confirm window with "Click OK if you would like to include lowerCase characters.
   var userLower = window.confirm("Click OK if you would like to include lowerCase characters.");
   //conditional statements to see weather true or false to use or not use lowerCase characters
   if (userLower === true) {
     allUserInput += lowercase
     finalPassword += lowercase [Math.floor(Math.random() * lowercase.length)]
  
  }
   // need a confirm window with "Click OK if you would like to include uppercaseCase characters.
   var userUpper = window.confirm("Click OK if you would like to include uppercaseCase characters."); 
   //conditional statements to see weather true or false to use or not use upperCase characters
   if (userUpper === true) {
     allUserInput += uppercase
     finalPassword += uppercase [Math.floor(Math.random() * uppercase.length)]
  
  }

   //Lastly need to get all user input data to be able to give parameters for password to generate and tell it what options were chosen
   
      console.log(allUserInput)
      console.log(finalPassword)
    
    // this will turn the string user inputed to am integer
    var length = parseInt(userPassLength)
    console.log(userPassLength)
   
     // for loop let the i be the starting point of finalPassword (which would have been user input)
     // and if the number is less than the amount of characters user selected add 1
     for (let i = finalPassword.length; i < length; i++) {
       //this variable selects random characters of what user inputted
      var index = Math.floor(Math.random() * allUserInput.length);
      finalPassword += allUserInput[index]
     }
     
     return finalPassword;
   
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

