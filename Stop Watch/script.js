display = document.getElementById("display");
let [hour, minute, second] = [0.,0,0];
let timer = null;

function main(){
    second++;
    if(second >60){
        minute++;
        second = 0;
    }
    if(minute > 60){
        hour++;
        minute = 0;
    }

    let s = (second<10)?"0"+second:second;
    let m = (minute<10)?"0"+minute:minute;
    let h = (hour<10)?"0"+hour:hour;

    display.innerHTML = `${h}:${m}:${s}`
}

function startWatch(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(main, 1000);
}

function stopWatch(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    [hour, minute, second] = [0,0,0];
    display.innerHTML = "00:00:00";
}