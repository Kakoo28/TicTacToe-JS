const cases = [...document.querySelectorAll('.case')];
const resetButton = document.getElementById('resetButton');
let status = {
    currentPlayer: 1,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
    scoreX: 0,
    scoreO: 0,
    matchNul: 0,
}

function resetScore() {
    status.scoreX = 0;
    status.scoreO = 0;
    status.matchNul = 0;
    document.getElementById('scoreX').textContent = '0';
    document.getElementById('scoreO').textContent = '0';
    document.getElementById('scoreNul').textContent = '0';
}

function resetGame() {
    status.currentPlayer = 1;
    status.c1 = 0;
    status.c2 = 0;
    status.c3 = 0;
    status.c4 = 0;
    status.c5 = 0;
    status.c6 = 0;
    status.c7 = 0;
    status.c8 = 0;
    status.c9 = 0;
    document.getElementById('currentPlayer').style.color = '#fc4560';
    cases.forEach((c) => {c.textContent = '';});
}

function checkWin() {
    if (
        (status.c1 === status.c2 && status.c2 === status.c3 && status.c1 > 0) ||
        (status.c4 === status.c5 && status.c5 === status.c6 && status.c4 > 0) ||
        (status.c7 === status.c8 && status.c8 === status.c9 && status.c7 > 0) ||
        (status.c1 === status.c4 && status.c4 === status.c7 && status.c1 > 0) ||
        (status.c2 === status.c5 && status.c5 === status.c8 && status.c2 > 0) ||
        (status.c3 === status.c6 && status.c6 === status.c9 && status.c3 > 0) ||
        (status.c1 === status.c5 && status.c5 === status.c9 && status.c1 > 0) ||
        (status.c3 === status.c5 && status.c5 === status.c7 && status.c3 > 0)
    ) {
        if (status.currentPlayer === 1) {
            alert('Le joueur X à gagné !');
            status.scoreX++;
            document.getElementById('scoreX').textContent = status.scoreX;
        } else {
            alert('Le joueur O à gagné !');
            status.scoreO++;
            document.getElementById('scoreO').textContent = status.scoreO;
        }
        resetGame();
    } else if (
        status.c1 > 0 &&
        status.c2 > 0 &&
        status.c3 > 0 &&
        status.c4 > 0 &&
        status.c5 > 0 &&
        status.c6 > 0 &&
        status.c7 > 0 &&
        status.c8 > 0 &&
        status.c9 > 0
    ) {
        alert('Match Nul !');
        status.matchNul++;
        document.getElementById('scoreNul').textContent = status.matchNul;
        resetGame();
    }
}

function playCase(e) {
    let c = e.target.id;
    if (status[c] === 0) {
        if (status.currentPlayer === 1) {
            document.getElementById(c).textContent = 'X';
            document.getElementById(c).style.color = '#fc4560';
            status[c] = 1;
            checkWin();
            status.currentPlayer = 2;
            document.getElementById('currentPlayer').textContent = 'O';
            document.getElementById('currentPlayer').style.color = '#4563fc';

        } else {
            document.getElementById(c).textContent = 'O';
            document.getElementById(c).style.color = '#4563fc';
            status[c] = 2;
            checkWin();
            status.currentPlayer = 1;
            document.getElementById('currentPlayer').textContent = 'X';
            document.getElementById('currentPlayer').style.color = '#fc4560';
        }
    }
}

cases.forEach((e) => {e.addEventListener('click', playCase)});
resetButton.addEventListener('click', resetScore)