const quoteTag = document.querySelector('h1')

let data = []

let randomQuote;


fetch('https://api.superhi.com/api/test/quotes/')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData
        getQuote()
    })

const getQuote = function () {

    if (data.length > 0) {
        const randomNumber = Math.floor(Math.random() * data.length)
        const randomQuote = data[randomNumber]
    }

    quoteTag.innerHTML = randomQuote.quote;
}