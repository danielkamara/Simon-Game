const greenButton = document.querySelector("#greenBtn");
const redButton = document.querySelector("#redBtn");
const yellowButton = document.querySelector("#yellowBtn");
const blueButton = document.querySelector("#blueBtn");
const startButton = document.querySelector(".startButton");
let displayRound = document.querySelector(".round");
let round = 1;
let start = false;

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

const colorButtons = [greenButton, redButton, yellowButton, blueButton];
let computerPickedColorsArray = [];
let userPickedColorsArray = [];

// make a function that will make a flash animation when clicked

const flash = (color) => {
  if (color === greenButton) {
    changeBackGreen();
  } else if (color === blueButton) {
    changeBackBlue();
  } else if (color === redButton) {
    changeBackRed();
  } else if (color === yellowButton) {
    changeBackYellow();
  }
};

// Make function for buttons to change back to original color when button is clicked (Click Animation)

const changeBackBlue = () => {
  blueButton.style.backgroundColor = "white";
  setTimeout(function () {
    sound1();
    blueButton.style.backgroundColor = "blue";
  }, 300);
};

const changeBackRed = () => {
  redButton.style.backgroundColor = "white";
  setTimeout(function () {
    sound2();
    redButton.style.backgroundColor = "darkred";
  }, 300);
};

const changeBackGreen = () => {
  greenButton.style.backgroundColor = "white";
  setTimeout(function () {
    sound3();
    greenButton.style.backgroundColor = "darkgreen";
  }, 300);
};

const changeBackYellow = () => {
  yellowButton.style.backgroundColor = "white";
  setTimeout(function () {
    sound4();
    yellowButton.style.backgroundColor = "darkgoldenrod";
  }, 300);
};

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

// Make a function that will have the computer pick the next colors randomly. And put the computers picks in an array.
const computerPickedColor = () => {
  let num = Math.floor(Math.random() * 4);
  let randomColor = colorButtons[num];
  computerPickedColorsArray.push(randomColor);
  flash(randomColor);
};

// Make a function to show the computers picks
function seeComputerPicks() {
  let start = 0;
  let gamePicks = setInterval(thisPick, 1000);

  function thisPick() {
    if (start < computerPickedColorsArray.length) {
      let currentPick = computerPickedColorsArray[start];
      flash(currentPick);
      start++;
    } else {
      clearInterval(gamePicks);
    }
  }
}

// Make a function to compare if the computer picks are the same as the user picks

const doesItMatch = () => {
  for (let i = 0; i < userPickedColorsArray.length; i++) {
    if (userPickedColorsArray[i] != computerPickedColorsArray[i]) return false;
  }
  return true;
};

// Make a function to end the game
function gameOver() {
  level = 0;
  userPickedColorsArray = [];
  computerPickedColorsArray = [];
  start = true;

  displayRound.innerHTML = `Game Over!!!!`;

  setTimeout(function () {
    displayRound.innerHTML = `Press Start Button To Start Game.`;
  }, 1000);
}

// Make function to start game

startButton.addEventListener("click", (e) => {
  setTimeout(function () {
    if (!start) {
      start = true;
      computerPickedColor();
      seeComputerPicks();
      displayRound.innerHTML = `Round ` + round;
      console.log(computerPickedColorsArray);
    } else if (start) {
    }
    if (
      doesItMatch() &&
      userPickedColorsArray.length === computerPickedColorsArray.length
    ) {
      // If its true, run the code below to go to the next level
      round++;
      userPickedColorsArray = [];
      computerPickedColor();
      seeComputerPicks();
      displayRound.innerHTML = `Round ` + round;
    }

    // If there is a difference between userClickedPattern and gamePattern
    else if (!doesItMatch()) {
      // Initiate gameOver and reset the game
      gameOver();
    }
  }, 200);
});
