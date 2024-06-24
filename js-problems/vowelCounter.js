const prompt = require("prompt-sync")({ sigint: true });

// The Vowel Counter:
// You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

const vowelCount=(str,vowel)=>{
    let count = 0;
    let arr=[];
    for(let i=0;i<str.length;i++){
        arr.push(str[i])
    }

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<vowel.length;j++){
            if(arr[i]==vowel[j]){
                count++;
            }
        }
    }
    return count;
}

let vowel = ['a','e','i','o','u','A','E','I','O','U'];
let str=prompt("Enter a word: ");
let result = vowelCount(str,vowel);
console.log(`${str} has ${result} vowel letter`);