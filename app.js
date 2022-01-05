const greenButton = document.querySelector(".greenBtn");
const redButton = document.querySelector(".redBtn");
const yellowButton = document.querySelector(".yellowBtn");
const blueButton = document.querySelector(".blueBtn");
const startButton = document.querySelector(".startButton");

const colorButtons = [greenButton, redButton, yellowButton, blueButton];
// let randomColors = [];
let gamePickedColors = [];
let userPickedColors = [];

// Make a function that will have the computer pick the next colors randomly. And put the computers picks in an array.
const computerPickedColor = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = colorButtons[randomNumber];
  gamePickedColors.push(randomColor);
  console.log(gamePickedColors);
};

// Make a function that the user/player can pick a color when they click on a button. Put it in an array

greenButton.addEventListener("click", (event) => {
  greenButton.style.backgroundColor = "white";
  userPickedColors.push(greenButton);
  console.log(userPickedColors);
});

redButton.addEventListener("click", (event) => {
  redButton.style.backgroundColor = "white";
  userPickedColors.push(redButton);
  console.log(userPickedColors);
});

yellowButton.addEventListener("click", (event) => {
  yellowButton.style.backgroundColor = "white";
  userPickedColors.push(yellowButton);
  console.log(userPickedColors);
});

blueButton.addEventListener("click", (event) => {
  blueButton.style.backgroundColor = "white";
  userPickedColors.push(blueButton);
  console.log(userPickedColors);
});

// Make function to start game

startGame = () => {};

// Make a function to compare color clicks

doesItMatch = () => {};
