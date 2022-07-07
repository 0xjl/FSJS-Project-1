// global variables
let randomQuote;

// quotes array
const quotes = [
  {
    quote: "Try not. Do or do not. There is no try.",
    source: "Yoda",
    faction: "Jedi",
    citation: "Star Wars Episode V: The Empire Strikes Back",
    year: "1980",
  },
  {
    quote: "Your eyes can deceive you; dont trust them.",
    source: "Obi-Wan Kenobi",
    faction: "Jedi",
    citation: "Star Wars Episode IV: A New Hope",
    year: "1977",
  },
  {
    quote: "Your focus determines your reality.",
    source: "Qui-Gon Jinn",
    faction: "Jedi",
    citation: "Star Wars Episode I: The Phantom Menace",
    year: "1999",
  },
  {
    quote:
      "Sometimes we must let go of our pride and do what is requested of us.",
    source: "Anakin Skywalker",
    faction: "Jedi",
    citation: "Star Wars Episode II: Attack Of The Clones",
    year: "2002",
  },
  {
    quote:
      "Well always be with you. No ones ever really gone. A thousand generations live in you now",
    source: "Luke Skywalker",
    faction: "Jedi",
    citation: "Star Wars Episode IX: The Rise of Skywalker",
    year: "2019",
  },
  {
    quote: "Be careful not to choke on your aspirations, director.",
    source: "Darth Vader",
    faction: "Sith",
    citation: "Star Wars Rogue One",
    year: "2016",
  },
  {
    quote:
      "Stand together, die together. Let your death be the final word in the story of rebellion.",
    source: "Emperor Palpatine",
    faction: "Sith",
    citation: "Star Wars EpisodeIX: The Rise of Skywalker",
    year: "2016",
  },
];

// getRandomQuote function
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//randomColorGenerator
function getRandomBackgroundColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
}

// printQuote function
function printQuote() {
  randomQuote = getRandomQuote();
  let html = document.getElementById("quote-box");
  let displayQuote = "";
  displayQuote += `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}   
      <span class="faction">${randomQuote.faction}</span>
      <span class="citation">${randomQuote.citation}</span>
      <span class="year">${randomQuote.year}</span>
    </p>
  `;
  html.innerHTML = displayQuote;
  getRandomBackgroundColor();
  console.log(randomQuote);
}

window.setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
