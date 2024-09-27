var a = document.getElementById('area')
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)


function clicar(){ var a = document.getElementById('area')
a.innerText='Clicou!'
a.style.background= ' rgb(70, 121, 100)'

}
function entrar(){var a = document.getElementById('area')
a.innerText='entrou'
}
function sair(){var a = document.getElementById('area')
    a.innerText='saiu'
}
9

function soma(){
    var t1 = document.getElementById('txtn1')
   var t2 = document.querySelector('input#txtn2')
   var res=document.getElementById('res')
   var n1= Number(t1.value)
   var n2= Number(t2.value)
   var s = n1 + n2
   res.innerHTML= `O resultado de ${n1} + ${n2} é igual a <strong> ${s} </strong>`
  
}