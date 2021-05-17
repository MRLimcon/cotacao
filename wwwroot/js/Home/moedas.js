'use strict';

import { listarObjeto } from "../coinGeckoApi.js";
import { procurarMoeda } from "../tabelas.js";
import { gerarTabela } from "../tabelas.js";

async function init() {
    var moedas = await listarObjeto();
    console.log(moedas);
    document.getElementById('tabela aqui').innerHTML = gerarTabela(moedas);
}

document.getElementById("botaoSubmit").addEventListener('click', init);
