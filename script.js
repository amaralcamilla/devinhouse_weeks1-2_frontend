/* QUESTÃO 6 A 11 - OK
alert('Esta é a questão 6!')
confirm('Deseja continuar?')
var nome = prompt('Qual é o seu nome?')
alert('Seja bem vindo(a), '+ nome + '!')
var idade = Number.parseInt(prompt('Qual é a sua idade?'))
var esporte = confirm('Você gosta de praticar algum esporte?')
esporte.toBoolean()

console.log(`Nome: ${nome}. Idade: ${idade}. Gosta de esporte? ${esporte}`)

var sobrenome = prompt('Qual é o seu sobrenome?')
var nome2 = prompt('Qual é o seu nome?')
alert(`Seu nome completo é ${nome2} ${sobrenome}`)

var ano = Number(prompt('Em que ano você nasceu?'))
var idade2 = 2020 - ano
var idade3 = 2021 - ano
alert(`Sua idade é ${idade2} ou ${idade3} anos.`)

*/
/*QUESTÃO 12
let tipo = prompt('Qual cálculo você deseja fazer? Digite + para somar, - para subtrair, * para multiplicar ou / para dividir:')
let num1 = parseFloat(prompt('Digite o primeiro número:'))
let num2 = parseFloat(prompt('Digite o segundo número:'))
if (tipo == '+'){
    alert(num1 + num2)
} else if (tipo == '-'){
    alert(num1 - num2)
} else if (tipo == '*'){
    alert(num1 * num2)
}else if (tipo == '/'){
    alert(num1 / num2)
}else{
    alert('[ERRO] Insira um operador ou número válido.')
}
*/

/* QUESTÃO 13 - OK
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
alert(`Acesso em ${hora}:${min}.`)
*/

/*QUESTÃO 14
var val = parseInt(prompt('Digite o valor inicial:'))
var raiz = parseInt(prompt('Digite um valor para raiz:'))

function calcular(x,y) {
    for (let n = 1; n<=10; n++) {
        alert(n + ' = ' + x)
        x += y
    }
}
calcular(val, raiz)
*/

/* QUESTÃO 15 - OK
var sobrenome = prompt('Qual é o seu último sobrenome?')
alert(`Olá, ${sobrenome}. Seu sobrenome tem ${sobrenome.length} letras.`)
*/