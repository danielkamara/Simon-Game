const greenButton = document.querySelector(".greenBtn");
const redButton = document.querySelector(".redBtn");
const yellowButton = document.querySelector(".yellowBtn");
const blueButton = document.querySelector(".blueBtn");

const colorButtons = [greenButton, redButton, yellowButton, blueButton];
// let randomColors = [];
let gamePickedColors = [];
let userPickedColors = [];

// Make a function that will pick the next colors
const nextColor = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = colorButtons[randomNumber];
  gamePickedColors.push(randomColor);
  console.log(randomColor);
};
