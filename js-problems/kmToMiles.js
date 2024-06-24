const prompt = require("prompt-sync")({ sigint: true });

const converter=(num)=>num*0.621371;

let km = parseFloat(prompt("Enter Kilometer: "));

let mile = converter(km);

if(isNaN(km) || km<=0 ){
    console.log("Invalid input!")
}else{
    console.log(mile);
}