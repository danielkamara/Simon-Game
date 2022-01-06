const greenButton = document.querySelector("#greenBtn");
const redButton = document.querySelector("#redBtn");
const yellowButton = document.querySelector("#yellowBtn");
const blueButton = document.querySelector("#blueBtn");
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

greenButton.addEventListener("click", (e) => {
  userPickedColors.push(greenButton);
  changeBackGreen();
  console.log(userPickedColors);
});

redButton.addEventListener("click", (e) => {
  userPickedColors.push(redButton);
  changeBackRed();
  console.log(userPickedColors);
});

yellowButton.addEventListener("click", (e) => {
  userPickedColors.push(yellowButton);
  changeBackYellow();
  console.log(userPickedColors);
});

blueButton.addEventListener("click", (e) => {
  userPickedColors.push(blueButton);
  changeBackBlue();
  console.log(userPickedColors);
});

// Make function to start game

startGame = () => {};

// Make a function to compare color clicks

doesItMatch = () => {};

// Make function for buttons to change back to original color when button is clicked (Click Animation)

const changeBackBlue = () => {
  blueButton.style.backgroundColor = "white";
  setTimeout(function () {
    blueButton.style.backgroundColor = "blue";
  }, 500);
};

const changeBackRed = () => {
  redButton.style.backgroundColor = "white";
  setTimeout(function () {
    redButton.style.backgroundColor = "red";
  }, 500);
};

const changeBackGreen = () => {
  greenButton.style.backgroundColor = "white";
  setTimeout(function () {
    greenButton.style.backgroundColor = "green";
  }, 500);
};

const changeBackYellow = () => {
  yellowButton.style.backgroundColor = "white";
  setTimeout(function () {
    yellowButton.style.backgroundColor = "yellow";
  }, 500);
};
