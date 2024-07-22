let hamburger = document.querySelector(".hamburger");
let crossBtn = document.querySelector(".cross");
let menu = document.querySelector(".menu");

hamburger.addEventListener("click",e=>{
    menu.classList.remove("slide-out");
    menu.classList.add("slide-in");
    menu.style.right = "0";
    menu.style.display = "block";
});

crossBtn.addEventListener("click",e=>{
    menu.classList.remove("slide-in");
    menu.classList.add("slide-out");
    menu.style.right = "-100%";
    menu.style.display = "none";
})