const findMax = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid array";
    }
    return Math.max(...arr);
}

const findMin = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid array";
    }
    return Math.min(...arr);
}

let arr = [1, 9, 20, 16, 11, 8, 5];
console.log(`Max number in array is ${findMax(arr)}\nMin number in array is ${findMin(arr)}`);
