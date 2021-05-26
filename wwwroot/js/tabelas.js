export function procurarMoeda() {
    let input = document.getElementById("pesquisaMoeda");
    let tableId = document.getElementById("tabela aqui");
    let tr = tableId.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            let txtValue = td.innerText;
            if (txtValue.toUpperCase().includes(input.value.toUpperCase()) == true) {
                tr[i].setAttribute("style", "display:");
            } else {
                tr[i].setAttribute("style", "display: none !important;");
            }
        }
    }
}

export function gerarTabela(moedas) {
    var pesquisa = '<input class="form-control" type="text" id="pesquisaMoeda" placeholder="Nome da moeda"> \n'
    var nLinhas = moedas.id.length;
    var inicio = '<table class="table">';
    var fim = '</table>';
    var conteudo = '';
    var cabecalho =  '<thead> <tr> <th>'+' Id da moeda '+'</th> <th>'+' Nome da moeda '+'</th> <th>'+' Simbolo da moeda '+'</th> </tr> </thead>'+'\n';

    pesquisa += '<button class="btn btn-primary" id="searchButton" onclick="procurarMoeda()" type="button">Clique para pesquisar</button> \n';

    for (let i = 0; i < nLinhas; i++) {
        conteudo += '<tr>';
        conteudo += '<td> ' + moedas.id[i] + ' </td>';
        conteudo += '<td> ' + moedas.name[i] + ' </td>';
        conteudo += '<td> ' + moedas.symbol[i] + ' </td>';
        conteudo += '</tr>\n';
    }

    return pesquisa + inicio + cabecalho + conteudo + fim;
}
