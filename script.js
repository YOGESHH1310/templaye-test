const main = document.getElementById('quote-main');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const quoteInsta = document.getElementById('insta');
const quoteNew = document.getElementById('new-quote');


let quote = [];

function apiquote() {
    const text = quote[Math.floor(Math.random() * quote.length)];
    quoteAuthor.textContent = text.author;
    quoteText.textContent = text.quote
}
async function getquote() {
    const apiurl = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    try {
        const res = await fetch(apiurl);
        quote = await res.json();
        quote = quote.quotes;
        // console.log(quote);
        apiquote();
    } catch (error) {
        
    }
}


function instaPost() {
    const instaUrl = 'https://www.instagram.com/';
    window.open(instaUrl,'_blank');
}

// function instaNew() {
//     const instaNew = 'https://www.instagram.com/accounts/emailsignup/';
//     window.open(instaNew,'_blank');
// }

//EventListener
insta.addEventListener('click',instaPost);
newquote.addEventListener('click',apiquote);

getquote() 