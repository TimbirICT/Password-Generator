// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = lowerCase + upperCase + numbers + specialCharacters;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_+";
var numbers = "0123456789";
var CharLength = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
 
  /*passwordText.value = generatePassword;*/






function generatePassword() {
    var CharLength = prompt ("how many characters would you like your password to be?");
    var specialCharacters = confirm ("Do you want special characters?");
    var numbers = confirm ("Do you want numbers?");
    var lowerCase = confirm ("Do you want lower case characters?");
    var upperCase = confirm ("Do you want UPPER CASE characters?");

    if (CharLength < 8 || CharLength > 128) {
        alert ("Password must be between 8 and 128 characters");
        return;
    }
    if (specialCharacters === false && numbers === false && lowerCase === false && upperCase === false) {
        alert ("You must choose at least one type of character");
        return;
    }
    if (specialCharacters === true && numbers === true && lowerCase === true && upperCase === true) {
        alert ("Password has been generated with special characters, numbers, lower case and UPPER CASE characters!");
        return;
    }
    if (specialCharacters === true && numbers === true && lowerCase === true && upperCase === false) {
        alert ("Password has been generated with special characters, numbers, & lower case characters!");
        return;
    }
    if (specialCharacters === true && numbers === true && lowerCase === false && upperCase === true) {
        alert ("Password has been generated with special characters, numbers, and UPPER CASE characters!");
        return;
    }
    if (specialCharacters === true && numbers === true && lowerCase === false && upperCase === false) {
        alert ("Password has been generated with special characters, & number characters!");
        return;
    }
    if (specialCharacters === true && numbers === false && lowerCase === true && upperCase === true) {
        alert ("Password has been generated with special characters, UPPER CASE & lower case characters!");
        return;
    }
    if (specialCharacters === true && numbers === false && lowerCase === true && upperCase === false) {
        alert ("Password has been generated with special characters, & lower case characters!");
        return;
    }
    if (specialCharacters === true && numbers === false && lowerCase === false && upperCase === true) {
        alert ("Password has been generated with special characters, & UPPER CASE characters!");
        return;
    }
    if (specialCharacters === true && numbers === false && lowerCase === false && upperCase === false) {
        alert ("Password has been generated with special characters only!");
        return;
    }
    if (specialCharacters === false && numbers === true && lowerCase === true && upperCase === true) {
        alert ("Password has been generated with numbers, Upper & lower case characters!");
        return;
    }
    if (specialCharacters === false && numbers === true && lowerCase === true && upperCase === false) {
        alert ("Password has been generated with numbers, & lower case characters!");
        return;
    }
    if (specialCharacters === false && numbers === true && lowerCase === false && upperCase === true) {
        alert ("Password has been generated with numbers, & UPPER CASE characters!");
        return;
    }
    if (specialCharacters === false && numbers === true && lowerCase === false && upperCase === false) {
        alert ("Password has been generated with numbers only!");
        return;
    }
    if (specialCharacters === false && numbers === false && lowerCase === true && upperCase === true) {
        alert ("Password has been generated with lower case, and upper case characters!");
        return;
    }
    if (specialCharacters === false && numbers === false && lowerCase === true && upperCase === false) {
        alert ("Password has been generated with lower case characters only!");
        return;
    }
    if (specialCharacters === false && numbers === false && lowerCase === false && upperCase === true) {
        alert ("Password has been generated with upper case characters only!");
        return;
    }
    if (specialCharacters === false && numbers === false && lowerCase === false && upperCase === false) {
        alert ("Password has been generated with no characters!");
        return;
    }
     
}


/* passwordText.value = writePassword;
*/
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
   
}
      
/*
writePassword();
*/