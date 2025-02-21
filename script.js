const form = document.querySelector("#form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste"/>'

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.querySelector("#nome-atividade");
    const inputNotaAtividade = document.querySelector("#nota-atividade");
    const corpoTabela = document.querySelector("tbody");
    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    corpoTabela.innerHTML += linha;
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
});