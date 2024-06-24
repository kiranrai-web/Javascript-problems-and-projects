// The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

const doubleTrouble=(arr)=>{
    if(arr.length === 0){
        return []
    }

    let result = [arr[0] * 2];

    for(let i=1;i<arr.length;i++){
        if(arr[i] !== arr[i-1]){
            result.push(arr[i]*2)
        }else{
            result.push(arr[i])
        }
    }

    return result;
}

let originalArr = [1,2,3,4,5,5];
let doubleArr = doubleTrouble(originalArr);
console.log(doubleArr)