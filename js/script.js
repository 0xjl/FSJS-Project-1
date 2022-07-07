// global variables
let randomQuote;

// quotes array
const quotes = [
  {
    quote: "Try not. Do or do not. There is no try.",
    source: "Yoda",
    citation: "Star Wars Episode V: The Empire Strikes Back",
    year: "1980",
  },
  {
    quote: "Your eyes can deceive you; dont trust them.",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars Episode IV: A New Hope",
    year: "1977",
    tag: "My favorite movie",
  },
  {
    quote: "Your focus determines your reality.",
    source: "Qui-Gon Jinn",
    citation: "Star Wars Episode I: The Phantom Menace",
    year: "1999",
  },
  {
    quote:
      "Sometimes we must let go of our pride and do what is requested of us.",
    source: "Anakin Skywalker",
    citation: "Star Wars Episode II: Attack Of The Clones",
    year: "2002",
  },
  {
    quote:
      "Well always be with you. No ones ever really gone. A thousand generations live in you now",
    source: "Luke Skywalker",
    citation: "Star Wars Episode IX: The Rise of Skywalker",
    year: "2019",
  },
  {
    quote: "Be careful not to choke on your aspirations, director.",
    source: "Darth Vader",
    citation: "Star Wars Rogue One",
    year: "2016",
  },
];

// getRandomQuote function
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// printQuote function
function printQuote() {
  randomQuote = getRandomQuote();
  let html = document.getElementById("quote-box");
  let displayQuote = "";
  displayQuote += `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}   
    <span class="citation">${randomQuote.citation}</span>
    <span class="year">${randomQuote.year}</span></p>
  `;
  html.innerHTML = displayQuote;
  console.log(randomQuote);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
