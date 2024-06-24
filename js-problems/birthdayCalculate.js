const birthdayCalculate=(y1,m1,d1)=>{
    let todayBirthday = new Date();

    let y3,m3,d3;

    let y2 = todayBirthday.getFullYear();
    let m2 = todayBirthday.getMonth();
    let d2 = todayBirthday.getDay();

    if(y1 > y2 || (y1 == y2 && m1 > m2)){
        console.log("Invalid date");
    }else{
        y3 = y2 - y1;

        if( m2 >= m1){
            m3= m2 - m1;
        }else{
            y3--;
            m3 = 12 + m2 - m1;
        }
    
        if(d2 >= d1){
            d3 = d2 - d1;
        }else{
            m3--;
            d3 = getDaysInMonth(y1,m1) + d2 -d1; 
        }
    
        console.log(`You are ${y3} year, ${m3} month and ${d3} day year old`)
    }
}

const getDaysInMonth=(year,month)=>{
    return new Date(year,month, 0).getDate();
}

let year = 1990;
let month = 12;
let day = 3;

birthdayCalculate(year,month ,day);