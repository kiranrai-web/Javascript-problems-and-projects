const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.querySelector(".result");

const calculateDate =()=>{
    let y3,m3,d3;
    let todayDate = new Date();
    let userDate = new Date(userInput.value);

    let y2 = todayDate.getFullYear();
    let m2 = todayDate.getMonth() + 1;
    let d2 = todayDate.getDate();

    let y1 = userDate.getFullYear();
    let m1 = userDate.getMonth() + 1;
    let d1 = userDate.getDate();

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 -m1
    }else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1
    }else{
        m3--;
        d3 = getDaysInMonths(y1,m1) + d2 -d1
    }

    result.innerHTML = `<span>${y3}</span> years old, <span>${m3}</span> month and <span>${d3}</span> days year old`
}

const getDaysInMonths =(year,month)=>{
    return new Date(year,month,0).getDate();
}