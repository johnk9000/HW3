// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var char1 = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
var char1vect = char1.split(", ");

function RandomInt(max) {
  return Math.floor( Math.random() * Math.floor(max));
}

console.log(char1vect);
//building RNG to
for(i = 0; i < 10; i++) {
var entry = RandomInt(char1vect.length - 1);
console.log(entry);
console.log(char1vect[entry]);
}