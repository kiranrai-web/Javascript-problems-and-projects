const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const qrBtn = document.getElementById("qrBtn");
const qrInput = document.querySelector(".qrInput")

const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const generateQr =(url)=>{
    if(qrText.value.length > 0){
        let value = qrText.value;
        qrImage.src = url + value;
    }else{
        qrInput.classList.add("error");
        setTimeout(()=>{
            qrInput.classList.remove("error");
        },1000)
    }
}

qrBtn.addEventListener("click",()=>{
    generateQr(apiUrl);
})