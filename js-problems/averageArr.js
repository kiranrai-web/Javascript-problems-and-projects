const findAverage =(arr)=>{
    let result = 0;
    for(let i=0;i<arr.length;i++){
        result +=arr[i];
    }
    return result/2;
}

let arr = [2,3,4,5,6];
console.log(`The average in array are: ${findAverage(arr)}`);