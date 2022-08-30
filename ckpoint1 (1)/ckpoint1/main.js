
let titulo = document.getElementById('titulo')
let descricao = document.getElementById('descricao')
let urlImagem = document.getElementById('urlImagem')
let destinos = document.getElementById('destinos')
let divgaleria = document.getElementById("galeria")
let destino = document.getElementById("destino")
let descricao1 = document.getElementById("descricao1")


function clicar(){
    let img = document.createElement('img')
    img.src = urlImagem.value
    divgaleria.appendChild(img)
    
}


function clicar2(){
   destino.innerHTML = titulo.value
}

function clicar3(){
    descricao1.innerHTML = descricao.value
 }