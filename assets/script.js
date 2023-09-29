// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_+";
var numbers = "0123456789";




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    var length = (document.getElementById("length").value);
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var special = document.getElementById("special").checked;


if(!special && !lowercase && !uppercase && !numbers) {
    windows.alert("You must choose at least one character type");
    

}
    
}

/*
document.getElementById("Btn").addEventListener("click", writePassword);{
var length = (document.getElementById("length").value);
var lowercase = document.getElementById("lowercase").checked;
var uppercase = document.getElementById("uppercase").checked;
var numbers = document.getElementById("numbers").checked;
var special = document.getElementById("special").checked;


if(!special && !lowercase && !uppercase && !numbers) {
    alert("You must choose at least one character type");
    

}
}
*/

writePassword();




