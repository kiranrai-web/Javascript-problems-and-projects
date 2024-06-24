const prompt = require("prompt-sync")({ sigint: true });

const fibonacci = (num1,num2)=>{
    let fiboseries=[];
    let temp;
    let range = num2-num1;
    num2=num1+1;

    if(isNaN(num1) || num1<0 || num2<0){
        console.log("Invalid input")
    }else{
        for(let i=num1;i<range;i++){
            temp = num1
            num1 = num2
            num2 = temp+num1
            fiboseries.push(temp);
        }
    }

    console.log(fiboseries)
}

let range1=parseInt(prompt("Enter the first range: "));
let range2=parseInt(prompt("Enter the Second range: "));
fibonacci(range1,range2);

