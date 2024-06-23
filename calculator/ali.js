console.log("JavaScript is running!");

let ansDisplay = document.querySelector(".input h6");
let currentDisplay = document.querySelector(".prevDisplay p");
let numbers = [];
let symbols = [];
let lastEnterNum = '';
let currentNumber = '';
let tempValue = ''; // Temporary storage for number input

// Accept arithmetic input from button
let mathSymbol = document.querySelectorAll(".symbol");
Array.from(mathSymbol).forEach((char) => {
  char.addEventListener("click", (e) => {
    let charContent = char.innerHTML.trim();
    currentDisplay.innerHTML += charContent + " ";
    symbols.push(charContent);
     // When a symbol is pressed, push the accumulated number to the numbers array
    if (tempValue !== '') {
      numbers.push(parseFloat(tempValue));
      tempValue = ''; // Reset tempValue after pushing to numbers array
    }
  });
});

// Accept number from input
let num = document.querySelectorAll(".btn");
Array.from(num).forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonContent = button.innerHTML.trim();
    currentDisplay.innerHTML += buttonContent;
    tempValue += buttonContent; // Concatenate the button value to tempValue
  });
});

ans.addEventListener("click", (e) => {
  if (tempValue !== '') {
    numbers.push(parseFloat(tempValue)); // Push remaining tempValue if any
  }

  let result = numbers[0];

  for (let i = 0; i < symbols.length; i++) {
    switch (symbols[i]) {
      case "+":
        result = result + numbers[i + 1];
        break;
      case "-":
        result = result - numbers[i + 1];
        break;
      case "x":
        result = result * numbers[i + 1];
        break;
      case "/":
        result = result / numbers[i + 1];
        break;
      case "%":
        result = result % numbers[i + 1];
        break;
      default:
        ansDisplay.innerHTML = currentDisplay.innerHTML;
    }
  }

  ansDisplay.innerHTML = result;
});

// Clear the display
clear.addEventListener("click", (e) => {
  currentDisplay.innerHTML = " ";
  ansDisplay.innerHTML = "0";
  numbers = [];
  symbols = [];
  tempValue = ''; // Reset tempValue
});


