function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

// Example usage:
let stringWithSpaces = "   He l l  o   wo r  l   d   ";
let stringWithoutSpaces = removeSpaces(stringWithSpaces);
console.log(stringWithoutSpaces); // Output: "Helloworld"
