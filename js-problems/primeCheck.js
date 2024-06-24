const checkPrimeNum = (num) => {

  if (isNaN(num) || num < 2 || !Number.isInteger(num)) {
    return `Invalid num!`;
  }

  for(let i=2;i<num;i++){
    if(num%i == 0){
        return false
    }
  }

  return true;

};

let num = 17;

if (checkPrimeNum(num) == true) {
  console.log(`${num} is prime number`);
} else {
  console.log(`${num} is not a prime number`);
}
