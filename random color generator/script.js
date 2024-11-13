let colorGenerateBtn = document.querySelector(".box2 button");
let hexColorBtn = document.querySelector(".btn1 button");
let rgbColorBtn = document.querySelector(".btn2 button");
let activeBtn = document.querySelector(".actBtn");
let rgb = false;

const generateRandomNum =(length)=>{
    return Math.floor(Math.random()*length)
}

const generateHexColor =()=>{
    let hexChar = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
    let hexColor = '#';

    for(let i=0;i<6;i++){
        hexColor += hexChar[generateRandomNum(hexChar.length)]
    }

    return hexColor;
}

const generateRgbColor =()=>{
    let r = generateRandomNum(255);
    let g = generateRandomNum(255);
    let b = generateRandomNum(255);

    let rgbColor = `rgb(${r},${g},${b})`

    return rgbColor;
}

document.addEventListener(('DOMContentLoaded'),()=>{
    hexColorBtn.addEventListener('click', () => {
        if (activeBtn.style.left !== '0') {
            activeBtn.classList.remove('actBtnLeft');
            activeBtn.classList.add('actBtnRight');
        } else {
            activeBtn.classList.remove('actBtnRight');
            activeBtn.classList.add('actBtnLeft');
        }
        rgb = false
    });
    
    rgbColorBtn.addEventListener('click', () => {
        if (activeBtn.style.left === '0') {
            activeBtn.classList.remove('actBtnLeft');
            activeBtn.classList.add('actBtnRight');
        } else {
            activeBtn.classList.remove('actBtnRight');
            activeBtn.classList.add('actBtnLeft');
        }
        rgb = true
    });
    
    colorGenerateBtn.addEventListener(('click'),e=>{
        let bg = document.querySelector('.container')
        let bgColor = document.querySelector('.box2 h1')
        if(rgb === true){
            bgColor.innerHTML =`RGB Code : ${generateRgbColor()}`
            bg.style.backgroundColor = generateRgbColor()
        }else{
                    bgColor.innerHTML =`Hex Code : ${generateHexColor()}`
            bg.style.backgroundColor = generateHexColor()
        }
    })
})