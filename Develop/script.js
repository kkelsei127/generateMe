// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//prompt user criteria 1 :length
//alert("Please select your password length. Passwords must be between 8 and 128 characters in length.")
//take user input and put that into the length var

//prompt user criteria 2 : character types
//alert("Do you want to use lowercase letters? Please enter 'Yes' or 'No'.")
//take user input and if yes enable function for lowercase
//if no do not enable funcion and go to next prompt

//prompt user criteria 3
//alert("Do you want to use uppercase letters? Please enter 'Yes' or 'No'."")
//take user input and if yes enable function for uppercase
//if no do not enable funcion and go to next prompt

//prompt user criteria 4
//alert("Do you want to use numbers? Please enter 'Yes' or 'No'."")
//take user input and if yes enable function for numbers
//if no do not enable funcion and go to next prompt

//prompt user criteria 5
//alert("Do you want to use special characters? Please enter 'Yes' or 'No'."")
//take user input and if yes enable function for special characters
//if no do not enable funcion and go to next prompt

//if all character type prompts are no, then prompt user to retry
//alert("Too few character types were selected, please press the button and try again.")



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
