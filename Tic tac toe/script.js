console.log("Script is running!");

let boxes = document.querySelectorAll(".box");
let turnDisplay = document.querySelector("#turnShow"); // Select turn display element by id
let resultDisplay = document.querySelector(".resultDisplay");
let turn = 1;
let gameOver = false;
let currentPlayer = 'X'; // 'X' for player, 'O' for computer

// Function to switch turns between player and computer
const switchTurn = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnDisplay.textContent = currentPlayer === 'X' ? "Player's Turn" : "Computer's Turn";
};

// Computer makes a move
const computerMove = () => {
    let emptyBoxes = [];
    boxes.forEach((box, index) => {
        if (box.innerHTML === "") {
            emptyBoxes.push(index);
        }
    });

    if (emptyBoxes.length > 0 && !gameOver) {
        let randomNum = Math.floor(Math.random() * emptyBoxes.length);
        let chosenBox = emptyBoxes[randomNum];
        boxes[chosenBox].innerHTML = "O";
        switchTurn();
        turn++;
        checkGameStatus();
    }
};

// Player makes a move
const playerMove = () => {
    boxes.forEach(box => {
        box.addEventListener("click", handleClick, { once: true });
    });
    turnDisplay.textContent = "Player's Turn"; // Update turn display text
};

// Handle click event for player move
const handleClick = (e) => {
    if (!gameOver && e.target.innerHTML === "") {
        e.target.innerHTML = "X";
        switchTurn();
        turn++;
        checkGameStatus();
        if (!gameOver && currentPlayer === 'O') {
            setTimeout(computerMove, 500); // Introduce a delay for better visual feedback
        }
    }
};

// Check for winning condition or draw
const checkGameStatus = () => {
    if (winLose("O")) {
        resultDisplay.innerHTML = "Computer Wins!"
        gameOver = true;
    } else if (winLose("X")) {
        resultDisplay.innerHTML = "You Win!"
        gameOver = true;
    } else if (turn > 9) {
        resultDisplay.innerHTML = "Draw!"
        gameOver = true;
    }
};

// Check for winning condition
const winLose = (symbol) => {
    const lines = [
        [0, 1, 2], // Horizontal lines
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // Vertical lines
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // Diagonal lines
        [2, 4, 6]
    ];

    for (let line of lines) {
        let [a, b, c] = line;
        if (boxes[a].innerHTML === symbol && boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
            return true;
        }
    }
    return false;
};

// Main game function
function main() {
    playerMove(); // Start with player's move
}

// Start the game
main();
