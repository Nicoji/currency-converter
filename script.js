// DOM's elements : 
const amount = document.querySelector('.amount');
const initCurrency = document.querySelector('.init-currency');
const convertCurrency = document.querySelector('.currency-convert');
const button = document.querySelector('.btn');
const convertedNumber = document.querySelector('.result');

// Variables : 
let rate; 
let result;
console.log(amount.value);

// Function : 
const convert = () => {
    event.preventDefault();

    if(!amount.value) {
        return;
    }

    let from = initCurrency.value;
    let to = convertCurrency.value;    

    fetch("https://currencydatafeed.com/api/data.php?token=x6zz3lv6vdaon7nw1gpt&currency=" + from + "/" + to)
        .then(reponse => reponse.json())
        .then(data => {
            rate = data['currency'][0]['value'];
            result = (amount.value * rate); 
            roundNumber = result * 100;
            result = Math.round(roundNumber) / 100;
            convertedNumber.textContent = result + " " + to;
        });    
}

// Event : 
button.addEventListener('click', convert);