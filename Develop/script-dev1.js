// Declaring necessary variables
var pwdLength = 0;
var pwdCase = false;
var pwdNumeric = false;
// //prompts and confirms
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var pwdLength = prompt("How long do you want your password to be? Choose a # between 8 and 128");
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
var pwdCase = confirm("CaSe SeNSitIVitY?");
var pwdNumeric = confirm("α-numeric? (do you want numbers?)")
var pwdSpec = confirm("$P⁅¢IAL characters?")
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
console.log(pwdLength);
console.log('--------');
console.log(pwdCase);
console.log('--------');
console.log(pwdNumeric);
console.log('--------');
console.log(pwdSpec);
console.log('--------');
// Assignment Code
var password = "Error!"; // Declaring the password variable to write 'Error!' if something wrong happens

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Writing out conditional tree for listed password conditions
// Checking if value is an integer between 7 abd 129
if (pwdLength.typeof === 'integer' && pwdLength >= 8 &&  pwdLength <= 128) {
  //Compute in CASE SENSITIVITY vector
  if(pwdCase === 'true'){
    
  // Compute alphanumeric vector
  } else if(pwdNumeric === 'true') {
  // Compute special characters vector
  } else if(pwdSpec === 'true') {

  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Forgot to put quotes around each letter while declaring array 
var charUpper = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
var charLower = charUpper.toLowerCase();
var charNum = "1, 2, 3, 4, 5, 6, 7, 8, 9, 0";
var charSpecial = "!, @, #, $, %, ^, &, *, (, ), -, _, +, =, [, ], |, {, }, :, ;";

// So I just made them strings and split em. Sorry for wasting system resources\s.
var UpperVector = charUpper.split(", ");
var LowerVector = charLower.split(", ");
var NumVector = charNum.split(", ");
var SpecVector = charSpecial.split(", ");

// Vector Construction
var Vanilla = LowerVector;
var caseVect = Vanilla.concat(UpperVector);

var numVect = caseVect.concat(NumVector);
var numVectnoCase = Vanilla.concat(NumVector);

var specVect =  numVect.concat(SpecVector);
var specVectnoNum = caseVect.concat(SpecVector);
var specVectnoCasenoNum = Vanilla.concat(SpecVector);

//var MasterPass = []; //Let's pretend this vector has AEC
// Calling RandomInt fcn to return random integers for concision
function RandomInt(max) {
  return Math.floor( Math.random() * Math.floor(max));
}


// First draft of password generator
for(i = 0; i < 10; i++) {
  var MasterVector = specVect;
  var entry = RandomInt(MasterVector.length - 1);

 console.log(entry);
  console.log(MasterVector[entry]);
  console.log('--------');
}

// Loop to generate password vector that generates based on inputs and takes in character set as the arguement
function generatePassword(MasterVector) {

  var MasterPass = [];

  for (i=0; i < pwdLength; i++) {
    
    var index = RandomInt(MasterVector.length - 1);
    
    MasterPass.push(MasterVector[index]);

    console.log(MasterPass);
  }
  console.log("finally: " + MasterPass);
// using 'join' fcn instead of 'toString' function since entries are comma separated
  return MasterPass.join('');
}

// Writing out the password generator test
function writePassword() {
  var password = generatePassword(Vanilla);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  password = []; //clearing password variable

}