const prompt = require("prompt-sync")({ sigint: true });

const checkAge=(age)=>{
    if(age>=10 && age<=20){
        console.log("You lies between required age");
    }else{
        console.log("Invalid age!");
    }
}

let age=prompt("Enter your age: ");
checkAge(age);
