// Async Array Mapping:
// Write an asynchronous function that takes an array of numbers and returns a new array of Promiseswhere each number is multiplied by 2 after a delay of 500 milliseconds.

const arrMapping=(arr)=>{
    return arr.map(number=>
        new Promise(resolve=> {
            setTimeout(() => {
                resolve(number*2);
            },500);
        })
    );
}

let numbers=[1,2,3,4,5];
let promise=arrMapping(numbers);

Promise.all(promise).then(result=>{
    console.log(result);
})