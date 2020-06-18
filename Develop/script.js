// Declaring necessary variables
var pwdLength = ;
var pwdCase = false;
var pwdNumeric = false;
// //prompts and confirms
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Writing out conditional tree for listed password conditions

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charUpper = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
var charLower = toLowerCase(charUpper);
var charNum = "1, 2, 3, 4, 5, 6, 7, 8, 9, 0";

var UpperVector = charUpper.split(", ");
var LowerVector = charLower.split(", ");
var NumVector = charNum.split(", ");

// Calling RandomInt fcn to return random integers for concision
function RandomInt(max) {
  return Math.floor( Math.random() * Math.floor(max));
}

console.log(char1vect);
//building RNG to
for(i = 0; i < 10; i++) {
var entry = RandomInt(MasterVector.length - 1);
console.log(entry);
console.log(char1vect[entry]);
}