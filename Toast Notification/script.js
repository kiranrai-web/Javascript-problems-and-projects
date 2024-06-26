const notification = document.querySelector(".notification");

let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully worked!`;
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Error occur!`;
let invalidMsg= `<i class="fa-solid fa-circle-exclamation"></i> Invalid input!`;

const showNotification=(msg)=>{
    let div = document.createElement("div");
    div.classList.add("msgBtn")
    div.innerHTML = msg;
    notification.appendChild(div);
    if(msg.includes('Error')){
        div.classList.add("error")
    }
    if(msg.includes('Invalid')){
        div.classList.add('invalid')
    }

    setTimeout(()=>{
        div.remove()
    },5000)
}