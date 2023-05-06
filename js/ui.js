class UI {

    // print all messages need to show
    printMessage(message, className) {
         // create div
        const div = document.createElement('div');

        // append class list to div
        div.className = className;
        // append message to div
        div.appendChild(document.createTextNode(message));
        // access to the div that want to show message card
        const result = document.querySelector('.messages')
        // append div to result
        result.appendChild(div);

        // remove message after 30 second
        this.removeMessage();
    }


    removeMessage() {
        setTimeout(() => {
            // 
            document.querySelector('.messages div').remove()
        }, 3000);
    }



    // showing results of api
    createTemplate(result, currency) {

        // check if exist previous result then need to remove first
        const prevResult = document.querySelector('#result > div')
        if (prevResult) {
            prevResult.remove()
        }

        let currencyName;
        if (currency =='USD') {
            currencyName = 'Dollor';
        }

        if (currency =='GBP') {
            currencyName = 'Pound';
        }

        if (currency =='EUR') {
            currencyName = 'Euro';
        }


        // create template for show
        let HTMLTemplate = `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <h4 class="card-title">Result</h4>
                    <img style="width: 50px" src="${result.logo_url}">
                    <p>The price of ${result.name} from ${currencyName} is: ${result.price}</p>
                    <p>last Hour: ${result["1h"].price_change}</p>
                    <p>last Day: ${result["1d"].price_change}</p>
                    <p>last Week: ${result["7d"].price_change}</p>
                    <p>last Month: ${result["30d"].price_change}</p>
                </div>
            </div>
        
        `
        // showing spinner for 2 second
        this.showSpinner()
        // show the result after spinner
        this.showResult(HTMLTemplate)
    }

    // show spinner before showing the result
    showSpinner() {
        const spinnerGif = document.createElement('img');
        spinnerGif.src = '../img/spinner.gif';
        // append spinner to html
        document.querySelector('.spinner').appendChild(spinnerGif);

    }

    // showing the result of api
    showResult(HTMLTemplate) {
        setTimeout(() => {
            document.querySelector('.spinner img').remove()

            // access to the result tag
            const resultDiv = document.querySelector('#result')
            // append to the result div
            resultDiv.innerHTML = HTMLTemplate
        }, 2000);
    }

}

