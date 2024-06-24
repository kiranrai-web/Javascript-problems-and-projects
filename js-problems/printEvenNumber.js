const prompt = require("prompt-sync")({ sigint: true });

const isEven=(num)=>num%2==0;

let rangeLimit = parseInt(prompt("Enter the range you want: "));

for(let index=1;index<=rangeLimit;index++){
    if(isEven(index)){
        console.log(index);
    }
}