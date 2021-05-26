'use strict'

import { listarLista, precoSimples } from "../coinGeckoApi.js";

$(async () => {
    var moedas = await listarLista();
    const selectMoedas = $("#moedas");
    moedas.forEach((moeda) => {
        selectMoedas.append(`<option value="${ moeda.id }">${ moeda.name }</option>`)
    })

    console.log(moedas);

    document.getElementById("moedas").addEventListener('change', async () => {
        document.getElementById("unitPrice").value = await precoSimples(document.getElementById("moedas").value);
        console.log(document.getElementById("unitPrice").value);
    });

    document.getElementById("amount").addEventListener('change', async () => {
        document.getElementById("relativePrice").value = document.getElementById("amount").value * document.getElementById("unitPrice").value;
        console.log(document.getElementById("relativePrice").value);
    });
});