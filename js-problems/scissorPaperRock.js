const prompt = require("prompt-sync")({ sigint: true });

let computer;
let player;

const randomNum =()=>{
    return Math.floor(Math.random()*3);
}

computer = randomNum();
const computerMove=(computer)=>{
    if(computer == 0){
        return 's'
    }else if(computer == 1){
        return 'p'
    }else{
        return 'r'
    }
}

const playGame =()=>{
    player = prompt("Enter s , p , r: ");
    if(player == 's' && computerMove(computer) == 'p' || player == 'p' && computerMove(computer) == 'r' || player == 'r' && computerMove(computer) == 's'){
        console.log(`Computer choose ${computerMove(computer)}\nYou chose ${player}\nYou win!`);
    }
    else if(computerMove(computer) === player){
        console.log(`Computer choose ${computerMove(computer)}\nYou chose ${player}\nDraw!`);
    }else{
        console.log(`Computer choose ${computerMove(computer)}\nYou chose ${player}\nYou lose!`);
    }

}

playGame();