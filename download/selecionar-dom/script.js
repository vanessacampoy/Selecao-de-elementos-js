const animais = document.getElementById("animais")
console.log(animais.innerText)

const contato = document.getElementById("contato")
console.log(contato.innerText)

//Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section")
console.log(gridSection)


//Seleciona todas as UL´s, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul")
console.log(ul)

//Retorna o primeiro elemento
console.log(gridSection[0])

//querySelector
const mapa = document.querySelector(".mapa")
console.log(mapa)

//seleciona o último item da lista
const ultimoItem = document.querySelector(".animais-lista li:last-child")
console.log(ultimoItem)

const paragrafo = document.querySelectorAll("p")
console.log(paragrafo)

const animalTag = document.querySelectorAll(".animais img")
console.log(animalTag)//seleciona todas as imagens

const animaisTag = document.querySelectorAll(".animais img")
console.log(animaisTag[3])//colocando o indíce ele retorna apenas a imagem selecionada


//retornar todas as imagens do site
const imagens = document.querySelectorAll("img")
console.log(imagens)

//retornar apenas as imagens que comecarem com a palavra imagem
const imagemPalavra = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagemPalavra)

//selecionar os links internos onde o href começa com #
const href = document.querySelectorAll('[href^="#"]')
console.log(href)

const faq = document.querySelectorAll('[href="#faq"]')
console.log(faq)

//selecionar o primeiro h2 dentro de animal descrição
const animalDescricao = document.querySelector("h2")
console.log(animalDescricao)

//selecionar o último p do site
const ultimoPar = document.querySelectorAll("p")
console.log(ultimoPar)

console.log(ultimoPar[ultimoPar.length -1])
console.log(ultimoPar[ultimoPar.length -14])




