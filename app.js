var baseUrl = "https://api.coinranking.com/v2/coins  "
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apikey = "coinrankingc3ac6551638faeebbe7ba2474b85fe7df13f76fa26294e2b"

fetch(`${proxyUrl}${baseUrl}`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${apikey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if (response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins);
            
            let coinsData = json.data.coins

            if (coinsData.length > 0) {
                var cryptoCoins = ""

            }

            //for loop starts

            coinsData.forEach((coin) => {
               cryptoCoins += "<tr>"
               cryptoCoins += `<td> ${coin.uuid} </td>`; 
               cryptoCoins += `<td> ${"$" + "" + coin.btcPrice} </td>`; 
               cryptoCoins += `<td> ${coin.rank} </td>`; 
               cryptoCoins += `<td> ${coin.tier} </td>`; 
               cryptoCoins += `<td> ${coin.name} </td>`; 
               cryptoCoins += `<td> ${Math.round("$" + "" +  coin.price)} Dollars </td>`; 
               cryptoCoins += `<td> ${coin.symbol} </td>`;"<tr>"; 
            });

            document.getElementById("data").innerHTML = cryptoCoins
        })
    }
}).catch((error) => {
    console.log(error);
})



function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".username-msg");

    messageElement.textContent = message;
    messageElement.classList.remove("username-msg-Success", "username-msg-Error");
    messageElement.classList.add(`username-msg-${type}`);
}

const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    
    setFormMessage(loginForm, "Error", "Invalid username/password combination.")
})


