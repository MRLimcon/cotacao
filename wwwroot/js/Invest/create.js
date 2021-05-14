'use strict'

import { listarLista } from "../coinGeckoApi.js";

$(async () => {
    var moedas = await listarLista();
    const selectMoedas = $("#moedas");
    moedas.forEach((moeda) => {
        selectMoedas.append(`<option value="${ moeda.id }">${ moeda.name }</option>`)
    })

    console.log(moedas);
})
