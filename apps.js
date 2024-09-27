var a = document.getElementById('area')
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)


function clicar(){ var a = document.getElementById('area')
a.innerText='Clicou!'
a.style.background= 'red'

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
   var n1= Number(t1.value)
   var n2= Number(t2.value)
   var s = n1 + n2
  
}