"use strict";

const dictionary = ['earth', 'plane', 'crane', 'audio', 'house', "mouse", "abuse", "avoid", "begin"];
const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            drawBox(grid, i, j);
        }
    }

    container.appendChild(grid);
}

function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}

function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = letter;
    box.id = `box${row}${col}`;

    container.appendChild(box);
    return box;
}

function registerKeyboardEvents() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            if (state.currentCol === 5) {
                const word = getCurrentWord();
                if (isWordValid(word)) {
                    revealWord(word);
                    state.currentRow++;
                    state.currentCol = 0;
                } else {
                    message("Not a valid word.", "mal", 2000);
                }
            }
        }
        if (key === 'Backspace') {
            removeLetter();
        }
        if (isLetter(key)) {
            addLetter(key);
        }

        updateGrid();
    };
}

function message(message, type, time) {
    let infoGame = document.getElementById("infoGame");
    infoGame.innerHTML = message;
    infoGame.classList.remove("invisible");
    if(type == "mal"){
        infoGame.classList.add("mal");
    }else {
        infoGame.classList.add("bien");
    }
    
    setTimeout( () => {
       infoGame.classList.add("invisible");
       if(type == "mal"){
        infoGame.classList.remove("mal");
    }else {
        infoGame.classList.remove("bien");
    }
       infoGame.innerHTML = "";
    }, time);
}

function getCurrentWord() {
    return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}

function isWordValid(word) {
    return dictionary.includes(word);
}

function revealWord(guess) {
    const row = state.currentRow;
    const animation_duration = 500; // ms

    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;

        setTimeout(() => {
            if (letter === state.secret[i]) {
                box.classList.add('right');
            } else if (state.secret.includes(letter)) {
                box.classList.add('wrong');
            } else {
                box.classList.add('empty');
            }
        }, ((i + 1) * animation_duration) / 2);

        box.classList.add('animated');
        box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }

    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;

    setTimeout(() => {
        if (isWinner) {
            message("Congratulations!", "bien", 2000);
        } else if (isGameOver) {
            message(`Better luck next time! The word was ${state.secret}.`, "bien", 5000);
        }
    }, 3 * animation_duration);
}

function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
    if (state.currentCol === 5) return;
    state.grid[state.currentRow][state.currentCol] = letter;
    state.currentCol++;
}

function removeLetter() {
    if (state.currentCol === 0) return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
}

export const nuevoDiccionario = (array) => {
    dictionary.splice(0, dictionary.length);
    for (let i = 0; i < array.length; i++) {
        anadirPalabraDiccionario(array[i]);
    }
};

export const anadirPalabraDiccionario = (palabra) => {
    dictionary.push(palabra);
};

export const borrarPalabraDiccionario = (palabra) => {
    var index = dictionary.indexOf(palabra);
    if (index > -1) {
        dictionary.splice(index, 1);
    }
};

const reiniciarWordle = () => {
    state.grid = Array(6)
        .fill()
        .map(() => Array(5).fill(''));
    state.currentCol = 0;
    state.currentRow = 0;
    state.secret = dictionary[Math.floor(Math.random() * dictionary.length)];
    updateGrid();
};

export const iniciarWordles = () => {
    const game = document.getElementById("game");
    reiniciarWordle();
    drawGrid(game);

    registerKeyboardEvents();
};