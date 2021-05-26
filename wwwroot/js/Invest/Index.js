'use strict'

import { precoSimples } from "../coinGeckoApi.js";
import { precoCompra } from "../coinGeckoApi.js";
import { retorno } from "../coinGeckoApi.js";

async function escreverTabela() {
    let input = document.getElementById("pesquisaMoeda");
    let tableId = document.getElementsByTagName("tbody");
    let tr = document.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let quantidade = tr[i].getElementsByTagName("td")[2].innerHTML.replaceAll(" ","");
        let data = tr[i].getElementsByTagName("td")[1].innerHTML.replaceAll(" ","").substring(0,11);
        let idMoeda = tr[i].getElementsByTagName("td")[3].innerHTML.replaceAll(" ","");
        let placeholder = tr[i].getElementsByTagName("td")[5];
        var textoPlaceholder = await retorno(String(idMoeda),data,Number(quantidade));
        placeholder.innerHTML = String(textoPlaceholder).substring(0,5);
    }
}

escreverTabela();