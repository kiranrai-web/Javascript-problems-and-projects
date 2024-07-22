//simple method

// let number = document.querySelector(".box p");
// let increase = document.querySelector(".increase");
// let decrease = document.querySelector(".decrease");
// let reset = document.querySelector(".reset");

// let count = 0;

// increase.addEventListener("click",()=>{
//     count++;
//     number.textContent = count;
//     number.style.color = "green";
// });

// reset.addEventListener("click",()=>{
//     count = 0;
//     number.textContent = count;
//     number.style.color = "#000";
// });

// decrease.addEventListener("click",()=>{
//     count--;
//     number.textContent = count;
//     number.style.color = "red";
// })

let counter = 0;

let buttonContainer = document.querySelectorAll(".btn");
let value = document.querySelector(".box p");

buttonContainer.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let style = e.currentTarget.classList;

        if(style.contains('decrease')){
            counter--;
            value.style.color = "red";
        }else if(style.contains('increase')){
            counter++;
            value.style.color = "green";
        }else{
            counter = 0;
            value.style.color = "black";
        }

        value.textContent = counter;
    })
})