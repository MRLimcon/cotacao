'use strict'

import { init } from "../coinGeckoApi.js";

$(async () => {
    var moedas = await init();
    const selectMoedas = $("#moedas");
    moedas.forEach((moeda) => {
        selectMoedas.append(`<option value="${ moeda.id }">${ moeda.name }</option>`)
    })

    console.log(moedas);
})