console.log("Script is running");

let box = document.querySelectorAll(".box");
let randomNum = Math.floor(Math.random() * 9) + 1;
let player;
let turn =1;

const computerMove =()=>{
        let computer = randomNum;
        switch (computer) {
            case 1:
              box[0].innerHTML = "0";
              console.log("it work");
              break;
            case 2:
              box[1].innerHTML = "0";
              console.log("it work");
              break;
            case 3:
              box[2].innerHTML = "0";
              console.log("it work");
              break;
            case 4:
              box[3].innerHTML = "0";
              console.log("it work");
              break;
            case 5:
              box[4].innerHTML = "0";
              console.log("it work");
              break;
            case 6:
              box[5].innerHTML = "0";
              console.log("it work");
              break;
            case 7:
              box[6].innerHTML = "0";
              console.log("it work");
              break;
            case 8:
              box[7].innerHTML = "0";
              console.log("it work");
              break;
            case 9:
              box[8].innerHTML = "0";
              console.log("it work");
              break;
            default:
              console.log("error");
          }
}

const playerMove =()=>{
    Array.from(box).forEach((box)=>{
        box.addEventListener("click",(e)=>{
            e.target.innerHTML = "X";
        })
    })
}


const main=()=>{
    do {
        computerMove();
        playerMove();
    } while (turn ==9);

}

// main();