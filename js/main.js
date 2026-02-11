/* const location1 = 3;
const location2 = 4;
const location3 = 5;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (!isSunk) {
  guess = +prompt("Ready, aim, fire! (Enter a number 0 - 6): ");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses += 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits += 1;
      alert("HIT!");
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS");
    }
  }
}

const stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${3 / guesses}`;

alert(stats); */

let view = {
  displayMessage: function (msg) {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    let cell = document.getElementById(location);
    cell.classList.add("hit");
  },
  displayMiss: function (location) {
    let cell = document.getElementById(location);
    cell.classList.add("miss");
  },
};
