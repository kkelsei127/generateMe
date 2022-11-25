var userChoiceArr = [];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//functions for random
//Random Lower
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(randomLower);

//Random Upper
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUpper);


//Random Number
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(randomNumber);


//Random Symbol
function randomSymbol() {
    const symbolArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '<', '>', '.', ',', '/', '{', '}', '[', ']'];
    return String.symbolArr(Math.floor(Math.random()));
}

console.log(randomSymbol);




function generatePassword() {


}

function promptUser () {
    userChoiceArr = [];
//prompt user criteria 1 :length

    //Ask user for the password length
    var length = parseInt(prompt("Please enter a number for your password length. Passwords must be between 8 and 128 characters."));
    console.log(length);

    //if NaN prompt user to retry
    if(isNaN(length) || length < 8 || length > 128 ){
        alert("Length has to be a number between 8 and 128. Please try again.");
        return false;
    }

    //take user input and put that into the length var


    // If user pressed Cancel, immediately end function
    if (!length) {
        return;
    }

//prompt user criteria 2 : character types

    //Ask user for lowercase letters
    var lowercase = confirm("Do you want to use lowercase letters?");
    console.log(lowercase);
    //take user input and if yes enable function for lowercase

    //if no do not enable funcion and go to next prompt

    // If user pressed Cancel, immediately end function
    if (!lowercase) {
        return;
    }

//prompt user criteria 3

    //Ask user for uppercase letters
    var uppercase = confirm("Do you want to use uppercase letters?");
    console.log(uppercase);
    //take user input and if yes enable function for uppercase

    //if no do not enable funcion and go to next prompt

    if (!uppercase) {
        return;
    }

//prompt user criteria 4

    //Ask user for numbers
    var numeric = confirm("Do you want to use numbers?");
    console.log(numeric);
    //take user input and if yes enable function for numbers

    //if no do not enable funcion and go to next prompt

    if (!numeric) {
        return;
    }

//prompt user criteria 5
    
    //Ask user special characters
    var specialChar = confirm("Do you want to use special characters?");
    console.log(specialChar);
    //take user input and if yes enable function for special characters

    //if no do not enable funcion and go to next prompt

    if (!specialChar) {
        return;
    }


 //if all character type prompts are no, then prompt user to retry
    else (length == false || lowercase == false || uppercase == false || numeric == false || specialChar == false);
    alert("Too few character types were selected, please press the button and try again.");

}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
