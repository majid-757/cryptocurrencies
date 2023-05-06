class CryptoAPI {

    constructor() {
        this.apiKey = '112f189ffe9e2f216e6453be5727b991'
    }
    // query the api
    async queryAPI(currency, cryptocurrency) {
        const url = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}&ids=${cryptocurrency}&interval=1h,1d,7d,30d&convert=${currency}`

        // fetch url
        const response = await fetch(url)

        // get json method
        const resultAPI = await response.json() 

        return {
            resultAPI
        }
    }
}

