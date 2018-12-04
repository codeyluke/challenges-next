const quotes = [
  "You are who you think you are",
  "What you think, you become",
  "Habits define who we are",
  "Never give up",
  "You become what you believe"
];

const randomQuotes = Math.floor(Math.random() * quotes.length);
document.write(`<h3 class="container">${quotes[randomQuotes]}</h3>`);
