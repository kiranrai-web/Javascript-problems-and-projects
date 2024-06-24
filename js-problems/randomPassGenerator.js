const passwordGenerate =(length)=>{
    let password = "";
    let charset ="1234567890!@#$%^&*()qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM<>?/:{}";

    for(let i=0;i<length;i++){
        let randomNum = Math.floor(Math.random() * charset.length);
        password += charset[randomNum];
    }

    return password;
}

let length = 12;
result = passwordGenerate(length);
console.log(`Password is ${result}`);