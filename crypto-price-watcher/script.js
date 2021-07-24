fetchBtc();
fetchDoge();
fetchEth();
fetchXrp();

async function fetchData() {}

async function fetchBtc() {
    let response = await fetch(
        "https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
            headers: {
                "X-Coinapi-Key": "4564B6D2-3BB3-46E1-80F1-9FBD2C18F78F",
            },
        }
    );
    if (response.ok) {
        // if https-status is 200-299
        // get the response body (the method explained below)
        let data = await response.json();
        let price = data.rate.toFixed(2);
        document.getElementById("btc-loader").style.display = "none";
        document.getElementById("btc-live").style.display = "block";
        document.getElementById("btc-live").textContent = "$" + price;
    } else {
        return 0;
    }
}
async function fetchEth() {
    let response = await fetch(
        "https://rest.coinapi.io/v1/exchangerate/ETH/USD", {
            headers: {
                "X-Coinapi-Key": "4564B6D2-3BB3-46E1-80F1-9FBD2C18F78F",
            },
        }
    );
    if (response.ok) {
        // if https-status is 200-299
        // get the response body (the method explained below)
        let data = await response.json();
        let price = data.rate.toFixed(2);
        document.getElementById("eth-loader").style.display = "none";
        document.getElementById("eth-live").style.display = "block";
        document.getElementById("eth-live").textContent = "$" + price;
    } else {
        return 0;
    }
}
async function fetchDoge() {
    let response = await fetch(
        "https://rest.coinapi.io/v1/exchangerate/DOGE/USD", {
            headers: {
                "X-Coinapi-Key": "4564B6D2-3BB3-46E1-80F1-9FBD2C18F78F",
            },
        }
    );
    if (response.ok) {
        // if https-status is 200-299
        // get the response body (the method explained below)
        let data = await response.json();
        let price = data.rate.toFixed(2);
        document.getElementById("doge-loader").style.display = "none";
        document.getElementById("doge-live").style.display = "block";
        document.getElementById("doge-live").textContent = "$" + price;
    } else {
        return 0;
    }
}
async function fetchXrp() {
    let response = await fetch(
        "https://rest.coinapi.io/v1/exchangerate/XRP/USD", {
            headers: {
                "X-Coinapi-Key": "4564B6D2-3BB3-46E1-80F1-9FBD2C18F78F",
            },
        }
    );
    if (response.ok) {
        // if https-status is 200-299
        // get the response body (the method explained below)
        let data = await response.json();
        let price = data.rate.toFixed(2);
        document.getElementById("xrp-loader").style.display = "none";
        document.getElementById("xrp-live").style.display = "block";
        document.getElementById("xrp-live").textContent = "$" + price;
    } else {
        return 0;
    }
}