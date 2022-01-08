const greenButton = document.querySelector("#greenBtn");
const redButton = document.querySelector("#redBtn");
const yellowButton = document.querySelector("#yellowBtn");
const blueButton = document.querySelector("#blueBtn");
const startButton = document.querySelector(".startButton");
const currentPatternList = document.querySelector("#current-pattern");
const repeat = document.querySelector(".repeat");

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
  userPickedColorsArray.push(greenButton);
  flashGreen();

  console.log(userPickedColorsArray);
});

redButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(redButton);
  flashRed();

  console.log(userPickedColorsArray);
});

yellowButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(yellowButton);
  flashYellow();

  console.log(userPickedColorsArray);
});

blueButton.addEventListener("click", (e) => {
  userPickedColorsArray.push(blueButton);
  flashBlue();

  console.log(userPickedColorsArray);
});

repeat.addEventListener("click", seeComputerPicks);

function addToColorsList() {}

// Make a function that will have the computer pick the next colors randomly. And put the computers picks in an array.
const computerPickedColor = () => {
  let num = Math.floor(Math.random() * 4);
  let randomColor = colorButtons[num];
  computerPickedColorsArray.push(randomColor);

  // // addToColorsList(randomColor);
  console.log(computerPickedColorsArray);
};

// Make a function to show the computers picks
function seeComputerPicks() {
  let start = 0;
  let gamePicks = setInterval(thisPick, 1000);

  function thisPick() {
    if (start < computerPickedColorsArray.length) {
      let currentPick = computerPickedColorsArray[start];
      checkFlash(currentPick);
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
  round = 0;
  userPickedColorsArray = [];
  computerPickedColorsArray = [];
  start = false;

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
      if (round == 4) {
        alert("You Win!!!");
        location.reload();
      }
    }

    // If there is a difference between userClickedPattern and gamePattern
    if (!doesItMatch()) {
      // Initiate gameOver and reset the game
      gameOver();
    }
  }, 200);
});
