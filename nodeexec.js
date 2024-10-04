/*
console.log('O console funcionou!') //para escrever na tela 
var vel = 60.6
console.log(`A velocidade do seu carro = ${vel}km/h`)
if(vel>70){
    console.log(`Você ultrapassou o limite de velocidade ${vel}, MULTADO!`)
} else {
    console.log('Tudo bem pode ir viajandão hein!')
}
console.log('Se beber não dirija!')*/ 


var agora = new Date;
var hora = agora.getHours;
if(hora<12){
    console.log('Bom dia!')
} else if (hora <=18){
    console.log('Boa tarde!')

}else{
    console.log('boa noite!')
}
