console.log("JavaScript is running!");

let ansDisplay = document.querySelector(".input h6");
let currentDisplay = document.querySelector(".prevDisplay p");
let audio = new Audio('click.mp3');
let ansClick = new Audio('ansClick.mp3');
let toggles = document.getElementsByTagName("input");
let container = document.querySelector(".container");
let calculate = document.querySelector(".bottom");
let numbers = [];
let symbols = [];
let lastEnterNum = '';
let currentNumber = '';
let tempValue = ''; // Temporary storage for number input

// function for toggle bar to change color 
Array.from(toggles).forEach(toggle => {
  toggle.addEventListener("click", e => {
      // Toggle background colors
      container.style.background = container.style.background === 'var(--primaryDark)' ? 'var(--primaryLight)' : 'var(--primaryDark)';
      calculate.style.background = calculate.style.background === 'var(--calcuDark)' ? 'var(--calcuLight)' : 'var(--calcuDark)';
      
      // Toggle text color
      let calcfont = document.querySelectorAll(".container");
      Array.from(calcfont).forEach(font => {
          font.style.color = font.style.color === 'rgb(251, 251, 251)' ? 'initial' : '#FBFBFB';
      });
  });
});

// Accept arithmetic input from button
let mathSymbol = document.querySelectorAll(".symbol");
Array.from(mathSymbol).forEach((char) => {
  char.addEventListener("click", (e) => {
    audio.play();
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
    audio.play();
    let buttonContent = button.innerHTML.trim();
    currentDisplay.innerHTML += buttonContent;
    tempValue += buttonContent; // Concatenate the button value to tempValue
  });
});

ans.addEventListener("click", (e) => {
  ansClick.play();
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

// Del button functionality
del.addEventListener("click", (e) => {
  ansClick.play();
  if (currentDisplay.innerHTML !== '') {
    let lastChar = currentDisplay.innerHTML.slice(-1); // Get the last character from display
    currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0, -1); // Remove the last character from display

    if (tempValue.length > 0) {
      tempValue = tempValue.slice(0, -1); // Remove the last character from tempValue
    } else if (symbols.length > 0 && '+-x/'.includes(lastChar)) {
      symbols.pop(); // Remove the last symbol from symbols array
    } else if (numbers.length > 0 && !isNaN(parseFloat(lastChar))) {
      let lastNumber = numbers[numbers.length - 1].toString(); // Get the last number as string
      if (lastNumber.length > 1) {
        numbers[numbers.length - 1] = parseFloat(lastNumber.slice(0, -1)); // Remove last digit from last number
        tempValue = tempValue.slice(0, -1); // Update tempValue
      } else {
        numbers.pop(); // Remove the last number from numbers array
        tempValue = ''; // Reset tempValue
      }
    }
  }
});


// Clear the display
clear.addEventListener("click", (e) => {
  ansClick.play();
  currentDisplay.innerHTML = " ";
  ansDisplay.innerHTML = "0";
  numbers = [];
  symbols = [];
  tempValue = ''; // Reset tempValue
});


