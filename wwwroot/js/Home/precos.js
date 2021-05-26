'use strict';

import { preco } from "../coinGeckoApi.js";
import { formatGrafico } from "../coinGeckoApi.js";

async function init() {
    var valor = await preco();
    document.getElementById("preco aqui").innerHTML = "O preco de hoje da moeda, em reais, é: "+ valor;
    var historico = await formatGrafico();
    let localGrafico = document.getElementById("grafico aqui");
    let traco = {
        x: historico[1],
        y: historico[0],
        mode: 'lines'
    }
    Plotly.newPlot( localGrafico, [traco] );
}

document.getElementById("botaoSubmit").addEventListener('click', init);