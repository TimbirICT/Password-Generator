// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = lowerCase + upperCase + numbers + special;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_+";
var numbers = "0123456789";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  /*passwordText.value = generatePassword;*/

} 


function generatePassword() {
    var CharLength = prompt ("how many characters would you like your password to be?");
    console.log(CharLength);
    var specialCharacters = confirm ("Do you want special characters?");
    console.log(specialCharacters);
    var numbers = confirm ("Do you want numbers?");
    console.log(numbers);
    var lowerCase = confirm ("Do you want lower case characters?");
    console.log(lowerCase);
    var upperCase = confirm ("Do you want UPPER CASE characters?");
    console.log(upperCase);
    
}
 
/* passwordText.value = writePassword;
*/
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
   
}
      
/*
writePassword();
*/



