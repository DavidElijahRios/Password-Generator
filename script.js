// Assignment Code

//TODO need to make a global variable to store letters and characters


var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase =  "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "0123456789";
var special = "!#$%&)(*+-./:;?@[]^_{}~";

var generateBtn = document.querySelector("#generate");

//TODO need to write a function named writePassword to run below
// This function needs to return a password
var generatePassword = function () {
  //I need to create a variable that holds user answers
  var userPassLength = prompt("how many characters would you like your password to contain?");
  console.log(userPassLength)
  //want to end function if user presses cancel on the prompt button
  if (!userPassLength) {
    return;
 }
 //I also need to use a conditional statement to limit the user to 8 to 128 characters
  if (userPassLength < 8) {
       window.alert("Password character length must be between 8 and 128 characters!");
       //I want to give user a second chance at choosing the allowed amount of characters
       var userPassLength = prompt("how many characters would you like your password to contain?");
       console.log(userPassLength)
   } else if (userPassLength > 128) {
    window.alert("Password character length must be between 8 and 128 characters!");
    //I want to give user a second chance at choosing the allowed amount of characters
    var userPassLength = prompt("how many characters would you like your password to contain?");
    console.log(userPassLength)
   } 

   // need a confirm window with "Click OK if you would like to include special characters.
   var userCharacter = window.confirm("Click OK if you would like to include special characters.");
   //conditional statements to see weather true or false to use or not use special characters
   if (userCharacter === true) {
     userCharacter = userCharacter
     console.log(userCharacter)
   } else if (userCharacter === false) {
     userCharacter = userCharacter
     console.log(userCharacter)
   }

   // need a confirm window with "Click OK if you would like to include Numeric characters.
   var userNumb = window.confirm("Click OK if you would like to include Numeric characters.");
   //conditional statements to see weather true or false to use or not use Numeric characters
   if (userNumb === true) {
    userNumb = userNumb
    console.log(userNumb)
  } else if (userNumb === false) {
    userNumb = userNumb
    console.log(userNumb)
  }
   // need a confirm window with "Click OK if you would like to include lowerCase characters.
   var userLower = window.confirm("Click OK if you would like to include lowerCase characters.");
   //conditional statements to see weather true or false to use or not use lowerCase characters
   if (userLower === true) {
    userLower = userLower
    console.log(userLower)
  } else if (userLower === false) {
    userLower = userLower
    console.log(userLower)
  }
   // need a confirm window with "Click OK if you would like to include uppercaseCase characters.
   var userUpper = window.confirm("Click OK if you would like to include uppercaseCase characters."); 
   //conditional statements to see weather true or false to use or not use upperCase characters
   if (userUpper === true) {
    userUpper = userUpper
    console.log(userUpper)
  } else if (userUpper === false) {
    userUpper = userUpper
    console.log(userUpper)
  }

   //Lastly need to get all user input data to be able to give parameters for password to generate and tell it what options were chosen
   var allUserInput = [userCharacter, userNumb, userLower, userUpper];
      console.log(allUserInput)

    if (userCharacter === true) {
      userCharacter = special
      console.log(userCharacter)
    } 

    if (userNumb === true) {
      userNumb = numbers
    }

    if (userLower === true) {
      userLower = lowercase 
    }

    if (userUpper === true) {
      userUpper = uppercase
    }

    var length = parseInt(userPassLength)
    console.log(userPassLength)
      var passedUserInput = [userCharacter, userNumb, userLower, userUpper]
      console.log(passedUserInput)

     var index = Math.floor(Math.random() * passedUserInput.length);
    var finalPassword = passedUserInput[index]
     return finalPassword;
  //could get the text to appear in the generator but could not get the right parameters to generate the password.
   
   
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

