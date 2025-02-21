const form = document.querySelector("#form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`
const mediaNota = parseFloat(prompt('Digite a nota média:'))
let linhas = "";

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.querySelector("#nome-atividade");
    const inputNotaAtividade = document.querySelector("#nota-atividade");

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= mediaNota ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
};

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return media = somaDasNotas / notas.length;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    
    document.querySelector('#media-final-valor').innerHTML = mediaFinal
    document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= mediaNota ? spanAprovado : spanReprovado
}