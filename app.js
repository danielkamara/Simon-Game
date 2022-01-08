const greenButton = document.querySelector("#greenBtn");
const redButton = document.querySelector("#redBtn");
const yellowButton = document.querySelector("#yellowBtn");
const blueButton = document.querySelector("#blueBtn");
const startButton = document.querySelector(".startButton");
const currentPatternList = document.querySelector("#current-pattern");
const repeat = document.querySelector(".repeat");
const colorButtons = [greenButton, redButton, yellowButton, blueButton];

let displayRound = document.querySelector(".round");

// Make sounds for the buttons clicked
const sound1 = () => {
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3").play();
};
const sound2 = () => {
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3").play();
};
const sound3 = () => {
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3").play();
};
const sound4 = () => {
  new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3").play();
};

// make a function that will make a flash animation when clicked

const checkFlash = (color) => {
  console.log(color);
  if (color === greenButton) {
    flashGreen();
  } else if (color === blueButton) {
    flashBlue();
  } else if (color === redButton) {
    flashRed();
  } else if (color === yellowButton) {
    flashYellow();
  }
};

// Make function for buttons to change back to original color when button is clicked (Click Animation)

const flashBlue = () => {
  blueButton.style.backgroundColor = "white";
  sound1();
  setTimeout(function () {
    blueButton.style.backgroundColor = "blue";
  }, 300);
};

const flashRed = () => {
  redButton.style.backgroundColor = "white";
  sound2();
  setTimeout(function () {
    redButton.style.backgroundColor = "darkred";
  }, 300);
};

const flashGreen = () => {
  console.log(65);
  greenButton.style.backgroundColor = "white";
  sound3();
  setTimeout(function () {
    greenButton.style.backgroundColor = "darkgreen";
  }, 300);
};

const flashYellow = () => {
  yellowButton.style.backgroundColor = "white";
  sound4();
  setTimeout(function () {
    yellowButton.style.backgroundColor = "darkgoldenrod";
  }, 300);
};

// Make a function that the user/player can pick a color when they click on a button. Put it in an array

greenButton.addEventListener("click", (e) => {
  gameState.userPickedColorsArray.push(greenButton);
  checkGuess(greenButton);
  flashGreen();

  console.log(gameState.userPickedColorsArray);
});

redButton.addEventListener("click", (e) => {
  gameState.userPickedColorsArray.push(redButton);
  checkGuess(redButton);
  flashRed();

  console.log(gameState.userPickedColorsArray);
});

yellowButton.addEventListener("click", (e) => {
  gameState.userPickedColorsArray.push(yellowButton);
  checkGuess(yellowButton);
  flashYellow();

  console.log(gameState.userPickedColorsArray);
});

blueButton.addEventListener("click", (e) => {
  gameState.userPickedColorsArray.push(blueButton);
  checkGuess(blueButton);
  flashBlue();

  console.log(gameState.userPickedColorsArray);
});

// See computers picks
repeat.addEventListener("click", seeComputerPicks);

// Make a function that will have the computer pick the next colors randomly. And put the computers picks in an array.
const computerPickedColor = () => {
  let num = Math.floor(Math.random() * 4);
  let randomColor = colorButtons[num];
  gameState.computerPickedColorsArray.push(randomColor);

  // // addToColorsList(randomColor);
  console.log(gameState.computerPickedColorsArray);
};

// Make a function to show the computers picks
function seeComputerPicks() {
  let start = 0;
  let gamePicks = setInterval(thisPick, 1000);

  function thisPick() {
    if (start < gameState.computerPickedColorsArray.length) {
      let currentPick = gameState.computerPickedColorsArray[start];
      checkFlash(currentPick);
      start++;
    } else {
      clearInterval(gamePicks);
    }
  }
}

// Make a function to end the game
function gameOver() {
  gameState.round = 0;
  gameState.userPickedColorsArray = [];
  gameState.computerPickedColorsArray = [];

  displayRound.innerHTML = `Game Over!!!!`;

  setTimeout(function () {
    displayRound.innerHTML = `Press Start Button To Start Game.`;
  }, 1000);
}

// Make function to start game

const gameState = {
  round: 1,
  computerPickedColorsArray: [],
  userPickedColorsArray: [],
  gameOver: false,
  currentGuessIndex: 0,
};

const checkGuess = (color) => {
  console.log(gameState);
  if (
    gameState.computerPickedColorsArray[gameState.currentGuessIndex++] !== color
  ) {
    gameState.gameOver = true;
    console.log("You Lost");
  } else {
    checkIfWon();
  }
};

const checkIfWon = () => {
  if (
    gameState.computerPickedColorsArray.length ===
      gameState.userPickedColorsArray.length &&
    !gameState.gameOver
  ) {
    gameState.round++;
    gameState.userPickedColorsArray = [];
    gameState.currentGuessIndex = 0;
    setTimeout(startGame, 2000);
  }
};

const startGame = () => {
  if (!gameState.gameOver) {
    computerPickedColor();
    seeComputerPicks();

    displayRound.innerHTML = `Round ` + gameState.round;
  }
};

startButton.addEventListener("click", (e) => startGame());
