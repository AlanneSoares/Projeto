/* Para exibir no console...

console.log("Fui carregado!");

*/

/* Variável...

var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

*/


/* Para declarar uma variável e exibir em pop up

var mensagem = "Sejam Bem - Vindos!";
alert(mensagem);

*/


/* Selecionar um dado...

var paciente = document.querySelector("#primeiro-paciente");

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(altura);

var tdImc = paciente.querySelector(".info-imc");
var IMC = peso / (altura * altura);


tdImc.textContent;

*/




























/* Exercício 01: Exiba o menu com Prato do Dia para Sexta da seguinte forma:

    <table>
    <thead>
        <th>Salada</th>
        <th>Prato Principal</th>
        <th>Acompanhamento</th>
    <thead>
    <tbody>
        <tr class="prato-do-dia" id="segunda">
            <td class='salada'>Alface e Tomate</td>
            <td class='principal'>Frango Grelhado</td>
            <td class='acompanhamento'>Arroz e Feijão preto</td>
        </tr>
        ...Outros dias da semana
        <tr class="prato-do-dia" id="sexta">
            <td class='salada'>Salada de Batata</td>
            <td class='principal'>Macarrão com molho branco</td>
            <td class='acompanhamento'>Milho, ervilha e brócolis</td>
        </tr>
    </tbody>


var pratoDoDia = document.querySelector("#sexta");
var salada = pratoDoDia.querySelector(".salada").textContent;
var principal = pratoDoDia.querySelector(".principal").textContent;
var acompanhamento = pratoDoDia.querySelector(".acompanhamento").textContent;

console.log("Prato do dia!");
console.log(salada);
console.log(principal);
console.log(acompanhamento);

Resolvido
*/