const prompt = require("prompt-sync")({ sigint: true });
let guess = 0;


const randomNum = ()=>{
     let random = Math.floor(Math.random() * 100);
     return random;
}

let randNum = randomNum();

const guessTheNum=(num)=>{
    // console.log(randNum);

    if(isNaN(num)){
        console.log("Invalid number!")
    }else{
        if(num<randNum){
            console.log(`Random Number is bigger than ${num} `);
        }
        else if(num>randNum){
            console.log(`Random Number is Smaller than ${num} `);
        }else{
            console.log(`You guess it in ${guess+1} guess`);
        }
    }
}

const main =()=>{
    do {
        let num = parseInt(prompt("Enter num: "));
        guessTheNum(num);
        guess++;
    } while (guess != 12);
    guess++;
    if(guess == 13){
        console.log(`You ran out of guess!\nThe correct num was ${randNum}`)
    }
}

main();

