function twoSumProblem(arr, result) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == result) {
        console.log(`${arr[i]} + ${arr[j]} = ${result}`);
        finalArr.push(arr[i]);
        finalArr.push(arr[j]);
      }
    }
  }
  console.log(finalArr);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = 15;
twoSumProblem(arr, result);
