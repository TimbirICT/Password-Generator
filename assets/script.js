// Assignment Code // Sourced from Starter Code and W3schools, and StackOverflow
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_+";
var numbers = "0123456789";
var characters = lowerCase + upperCase + numbers + specialCharacters;
 
function getRandomCharacter(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}



// Sourced from Dylan Osborn, AskBCS, and ChatGPT

function generatePassword() {
    var charLength = prompt ("how many characters would you like your password to be?");
    var includeSpecialCharacters = confirm ("Do you want special characters?");
    var includeNumbers = confirm ("Do you want numbers?");
    var includeLowerCase = confirm ("Do you want lower case characters?");
    var includeUpperCase = confirm ("Do you want UPPER CASE characters?");
    var password = "";

    if (charLength < 8 || charLength > 128) {
        alert ("Password must be between 8 and 128 characters");
        return "";
    }
    if (!(includeSpecialCharacters || includeNumbers || includeLowerCase || includeUpperCase)) {
        alert ("At least one character type must be selected");
        return "";
    }

    var charSet = "";
    if (includeLowerCase) charSet += lowerCase;
    if (includeUpperCase) charSet += upperCase;
    if (includeNumbers) charSet += numbers;
    if (includeSpecialCharacters) charSet += specialCharacters;
    
    var password = "";
    for (var i = 0; i < charLength; i++) {
    password += getRandomCharacter(charSet);
  }
     
    return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== "") {
  passwordText.value = password;
  }
}


// Add event listener to generate button
var generateButton = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); {  
}
      
