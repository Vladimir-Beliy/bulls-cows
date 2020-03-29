'use strict';

alert('Hello!');

startGame();

function startGame() {
  if (confirm('Do you want start game?')) {
    game();
  } else {
    alert('As you wish >_<');
  }
}

function game() {
  const guessedNumber = randomNumber();

  let countStr = '';

  while (true) {
    const userNumber = prompt(countStr + 'Please enter 4 digits number:');
    const countObj = bullsAndCows(guessedNumber, userNumber);

    if (userNumber === null) {
      break;
    }

    if (countObj !== undefined) {
      countStr
      += `${userNumber} (bulls: ${countObj.bulls} cows: ${countObj.cows})\n`;
    } else {
      alert('You should enter four different numbers from 0 to 9');
    }

    if (userNumber === guessedNumber) {
      alert('You won!!! ' + userNumber);
      break;
    }
  }

  startGame();
}

function bullsAndCows(generatedNumber, enteredNumber) {
  if (!(/^\d{4}$/).test(enteredNumber)) {
    return undefined;
  }

  for (const subStr of enteredNumber) {
    if (enteredNumber.indexOf(subStr)
      !== enteredNumber.lastIndexOf(subStr)) {
      return undefined;
    }
  }

  const count = {
    bulls: 0,
    cows: 0,
  };

  for (const subStr of enteredNumber) {
    if (generatedNumber.indexOf(subStr) === -1) {
      continue;
    }

    if (generatedNumber.indexOf(subStr)
      === enteredNumber.indexOf(subStr)) {
      count.bulls += 1;
    } else {
      count.cows += 1;
    }
  }

  return count;
}

function randomNumber() {
  let numStr = '';

  while (numStr.length < 4) {
    const randomNum = '' + Math.floor(Math.random() * 10);

    if (numStr.indexOf(randomNum) === -1) {
      numStr += randomNum;
    }
  }

  return numStr;
}
