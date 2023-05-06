// classes
const ui = new UI();
const crypto = new CryptoAPI();




// variables
const form = document.querySelector('#form');








// eventslisteners
eventlisteners()
function eventlisteners() {
    form.addEventListener('submit', getValueation)
}








// functions
// get values from api
function getValueation(e) {
    e.preventDefault();
    const currency = document.querySelector('#currency').value;
    const cryptocurrency = document.querySelector('#cryptocurrency').value;

    if (currency === '' || cryptocurrency === '') {
        ui.printMessage('All the fields need to complete', 'deep-orange darken-4 card-panel')
    } else {
        crypto.queryAPI(currency, cryptocurrency)
        .then(data => ui.createTemplate(data.resultAPI[0]), currency)
    }
}







