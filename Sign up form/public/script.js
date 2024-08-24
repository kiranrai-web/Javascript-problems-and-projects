let password = document.querySelector(".pass-input");
let eyeIcon = document.querySelector(".eye-icon");

eyeIcon.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eyeIcon.src = "./images/eye-open.png";
    }else{
        password.type = "password";
        eyeIcon.src = "./images/eye-close.png"
    }
}