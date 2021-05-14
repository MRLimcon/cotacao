export async function listarObjeto() {
    let url = 'https://api.coingecko.com/api/v3/coins/list?include_platform=false';
        let response = await fetch(url);
        let moedas = await response.json();
        let id = [];
        let name = [];
        let symbol = [];

        for (let i = 0; i < moedas.length; i++) {
            if (moedas[i].name.includes("Token") == false && moedas[i].name.includes("Index") == false
            && moedas[i].id.includes("token") == false && moedas[i].id.includes("index") == false) {
                id.push(moedas[i].id);
                name.push(moedas[i].name);
                symbol.push(moedas[i].symbol);
            }
        }

        moedas = {
            "id": id,
            "name": name, 
            "symbol": symbol 
        };
    
    return moedas;
};

export async function listarLista() {
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

export async function preco() {
    let moedaId = document.getElementById("idMoeda").value.replace(" ","");
    let moedaFinal = "brl";
    let urlInit = "https://api.coingecko.com/api/v3/simple/price?ids=";
    let urlFim = "&vs_currencies=";
    let url = urlInit+moedaId+urlFim+moedaFinal;
    let info;

    let resposta = await fetch(url);
    let preco = await resposta.json();

    for(info in preco) {
        if(preco.hasOwnProperty(info)) {
            var value = preco[info];
        }
    }

    for(info in value) {
        if(value.hasOwnProperty(info)) {
            var valueFim = value[info];
        }
    }

    return valueFim;
}

export async function formatGrafico() {
    let moedaId = document.getElementById("idMoeda").value.replace(" ","");
    let moedaFim = "brl";
    let urlInicio = "https://api.coingecko.com/api/v3/coins/";
    let urlMeio = "/market_chart?vs_currency=";
    let urlFim = "&days=";
    let configDias = document.getElementById("configDias").value.replace(" ","");
    let info;
    let historicoFormat = [];
    let data = new Date();
    let tempoFormatado = [];

    let resposta = await fetch(urlInicio+moedaId+urlMeio+moedaFim+urlFim+configDias);
    let historico = await resposta.json();

    for(info in historico) {
        if(historico.hasOwnProperty(info) && info == "prices") {
            historico = historico[info];
        }
    }

    for (let i = 0; i < historico.length; i++) {
        historicoFormat.push(historico[i][1]);
        data = new Date(historico[i][0]);
        tempoFormatado.push(data);
    }
    
    return [ tempoFormatado, historicoFormat ];
}
