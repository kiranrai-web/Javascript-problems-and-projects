const prompt = require("prompt-sync")({ sigint: true });

const printTable=(num,limit)=>{
    for(let i=1;i<=limit;i++){
        console.log(` ${num} * ${i} = ${num*i}`);
    }
}

let range = parseInt(prompt("Enter the highest multiplication table you want to print: "));
let limit = parseInt(prompt("Enter the limit for each multiplication table: "));

if(isNaN(range) || isNaN(limit) || range<=0 || limit<=0){
    console.log("Invalid Input");
} else{
    for(let i=1;i<=range;i++){
        console.log(`\nMultiplication Table for ${i}:\n`);
        printTable(i,limit);
    }
}