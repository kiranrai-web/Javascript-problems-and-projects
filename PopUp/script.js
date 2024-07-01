let submit = document.querySelector(".btn");
let popUp = document.getElementById("popup");
let popBtn = document.getElementById("popbtn")

submit.onclick = function(){
    popUp.classList.add("open-popup");
}

popBtn.onclick = function(){
    popUp.classList.remove("open-popup")
}