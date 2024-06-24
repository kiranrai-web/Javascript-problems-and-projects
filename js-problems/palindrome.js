const prompt = require("prompt-sync")({ sigint: true });

const checkPalindrome =(word)=>{
    let revWord=[];
    // let revWord = word.split('').reverse().join(''); --> reverse word 
    var oriWord=word;
    for(let i=0;i<word.length;i++){
        revWord.push(word[i]);
    }

    revWord = revWord.reverse();
    revWord = revWord.join('');

    if(oriWord == revWord){
        console.log('Given word is palindrome');
    }else{
        console.log('Given word is not palindrome');
    }
}

let word = prompt("Enter word: ");
checkPalindrome(word);



// const prompt = require("prompt-sync")({ sigint: true });

// const checkPalindrome = (word) => {
//     if (typeof word !== 'string' || word.length === 0) {
//         console.log('Invalid input');
//         return;
//     }

//     let revWord = '';
//     for (let i = word.length - 1; i >= 0; i--) {
//         revWord += word[i];
//     }

//     if (word === revWord) {
//         console.log('Given word is a palindrome');
//     } else {
//         console.log('Given word is not a palindrome');
//     }
// }

// let word = prompt("Enter a word: ");
// checkPalindrome(word);

