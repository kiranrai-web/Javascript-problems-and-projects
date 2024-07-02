let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let messageError = document.getElementById("message-error");
let formError = document.getElementById("form-error");

function validateName(){
    var inputName = document.getElementById("input-name");

    if(inputName.value.length == 0){
        nameError.innerHTML = `Insert Name!`;
        return false;
    }else if(!inputName.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = `Enter full Name!`;
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var inputEmail = document.getElementById("input-email");

    if(inputEmail.value.length == 0){
        emailError.innerHTML = `Insert Email!`;
        return false;
    }else if(!inputEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = `Invalid email!`;
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var inputPhone = document.getElementById("input-phone");

    if(inputPhone.value.length == 0){
        phoneError.innerHTML = `Insert phone no.!`;
        return false;
    }else if(inputPhone.value.length !== 10){
        phoneError.innerHTML = `Phone no. is short!`;
        return false;
    }
    else if(!inputPhone.value.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = `Invalid phone no.!`;
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var inputMessage = document.getElementById("input-message").value;

    var required = 20;
    var left = required - inputMessage.length;

    if(left > 0){
        messageError.innerHTML = left + ` more character required`;
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        messageError.style.display = 'block';
        messageError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none'},3000)
        return false;
    }
}

