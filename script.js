let score = {
    win: 0,
    lose: 0,
    tie: 0
};

fetchScore();

function playGame(playerMove) {
    const computerMove = chooseCompMove();
    let result = '';
    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result += 'Tie';
        } else if (computerMove === 'Paper') {
            result += 'Lose';
        } else if (computerMove === 'Scissors') {
            result += 'Win';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result += 'Win';
        } else if (computerMove === 'Paper') {
            result += 'Tie';
        } else if (computerMove === 'Scissors') {
            result += 'Lose';
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result += 'Lose';
        } else if (computerMove === 'Paper') {
            result += 'Win';
        } else if (computerMove === 'Scissors') {
            result += 'Tie';
        }
    }
    updateScore(result);
    document.getElementById('moves').innerHTML = 
        `You <img src="./images/${playerMove}.png" alt="${computerMove}"> <img src="./images/${computerMove}.png" alt="${playerMove}"> Computer`;
    if (result === 'Tie') {
        document.getElementById('result').innerText = `${result}.`;
    } else {
        document.getElementById('result').innerText = `You ${result}.`;
    }
    
    displayScore();
}
    
function chooseCompMove() {
    const move = Math.random();
    if (move <= 1 / 3) {
        return 'Rock';
    } else if (move <= 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function fetchScore() {
    const savedScore = JSON.parse(localStorage.getItem('score'));

    if (savedScore) {
        score = savedScore;
    }

    displayScore();
}

function updateScore(result) {
    if (result == 'Win') {
        score.win += 1;
    } else if (result == 'Lose') {
        score.lose += 1;
    } else if (result == 'Tie') {
        score.tie += 1;
    }

    const newScore = JSON.stringify(score);
    localStorage.setItem('score', newScore);
}


function  displayScore() {
    document.getElementById('score').innerText =
        `Wins : ${score.win}\n Losses : ${score.lose}\n Ties : ${score.tie}`;
}

function resetScore() {
    score = {
        win: 0,
        lose: 0,
        tie: 0
    };

    const newScore = JSON.stringify(score);
    localStorage.setItem('score', newScore);

    displayScore();
}


