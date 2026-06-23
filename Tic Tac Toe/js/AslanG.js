const btnFriend = document.querySelector(".btn-friend");
const btnAI = document.querySelector(".btn-ai");
const gameSection = document.querySelector(".game");
const textItem = document.querySelector(".text-item");
const buttons = document.querySelector(".buttons");
const cells = document.querySelectorAll(".cell");
const player1ScoreEl = document.querySelector(".player.left .score");
const player2ScoreEl = document.querySelector(".player.right .score");
const resetBtn = document.querySelector(".reset-btn");

let board = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];
let currentPlayer = "X";
let gameActive = true;
let gameMode = "friend";
let score1 = 0;
let score2 = 0;

btnFriend.addEventListener("click", function () {
    startGame("friend");
});

btnAI.addEventListener("click", function () {
    startGame("ai");
});

function startGame(mode) {
    gameMode = mode;

    textItem.classList.add("hidden");
    buttons.classList.add("hidden");
    gameSection.classList.remove("hidden");

    const rightPlayer = document.querySelector(".player.right .player-name");

    if (mode === "ai") {
        rightPlayer.textContent = "COMPUTER";
    } else {
        rightPlayer.textContent = "PLAYER 2";
    }
}

let winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let i = 0;
while (i < cells.length) {
    addCellClick(i);
    i = i + 1;
}

function addCellClick(i) {
    cells[i].addEventListener("click", function () {
        handleCellClick(i);
    });
}

function handleCellClick(i) {
    if (gameActive === false) {
        return;
    }

    if (board[i] !== "") {
        return;
    }

    board[i] = currentPlayer;
    cells[i].textContent = currentPlayer;

    if (checkWin()) {
        endRound(currentPlayer);
        return;
    }

    if (checkDraw()) {
        endRound("draw");
        return;
    }

    if (gameMode === "ai" && currentPlayer === "X") {
        currentPlayer = "O";
        aiMove();
        return;
    }

    if (gameMode === "friend") {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin() {
    let i = 0;
    while (i < winPatterns.length) {
        let p = winPatterns[i];

        if (board[p[0]] === currentPlayer &&
            board[p[1]] === currentPlayer &&
            board[p[2]] === currentPlayer) {
            return true;
        }

        i = i + 1;
    }
    return false;
}

function checkDraw() {
    let i = 0;
    while (i < board.length) {
        if (board[i] === "") {
            return false;
        }
        i = i + 1;
    }
    return true;
}

function endRound(result) {
    gameActive = false;

    if (result === "X") {
        score1 = score1 + 1;
        player1ScoreEl.textContent = "Score: " + score1;
    }

    if (result === "O") {
        score2 = score2 + 1;
        player2ScoreEl.textContent = "Score: " + score2;
    }

    if (score1 === 3) {
        showMatchWinner("PLAYER 1");
        resetMatch();
        return;
    }

    if (score2 === 3) {
        showMatchWinner("PLAYER 2");
        resetMatch();
        return;
    }

    resetBoard();
}

function resetBoard() {
    board = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];
    currentPlayer = "X";
    gameActive = true;

    let i = 0;
    while (i < cells.length) {
        cells[i].textContent = "";
        i = i + 1;
    }
}

function resetMatch() {
    score1 = 0;
    score2 = 0;

    player1ScoreEl.textContent = "Score: 0";
    player2ScoreEl.textContent = "Score: 0";

    resetBoard();
}

function showMatchWinner(winner) {
    const winnerBox = document.querySelector(".match-winner");
    winnerBox.textContent = "Match Winner: " + winner;
    winnerBox.classList.remove("hidden");
}

function aiMove() {
    let emptyCells = [];

    let i = 0;
    while (i < board.length) {
        if (board[i] === "") {
            emptyCells.push(i);
        }
        i = i + 1;
    }

    if (emptyCells.length === 0) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const aiChoice = emptyCells[randomIndex];

    board[aiChoice] = "O";
    cells[aiChoice].textContent = "O";

    if (checkWin()) {
        endRound("O");
        return;
    }

    if (checkDraw()) {
        endRound("draw");
        return;
    }

    currentPlayer = "X";
}

resetBtn.addEventListener("click", function () {
    resetMatch();
});