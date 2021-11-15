var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var img1 = document.querySelector(".img1");

img1.setAttribute("src", randomImageSource1);

var img2 = document.querySelector(".img2");

img2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".header").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".header").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector(".header").innerHTML = "Draw!";
}
