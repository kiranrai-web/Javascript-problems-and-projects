// const findEven=(arr)=>{
//     let evenNumber =[];
//     if(!Array.isArray(arr) || arr.length == 0){
//         return `Invalid array!`
//     }

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 == 0){
//             evenNumber.push(arr[i])
//         }
//     }
//     return evenNumber;
// }

function findEven(numbers) { 
    if(!Array.isArray(arr) || arr.length == 0){
            return `Invalid array!`
        }
        
    return numbers.filter(num => num % 2 === 0); 
  }

let arr = [1,2,3,4,5,6,7,8,9];
console.log(`Even number in array are ${findEven(arr)}`);
