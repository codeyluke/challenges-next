const quotes = [
  "You are who you think you are",
  "What you think, you become",
  "Habits define who we are",
  "Never give up",
  "You become what you believe"
];

const randomQuotes = Math.floor(Math.random() * quotes.length);
document.write(`<h3 class="container">${quotes[randomQuotes]}</h3>`);

const pets = ["dogs", "cats", "mice", "rabbits", "hamsters"];

function pickRandomFromArray(myArray, start, end) {
  if (end > myArray.length) {
    return `Please enter a value lower than ${myArray.length}`;
  } else {
    const newArray = myArray.slice(start, end);
    const randomPick = Math.floor(Math.random() * newArray.length);
    const picked = newArray[randomPick];
    return picked;
  }
}

const guessPet = pickRandomFromArray(pets, 0, 4);
document.write(
  `<h3 class="container">The random animal would be ${guessPet}.</h3>`
);
