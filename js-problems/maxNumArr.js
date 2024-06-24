const findMax = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid array";
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

const numbers = [1, 2, 9, 7, 5];
console.log(`Max number in array: ${findMax(numbers)}`);
