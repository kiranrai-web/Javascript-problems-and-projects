const prompt = require("prompt-sync")({ sigint: true });

// Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Ram","HariBahadurThapa","krishna","SitaRavan","Gopu","Sucrose","Jinny","Wisley","Silvana","jake"];

let studentName = prompt("Enter your name: ");
students.push(studentName);

let house = [];

students.forEach(student => {
    if(student.length<6){
        house.push("Gryffindor")
       }
       else if(student.length<8){
        house.push("Hufflepuff")
       }
       else if(student.length<12){
           house.push("Ravenclaw")
       }else{
        house.push("Slytherin")
       }
});

console.log(`You are ${house[house.length-1]}`);
console.log(house);
