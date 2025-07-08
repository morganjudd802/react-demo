const styles = `
    .tic-tac-toe-board {
        background: #f4f2f0;
        border-radius: 6px;
    }
    
    .tic-tac-toe-table {
        border-collapse: collapse;
    }

    .tic-tac-toe-table td {
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        padding: 0;
        text-align: center;
        width: 50px;
        height: 50px;
        font-size: 24px;
        line-height: 50px;
    }
    
    .tic-tac-toe-table td:last-child {
        border-right: none;
    }
    
    .tic-tac-toe-table tr:last-child td {
        border-bottom: none;
    }
    
    .select {
        cursor: pointer;
    }
`;

let ticTacToeBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let ticTacToeMessage = 'Select a cell to begin';
let winner = false;

function init() {
    let style = document.createElement('style');
    style.innerHTML = styles;
    document.head.appendChild(style);
    initTicTacToe();
}

function initTicTacToe() {
    // Reset board
    ticTacToeBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    // Reset winner status
    winner = false;

    // Show initial message
    updateMessage(ticTacToeMessage);

    // Render table
    renderTicTacToeTable();
}

function renderTicTacToeTable() {
    let container = document.getElementById('tic-tac-toe-board');
    container.className = 'tic-tac-toe-board';

    let table = document.createElement('table');
    table.className = 'tic-tac-toe-table';

    for (let x = 0; x < ticTacToeBoard.length; x++) {
        let row = table.insertRow();
        for (let y = 0; y < ticTacToeBoard[x].length; y++) {
            let cell = row.insertCell();

            switch(ticTacToeBoard[x][y]) {
                case 1:
                    cell.innerHTML = 'X';
                    break;
                case 2:
                    cell.innerHTML = 'O';
                    break;
                default:
                    if(!winner) {
                        cell.className = 'select';
                        cell.onclick = () => playerChoice(x, y);
                    }
            }
        }
    }
    container.innerHTML = '';
    container.appendChild(table);
}

function updateMessage(message) {
    document.getElementById('tic-tac-toe-message').innerHTML = message;
}

function playerChoice(x, y) {
    ticTacToeMessage = '';
    ticTacToeBoard[x][y] = 1;
    renderTicTacToeTable();
    if(!checkVictory()) {
        computerChoice();
    }
}

function computerChoice() {
    for (let x = 0; x < ticTacToeBoard.length; x++) {
        for (let y = 0; y < ticTacToeBoard[x].length; y++) {
            if (ticTacToeBoard[x][y] === 0) {
                ticTacToeBoard[x][y] = 2;
                renderTicTacToeTable();
                checkVictory();
                return;
            }
        }
    }
}

function checkVictory() {

    // Check rows
    for (let x = 0; x < 3; x++) {
        if (ticTacToeBoard[x][0] !== 0 &&
            ticTacToeBoard[x][0] === ticTacToeBoard[x][1] &&
            ticTacToeBoard[x][1] === ticTacToeBoard[x][2]) {
            determineWinner(ticTacToeBoard[x][0]);
            return true;
        }
    }

    // Check columns
    for (let y = 0; y < 3; y++) {
        if (ticTacToeBoard[0][y] !== 0 &&
            ticTacToeBoard[0][y] === ticTacToeBoard[1][y] &&
            ticTacToeBoard[1][y] === ticTacToeBoard[2][y]) {
            determineWinner(ticTacToeBoard[0][y]);
            return true;
        }
    }

    // Check left diagonal
    if (ticTacToeBoard[0][0] !== 0 &&
        ticTacToeBoard[0][0] === ticTacToeBoard[1][1] &&
        ticTacToeBoard[1][1] === ticTacToeBoard[2][2]) {
        determineWinner(ticTacToeBoard[0][0]);
        return true;
    }

    // Check right diagonal
    if (ticTacToeBoard[0][2] !== 0 &&
        ticTacToeBoard[0][2] === ticTacToeBoard[1][1] &&
        ticTacToeBoard[1][1] === ticTacToeBoard[2][0]) {
        determineWinner(ticTacToeBoard[0][2]);
        return true;
    }

    // Check stalemate
    if(!ticTacToeBoard.flat().includes(0)) {
        updateMessage('Stalemate reached');
        return true;
    }

    return false;
}

function determineWinner(player) {
    switch(player) {
        case 1:
            updateMessage('You win!');
            break;
        case 2:
            updateMessage('You lose!');
            break;
    }
    winner = true;
    renderTicTacToeTable();
}

document.addEventListener('DOMContentLoaded', init);