const quoteTag = document.querySelector(".quote");
const authorTag = document.querySelector(".author");
const reloadButton = document.querySelector(".reload");

let data = [];

let randomQuote;

const getQuote = function () {
  if (data.length > 0) {
    const randomNumber = Math.floor(Math.random() * data.length);
    randomQuote = data[randomNumber];
  }

  quoteTag.innerHTML = randomQuote.quote;
  authorTag.innerHTML = randomQuote.author;
};

fetch("https://api.superhi.com/api/test/quotes/")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
    getQuote();
  });

function handleClick() {
  getQuote();
}

reloadButton.addEventListener("click", handleClick);
