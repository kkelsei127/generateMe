var userChoice = []

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var spChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '<', '>', '?', '~'];
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var prompts = promptUser;
    var passwordText = document.querySelector("#password");

    if(prompts) {
        var password = generatePassword();
        passwordText.value = password;
    }
    else {
        passwordText.value = '';
    }
}

function promptUser () {
    userChoice = [];

    length = prompt('Please enter a number for your password. Passwords must be between 8 and 128 characters.');
    if (isNaN(length) || length < 8 || length > 128) {
        alert('Please enter a number between 8 and 128, using digits only.')
        return false;
    }

    if (confirm('Do you want to include lower case in your password?')) {
        userChoice = userChoice.concat(lower);
    }

    if (confirm('Do you want to include upper case in your password?')) {
        userChoice = userChoice.concat(upper);
    }

    if (confirm('Do you want to include special characters in your password?')) {
        userChoice = userChoice.concat(spChar);
    }

    if (confirm('Do you want to include numbers in your password?')) {
        userChoice = userChoice.concat(num);
    }
}

function generatePassword () {
    var password = "";
    for (var i = 0;  i < length; i++) {
        var index = Math.floor(Math.random() * userChoice.length)
        password = password + userChoice[index];
    }
    return password;
}