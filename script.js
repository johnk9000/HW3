// *Production Script* Please goto `./Develop/script-dev1.js` for Annotations
//---------------------------------------------------------------------------
var pwdLength = 0;
var pwdCase = false;
var pwdNumeric = false;

//Prompts for length -> Case Sensitivity -> alphanumeric -> special characters
var pwdLength = prompt("How long do you want your password to be? Choose a # between 8 and 128");
var pwdCase = confirm("CaSe SeNSitIVitY?");
var pwdNumeric = confirm("α-numeric? (do you want numbers?)")
var pwdSpec = confirm("$P⁅¢IAL characters?")

// Input validation
if(Number.isInteger(parseInt(pwdLength)) === false) {
    alert("input a number");
    location.reload();
} else {
pwdLength = parseInt(pwdLength); //parse string input into integer form
}

if (pwdLength < 8 || pwdLength > 128) {
    alert("re-read the range!");
    location.reload();
} else {

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
    }

return MasterPass.join('');
}

if(pwdCase === true && pwdNumeric === false && pwdSpec === false){ //case sensitive alphabetic pass
    Vect = caseVect;

} else if(pwdCase === true && pwdNumeric === true && pwdSpec === false) { //case sens. alphanumeric pass
    Vect = numVect;

} else if(pwdCase === true && pwdNumeric === true && pwdSpec === true) { //case sens. alphanumeric special pass
    Vect = specVect;

} else if(pwdCase === false && pwdNumeric === true && pwdSpec === true) { //alphanuemeric special pass
    Vect = specVectnoCase;

} else if(pwdCase === false && pwdNumeric === false && pwdSpec === true) { //alphabetic special pass
    Vect = specVectnoCasenoNum;

} else if(pwdCase === true && pwdNumeric === false && pwdSpec === true) { //case sensitive special pass
    Vect = specVectnoNum;

} else if(pwdCase === false && pwdNumeric === false && pwdSpec === true) { //alphabetic special pass
    Vect = specVectnoCasenoNum;

} else {
    var Vect = Vanilla;
    } 

function writePassword() {
    var password = generatePassword(Vect);            
    var passwordText = document.querySelector("#password");            
    passwordText.value = password;

}
}