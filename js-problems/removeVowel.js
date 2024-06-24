// Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.

const removeVowel=(str)=>{
    let vowel = ['a','e','i','o','u','A','E','I','O','U'];

    let result ="";

    for(let i=0;i<str.length;i++){
        if(!vowel.includes(str[i])){
            result += str[i]
        }
    }
    return result;
}


let str = "You are a IDIOT";

console.log(removeVowel(str));