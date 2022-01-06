const greenButton = document.querySelector("#greenBtn");
const redButton = document.querySelector("#redBtn");
const yellowButton = document.querySelector("#yellowBtn");
const blueButton = document.querySelector("#blueBtn");
const startButton = document.querySelector(".startButton");

const colorButtons = [greenButton, redButton, yellowButton, blueButton];
const computerPickedColorsArray = [];
const userPickedColorsArray = [];
let start = false;

// Make a function that will have the computer pick the next colors randomly. And put the computers picks in an array.
const computerPickedColor = () => {
  let num = Math.floor(Math.random() * 4);
  let randomColor = colorButtons[num];
  computerPickedColorsArray.push(randomColor);
  if (randomColor === greenButton) {
    changeBackGreen();
  } else if (randomColor === blueButton) {
    changeBackBlue();
  } else if (randomColor === redButton) {
    changeBackRed();
  } else if (randomColor === yellowButton) {
    changeBackYellow();
  }
};

startButton.addEventListener("click", (e) => {
  computerPickedColor();

  console.log(computerPickedColorsArray);
});

// Make a function that the user/player can pick a color when they click on a button. Put it in an array

greenButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(greenButton);
  changeBackGreen();
  console.log(userPickedColorsArray);
});

redButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(redButton);
  changeBackRed();
  console.log(userPickedColorsArray);
});

yellowButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(yellowButton);
  changeBackYellow();
  console.log(userPickedColorsArray);
});

blueButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(blueButton);
  changeBackBlue();
  console.log(userPickedColorsArray);
});

// Make function for buttons to change back to original color when button is clicked (Click Animation)

const changeBackBlue = () => {
  blueButton.style.backgroundColor = "white";
  setTimeout(function () {
    blueButton.style.backgroundColor = "blue";
  }, 300);
};

const changeBackRed = () => {
  redButton.style.backgroundColor = "white";
  setTimeout(function () {
    redButton.style.backgroundColor = "red";
  }, 300);
};

const changeBackGreen = () => {
  greenButton.style.backgroundColor = "white";
  setTimeout(function () {
    greenButton.style.backgroundColor = "green";
  }, 300);
};

const changeBackYellow = () => {
  yellowButton.style.backgroundColor = "white";
  setTimeout(function () {
    yellowButton.style.backgroundColor = "yellow";
  }, 300);
};

// Make function to start game

// startGame = () => {};

// Make a function to compare color clicks

doesItMatch = () => {};
