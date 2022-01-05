const greenButton = document.querySelector(".greenBtn");
const redButton = document.querySelector(".redBtn");
const yellowButton = document.querySelector(".yellowBtn");
const blueButton = document.querySelector(".blueBtn");

const colorButtons = [greenButton, redButton, yellowButton, blueButton];
// let randomColors = [];
let gamePickedColors = [];
let userPickedColors = [];

// Make a function that will have the computer pick the next colors randomly. And put the computers picks in an array.
const nextColor = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = colorButtons[randomNumber];
  gamePickedColors.push(randomColor);
  console.log(randomColor);
};

// Make a function that the user/player can pick a color when they click on a button. Put it in an array

greenButton.addEventListener("click", (event) => {
  userPickedColors.push(greenButton);
  console.log(greenButton);
});

redButton.addEventListener("click", (event) => {
  userPickedColors.push(redButton);
  console.log(redButton);
});

yellowButton.addEventListener("click", (event) => {
  userPickedColors.push(yellowButton);
  console.log(yellowButton);
});

blueButton.addEventListener("click", (event) => {
  userPickedColors.push(blueButton);
  console.log(blueButton);
});
