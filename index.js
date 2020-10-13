function roll() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    var result = document.getElementById("result");
    var trophy1 = document.getElementById("trophy-1");
    var trophy2 = document.getElementById("trophy-2");
    var player1Dice = document.getElementById("player-1-dice");
    var player2Dice = document.getElementById("player-2-dice");

    player1Dice.setAttribute("src", "resource/images/dice-" + dice1 + ".png");
    player2Dice.setAttribute("src", "resource/images/dice-" + dice2 + ".png");

    if (dice1 > dice2) {
        result.innerText = "Player 1 Wins!";
        trophy1.classList.remove("invisible");
        trophy2.classList.add("invisible");
    } else if (dice2 > dice1) {
        result.innerText = "Player 2 Wins!";
        trophy1.classList.add("invisible");
        trophy2.classList.remove("invisible");
    } else {
        result.innerText = "It's a TIE!";
        trophy1.classList.remove("invisible");
        trophy2.classList.remove("invisible");
    }
}