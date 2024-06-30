//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//background music
let bgMusicSrc = 'bgMusic.mp3';
let bgMusic = new Audio(bgMusicSrc);
bgMusic.loop = true;
bgMusic.volume = 0.05;

//flap audio
let flapMusicSrc = 'wing.mp3'
let flapMusic = new Audio(flapMusicSrc);
flapMusic.volume = 0.3;

//dragon
let drgWidth = 30;
let drgHeight = 32;
let drgX = boardWidth/8;
let drgY = boardHeight/2;
let drgImg;

//dragon obj
let drg = {
    x : drgX,
    y : drgY,
    width : drgWidth,
    height : drgHeight
}

//mountains
let mountArray = [] 
let mountWidth = 64; 
let mountHeight = 512;
let mountX = boardWidth;
let mountY = 0;

let topMountImg;
let bottomMountImg;

//game physcis
let velocityX = -2; //mounts moving left speed
let velocityY = 0; //bird jumps speed
let gravity = 0.4;

let gameOver = false;
let score = 0;


window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    //draw dragon (drg)
    context.fillStyle = 'green';

    drgImg = new Image();
    drgImg.src = "./reddragonfly(1).png";
    drgImg.onload = function(){
        context.drawImage(drgImg,drg.x, drg.y, drg.width, drg.height);
    }

    topMountImg = new Image();
    topMountImg.src = "./towerTop.png";

    bottomMountImg = new Image();
    bottomMountImg.src = "./towerBottom.png";

    bgMusic.play();

    requestAnimationFrame(update) 
    setInterval(placemounts, 1500);
    document.addEventListener("keydown",moveDrg);
}

function update(){ //for updating the frames of canvas
    requestAnimationFrame(update);
    if(gameOver){
        return;
    }
    context.clearRect(0,0,board.width,board.height)  //clearing previous frame

    //dragon
    velocityY += gravity;
    drg.y = Math.max(drg.y + velocityY, 0) 
    context.drawImage(drgImg,drg.x,drg.y,drg.height,drg.width); 

    if(drg.y > board.height){
        gameOver = true;
    }

    //mount
    for(let i=0;i<mountArray.length;i++){
        let mount = mountArray[i];
        mount.x += velocityX; //overtime shifting position of x each time
        context.drawImage(mount.img, mount.x, mount.y, mount.width, mount.height);

        if(!mount.passed && drg.x > mount.x + mount.width){
            score += 0.5; // Increment score when the dragon passes the mount
            mount.passed = true;
        }

        if(detectCollision(drg,mount)){
            gameOver = true;
        }
    }

    //clear mounts
    while(mountArray.length > 0 && mountArray[0].x < -mountWidth){
        mountArray.shift(); //remove first element from the mount
    }

    //score
    context.fillStyle = "white";
    context.font = "45px sans-serif";
    context.fillText(score,5,45); 

    if(gameOver){
        context.fillText("Game Over",5,90);
        bgMusic.pause();
    }
}

function placemounts(){
    if(gameOver){
        return;
    }

    let randommountY = mountY - mountHeight/4 - Math.random()*(mountHeight/2); 
    let openingSpace = board.height/4; //enough space for bird togo through

    let topmount = {
        img : topMountImg,
        x : mountX,
        y : randommountY,
        width : mountWidth,
        height : mountHeight,
        passed : false 
    }

    mountArray.push(topmount)

    let bottommount = {
        img : bottomMountImg,
        x : mountX,
        y : randommountY + mountHeight + openingSpace,
        width : mountWidth,
        height : mountHeight,
        passed : false
    }

    mountArray.push(bottommount);

}

function moveDrg(e){
    if(e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX"){
        //jump
        velocityY = -6;
        flapMusic.currentTime = 0;
        flapMusic.play();

        //reset game
        if(gameOver){
            drg.y = drgY;
            mountArray = [];
            score = 0;
            gameOver = false;
            bgMusic.play();
        }
    }
}

function detectCollision(a,b){
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}