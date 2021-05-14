'use strict';

import { listarObjeto } from "../coinGeckoApi.js";
import { gerarTabela } from "../tabelas.js";
import { procurarMoeda } from "../tabelas.js";

async function init() {
    var moedas = await listarObjeto();
    console.log(moedas);
    document.getElementById('tabela aqui').innerHTML = gerarTabela(moedas);
}

document.getElementById("botaoSubmit").addEventListener('click', init);
