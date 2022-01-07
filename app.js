const greenButton = document.querySelector("#greenBtn");
const redButton = document.querySelector("#redBtn");
const yellowButton = document.querySelector("#yellowBtn");
const blueButton = document.querySelector("#blueBtn");
const startButton = document.querySelector(".startButton");
const level = 0;

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

// Make a function that the user/player can pick a color when they click on a button. Put it in an array

greenButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(greenButton);
  changeBackGreen();
  doesItMatch();
  console.log(userPickedColorsArray);
});

redButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(redButton);
  changeBackRed();
  doesItMatch();
  console.log(userPickedColorsArray);
});

yellowButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(yellowButton);
  changeBackYellow();
  doesItMatch();
  console.log(userPickedColorsArray);
});

blueButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(blueButton);
  changeBackBlue();
  doesItMatch();
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

startButton.addEventListener("click", (e) => {
  computerPickedColor();
  doesItMatch();
  console.log(computerPickedColorsArray);
});

// Make a function to compare color clicks

const doesItMatch = () => {
  if (userPickedColorsArray.length === computerPickedColorsArray.length) {
    alert("Match");
  } else {
    console.log("No Match!!!!");
  }
};
