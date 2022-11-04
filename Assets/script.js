// Assignment Code
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialChar = "!?@#$%^&*()[]{}-_+=<>,./|:;`~'".split("");
var possibleChar;
var password = "";
var generateBtn = document.querySelector("#generate");
  

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
    criteria();
    //for loop to use the global varable above to generate a random pw
    for(var i=0; i<length; i++){
      var charInd = MAth.floor(Math.random() * possibleChar.length);
      password += possibleChar[charInd];
    }
    return password;
  }

//Criteria for length
function checkLength(length){
  if (length > 7 && length < 129)
  return true;
};

//prompts user to chose preferred length of password and validates it
function getLength () {
  var length = parseInit(prompt(`Enter desired Length (minimum of 8 characters and maximum of 128):`))
  if(checkLength(length)){
    return length
  } else (err) => console.log(`Error ${length} is not a valid input please enter again`);
  getLength();
};

function criteria(){
  //assigns an empty array possible characters so we can insert it
  possibleChar=[];
  //asks indidivudla what kind of password they would like
  if(confirm("Include lowercase characters?\nSelect OK for Yes and Cancel for no")===true)
  //pushes array into possible characters
  possibleChar.push(...alphabet);
  if(confirm("Include uppercase characters?\nSelect OK for Yes and Cancel for no")===true)
  possibleChar.push(...capitalAlphabet);
  if(confirm("Include numerical characters?\nSelect OK for Yes and Cancel for no")===true)
  possibleChar.push(...numbers);
  if(confirm("Include special characters?\nSelect OK for Yes and Cancel for no")===true)
  possibleChar.push(...specialChar);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
