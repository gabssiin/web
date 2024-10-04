var nome = window.prompt('Quem é você?');
//window.alert('Seja bem-vindo(a): '+nome); 
document.write(`Olá ${nome}, Seu nome tem ${nome.length} letras`); // escreve no documento html
//window.confirm('QUER CONFIRMAÇÃO "OK OU CANCEL" ')
//window.prompt('serve para fazer uma pergunta')
/*
var n1 = Number.parseInt(window.prompt('Escolha um número: ')); 
//podemos usar apenas Number para converter str em apenas numeros
var n2 = Number.parseFloat(window.prompt('Escolha outro número:'));
var n3 = Number(window.prompt("Escolha mais um número: "));
var s = n1+n2+n3;
window.alert(`A soma entre ${n1} e ${n2} e ${n3} é: ${s}`)
FORMATANDO NUMEROS:
var n1 = 1773.5
se eu quiser duas casas decimais após o ponto eu posso usar: n1.toFixed(2)
e se eu quiser trocar os pontos flutuantes por virgulas:n1.toFixed(2).replace('.',',')
se eu quiser usar a moeda real: n1.toLocaleString('pt-BR'), {style'currency',currency:'BRL})
*/
// se eu quiser transformar número em string posso usar: String(n) ou n.toString()
/*
Formatando strings:
var s = 'JavaScript' 
'Estou aprendendo' + s;
Temos uma forma melhor templates strings:
`Estou aprendendo ${s}`f
s.length // lê quantos carac a string tem
s.toUpperCase() // coloca todos os carac em caixa alta
s.toLowerCase()// coloca tudo em caixa baixa
*/


 /* ESTRUTURA switch PARA CONDIÇÕES MULTIPLAS 
 podemos abrir varias possibilidades dentro de cada case mas para funcionar bem precisamos usar o break*
 
 */
switch (){

}