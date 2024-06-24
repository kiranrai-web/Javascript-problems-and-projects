const prompt = require("prompt-sync")({ sigint: true });

// The Password Validator:
// You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

const passwordCheck=(password)=>{
    if(password.length<8){
        return console.log(`Password is short`);
    }

    const containUpperCase = /[A-Z]/.test(password);
    const containLowerCase = /[a-z]/.test(password);
    const containDigit = /[0-9]/.test(password);

    if(!containUpperCase || !containLowerCase || !containDigit){
        console.log("Password must be combination from digit, uppdercase and lowercase")
    }
}


let pass = prompt("Enter password: ");
passwordCheck(pass);