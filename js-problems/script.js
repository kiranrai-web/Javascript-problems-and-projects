// script.js

// Get elements
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.box');

// Initialize variables
let currentInput = '';
let previousInput = '';
let operator = null;

// Function to update screen
const updateScreen = (value) => {
    screen.textContent = value;
};

// Handle button clicks
const handleButtonClick = (id) => {
    if (id === 'ans') {
        calculateResult();
    } else if (id === 'del') {
        deleteLast();
    } else if (['add', 'sub', 'mul', 'div'].includes(id)) {
        setOperator(id);
    } else {
        appendNumber(id);
    }
};

// Append number to the current input
const appendNumber = (id) => {
    const numberMap = {
        one: '1', two: '2', three: '3', four: '4', five: '5',
        six: '6', sev: '7', eigh: '8', nine: '9', zero: '0'
    };
    currentInput += numberMap[id];
    updateScreen(currentInput);
};

// Set the operator and prepare for the next input
const setOperator = (id) => {
    const operatorMap = {
        add: '+', sub: '-', mul: '*', div: '/'
    };
    if (currentInput === '') return; // Prevent setting operator without a number
    if (previousInput !== '') calculateResult(); // Calculate result if there's already a previous input
    operator = operatorMap[id];
    previousInput = currentInput;
    currentInput = '';
};

// Calculate the result of the operation
const calculateResult = () => {
    if (previousInput === '' || currentInput === '' || operator === null) return;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateScreen(currentInput);
};

// Delete the last character of the current input
const deleteLast = () => {
    currentInput = currentInput.slice(0, -1);
    updateScreen(currentInput);
};

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.id);
    });
});
