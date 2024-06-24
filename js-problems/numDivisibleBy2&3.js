const prompt = require("prompt-sync")({ sigint: true });

const isDivisible=(number,divisors)=>{
    for (let divisor of divisors) {
        if(number%divisor==0){
            return true;
        }
    }
    return false;
}

let num = parseInt(prompt("Enter the number: "));

if(isNaN(num)){
    console.log("Enter valid number");
}else{
    if(isDivisible(num,[2, 3])){
        console.log("The number is divisible by 2 or 3."); 
    }else{
        console.log("The number is not divisible by 2 nor 3");
    }
}