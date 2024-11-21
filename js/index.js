var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "side_" + randomNumber1 + "_pips.png";
var randomImageSource1 = "../image/" + randomDiceImage1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "side_" + randomNumber2 + "_pips.png";
var randomImageSource2 = "../image/" + randomDiceImage2;

var diceImages = document.getElementsByTagName("img");
diceImages[0].setAttribute("src", randomImageSource1);
diceImages[1].setAttribute("src", randomImageSource2);

console.log("First Dice:", randomNumber1, "Second Dice:", randomNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

document.getElementById("playAgainBtn").addEventListener("click", function () {
  location.reload();
});
