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
  passwordText.value = generatedPassword;

} 


function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];
  
  }
      while (generatedPassword.length < length) {
          password += characters[Math.floor(Math.random() * characters.length)];
      }
  {
  
    passwordText.value = generatePassword;
  

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
   
}
      

writePassword();




