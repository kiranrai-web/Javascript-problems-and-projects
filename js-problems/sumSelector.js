// The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

const sumSelector=(arr)=>{
    let sum =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            break;
        }
        sum += arr[i];
    }
    return sum;
}

let arr=[1,2,3,-6,4,-7,-9,5];
// sumSelector(arr);
console.log(sumSelector(arr));