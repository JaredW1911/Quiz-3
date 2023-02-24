// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
// here is where you put all your variables
var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var Specials = ["!", "@", "#", "$", "%", "^", "&", "*", "\(", "\)"];
var Lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//This will create a prompt
var pwLength = parseInt(prompt("You will need to select a password that is between 8 and 128 characters long."));
//Password length parameters
if (pwLength < 8) {
  alert("Your password must be more than 8 characters")
  return
  }
if (pwLength > 128) {
  alert("You password can not excessed 128 characters")
  }

//Create variables to prompt user to generate password
var includeSpecials = confirm("Do you want special characters in your password?");
var includesNumbers = confirm("Do you want numbers in your password?");
var includesUppers = confirm("Do you want capital letters in your password?");
var includesLowers = confirm ("Do you want lowercase letters in your password");

var Outcomes = [];

if (includeSpecials) {
  Outcomes.push(Specials);
  }
if (includesLowers) {
  Outcomes.push.apply(Lowers);
  }
if (includesUppers) {
  Outcomes.push.apply(Uppers);
  }
if (includesNumbers) {
  Outcomes.push(Numbers);
  }
//User must select atleast 1 array verify
if (!Outcomes.length) {
  alert("You have to select at least one character type. Please try again.");
  return
  }

//Then it creates a random password
var result = "";

//Function generatePassword makes sure password passes
console.log(Outcomes);
console.log (result);
for (var i =0; i < pwLength; i++) {
  // random array selection
  var randomArray = Outcomes [Math.floor(Math.random() * Outcomes.length)];
  console.log(randomArray);
  // Random Character selector
  var randomChar = randomArray [Math.floor(Math.random() * randomArray.length)];
  console.log(randomChar)

  result += randomChar;
  console.log(result);
    }
return result
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password) {
    passwordText.value = password;

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
