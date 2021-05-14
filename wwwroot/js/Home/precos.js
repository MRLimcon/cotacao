'use strict';

import { preco } from "../coinGeckoApi.js";

async function init() {
    var valor = await preco();
    document.getElementById("preco aqui").innerHTML = "O preco da moeda, em reais, é: "+ valor;
}

document.getElementById("botaoSubmit").addEventListener('click', init);