let password = document.getElementById("password");
let passwordImg = document.getElementById("passwordImg");

passwordImg.onclick = function(){
    if(password.type === "password"){
        password.type = "text"
        passwordImg.src = "./eye-open.png"
    }else{
        password.type = "password"
        passwordImg.src = "./eye-close.png"
    }
}