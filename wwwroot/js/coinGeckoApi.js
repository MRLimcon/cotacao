export async function init() {
    let url = 'https://api.coingecko.com/api/v3/coins/list?include_platform=false';
    let response = await fetch(url);
    let moedas = await response.json();
    let coins = [];

    for (let i = 0; i < moedas.length; i++) {
        if (moedas[i].name.includes("Token") == false && moedas[i].name.includes("Index") == false
        && moedas[i].id.includes("token") == false && moedas[i].id.includes("index") == false) {
            coins.push({
                id: moedas[i].id,
                name: moedas[i].name,
                symbol: moedas[i].symbol
            })
        }
    }
    
    return coins;
};
