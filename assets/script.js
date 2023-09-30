// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = lowerCase + upperCase + numbers + special;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_+";
var numbers = "0123456789";


prompt ("how many characters would you like your password to be?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;

} 


function generatePassword() {
    
  }
 
 passwordText.value = writePassword;
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
   
}
      

writePassword();




