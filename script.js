// *Production Script* Please goto `./Develop/script-dev1.js` for Annotations

var pwdLength = 0;
var pwdCase = false;
var pwdNumeric = false;

//Prompts for length -> Case Sensitivity -> alphanumeric -> special characters
var pwdLength = prompt("How long do you want your password to be? Choose a # between 8 and 128");
var pwdCase = confirm("CaSe SeNSitIVitY?");
var pwdNumeric = confirm("α-numeric? (do you want numbers?)")
var pwdSpec = confirm("$P⁅¢IAL characters?")

var password = "Error!";

// Button Scripts
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Character Sets
var charUpper = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
var charLower = charUpper.toLowerCase();
var charNum = "1, 2, 3, 4, 5, 6, 7, 8, 9, 0";
var charSpecial = "!, @, #, $, %, ^, &, *, (, ), -, _, +, =, [, ], |, {, }, :, ;";

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
var specVectnoCase = numVectnoCase.concat(SpecVector);
var specVectnoNum = caseVect.concat(SpecVector);
var specVectnoCasenoNum = Vanilla.concat(SpecVector);

// PassGen and writing Functions 
function RandomInt(max) {
    return Math.floor( Math.random() * Math.floor(max));
  }

function generatePassword(MasterVector) {
var MasterPass = [];

    for (i=0; i < pwdLength; i++) {
        
        var index = RandomInt(MasterVector.length - 1);
        
        MasterPass.push(MasterVector[index]);

        console.log(MasterPass);
    }
console.log("finally: " + MasterPass);

return MasterPass.join('');
}

if(pwdCase === true && pwdNumeric === false && pwdSpec === false){
    Vect = caseVect;
    console.log("first cond");

} else if(pwdCase === true && pwdNumeric === true && pwdSpec === false) {
    Vect = numVect;
    console.log("second cond");

} else if(pwdCase === true && pwdNumeric === true && pwdSpec === true) {
    Vect = specVect;
    console.log("third cond");

} else if(pwdCase === false && pwdNumeric === true && pwdSpec === true) {
    Vect = specVectnoCase;

} else if(pwdCase === false && pwdNumeric === false && pwdSpec === true) {
    Vect = specVectnoCasenoNum;

} else if(pwdCase === true && pwdNumeric === false && pwdSpec === true) {
    Vect = specVectnoNum;

} else if(pwdCase === false && pwdNumeric === false && pwdSpec === true) {
    Vect = specVectnoCasenoNum;

} else {
    var Vect = Vanilla;
    } 

function writePassword() {
        // Conditional Tree for different input values

    var password = generatePassword(Vect);            
    var passwordText = document.querySelector("#password");            
    passwordText.value = password;

}