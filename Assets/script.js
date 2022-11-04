// Assignment Code
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialChar = "!?@#$%^&*()[]{}-_+=<>,./|:;`~'".split("");
var possibleChar;
var password = "";
var generateBtn = document.querySelector("#generate");

function generatePassword ()
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generate the password matching the length and criteria
function generatePassword (){
    var password = "";
    var length =getLength();
    getCriteria();
    //for loop to use the global varable above to generate a random pw
    for(var i=0; i<length; i++){
      var charInd = MAth.floor(Math.random() * possibleChar.length);
      password += possibleChar[charInd];
    }
    return password;
  }

//Criteria for length



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
