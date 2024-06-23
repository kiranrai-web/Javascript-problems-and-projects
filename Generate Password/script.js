const passwordDisplay = document.getElementById("password");
const passGenerate = document.querySelector(".passGenerate");
const passCopy = document.querySelector(".copyPassword");
const history = document.querySelector(".history")
const slider = document.getElementById("mySlider");
const sliderValue = document.querySelector(".value");

const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const numbers = "1234567890";
const symbols ="!@#$%^&*()_+=-}{|:;?/><,.";
let currentPassword = "";

let length = slider.value

sliderValue.innerHTML = slider.value;
slider.oninput=function(){
    sliderValue.innerHTML = this.value;
    length = this.value;
}

const generatePassword =()=>{
    let password ="";
    let selectedChars = "";

    if (document.getElementById("upperCase").checked) {
        selectedChars += upperCase;
    }
    if (document.getElementById("lowerCase").checked) {
        selectedChars += lowerCase;
    }
    if (document.getElementById("symbol").checked) {
        selectedChars += symbols;
    }
    if (document.getElementById("number").checked) {
        selectedChars += numbers;
    }

    if (selectedChars.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    password += selectedChars[Math.floor(Math.random() * selectedChars.length)];

    while(length > password.length){
        password += selectedChars[Math.floor(Math.random() * selectedChars.length)];
    }
    currentPassword = password
    passwordDisplay.value = password
}


const copyPassword =()=>{
    passwordDisplay.select();
    document.execCommand("copy");
}


passGenerate.addEventListener("click",()=>{
    generatePassword();
    let prevPass = document.createElement("li");
    let span = document.createElement("span");
    let img = document.createElement("img");
    prevPass.classList.add("pass");
    prevPass.textContent = currentPassword;

    img.src = "images/copy.png";
    span.appendChild(img);
    prevPass.appendChild(span);

    history.appendChild(prevPass);
})

history.addEventListener("click",e=>{
    if(e.target.tagName === "IMG"){
        let listItem = e.target.closest("li");
        let passwordText = listItem.textContent.trim();

        navigator.clipboard.writeText(passwordText)
        // .then(() => {
        //     console.log('Password copied to clipboard');
        // })
        // .catch(err => {
        //     console.error('Failed to copy password: ', err);
        // });
    }
})

passCopy.addEventListener("click",()=>{
    copyPassword();
})
