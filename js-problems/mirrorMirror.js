// The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

const mirror=(str)=>{
    const reversed = str.split('').reverse().join('');

    const mirrorReverse = str + reversed;

    return mirrorReverse;
}

let string = "I am kiran ";
console.log(mirror(string));