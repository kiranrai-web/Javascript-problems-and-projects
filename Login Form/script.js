let clickBtn = document.getElementById("clickBtn");
let registerBtn = document.getElementById("register")

clickBtn.addEventListener("click",()=>{
    let firstRight = document.getElementById("originalRight");
    firstRight.classList.add("anime-left");
    document.querySelector(".container-box2").style.zIndex = "100";
    document.querySelector(".container-box").style.zIndex = 0;
    setTimeout(() => {
        firstRight.classList.remove("anime-left");
        document.querySelector(".container-box").style.visibility = "hidden";
        document.querySelector(".container-box2").style.visibility = "visible";
    }, 250);
});

registerBtn.addEventListener("click",()=>{
    let secondLeft = document.getElementById("secondLeft");
    secondLeft.classList.add("anime-right");
    document.querySelector(".container-box").style.zIndex = "100";
    document.querySelector(".container-box2").style.zIndex = 0;
    setTimeout(() => {
        secondLeft.classList.remove("anime-right");
        document.querySelector(".container-box2").style.visibility = "hidden";
        document.querySelector(".container-box").style.visibility = "visible";
    }, 250);
})