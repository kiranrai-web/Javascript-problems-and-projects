//Method 1;

// document.querySelector(".btn").addEventListener("click",()=>{
//     let redColor = Math.floor(Math.random() * 255);
//     let greenColor = Math.floor(Math.random() * 255);
//     let blueColor = Math.floor(Math.random() * 255);

//     let colorCode = `rgb(${redColor},${greenColor},${blueColor})`

//     document.querySelector(".container").style.backgroundColor = colorCode;
//     console.log(colorCode);
// })

//Method 2;

let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

document.querySelector(".btn").addEventListener("click",()=>{
    let hexCode = "";
    for(let i = 0;i<6;i++){
        let randomhex = Math.floor(Math.random() * hex.length);
        hexCode += hex[randomhex];
    }

    console.log(hexCode);
    document.querySelector(".container").style.backgroundColor = "#" + hexCode;

})
