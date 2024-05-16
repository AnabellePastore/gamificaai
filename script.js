let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")


function abrirFecharMenu(){
    //se o menu está fechado
    if(menu.classList.contains("menu-fechado")){
        //abrir menu
        menu.classList.remove("menu-fechado")

        //mostrar icone X
        iconeX.style.display = "inline"
        //esconder icone barras
        iconeBarras.style.display = "none"

    }else{
        //fechar menu
        menu.classList.add("menu-fechado")
         //esconder icone x
         iconeX.style.display = "none"
         //mostrar icone barras
         iconeBarras.style.display = "inline"
    }
       

}

//função carrosel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]
let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    //remove o slide anterior
    banner.classList.remove(slides[slideAtual])

    //numeroSlides = 3
    //numero Slides -1 -> 2
    //estou no ultimo? 2


        if(slideAtual < numeroSlides -1){
            slideAtual ++
        }else{
            slideAtual = 0
        }



    //rendiriza o slideAtual
    banner.classList.add(slides[slideAtual])

}

const mostrarSlideAnterior = () => {
    banner.classList.remove(slides[slideAtual])

    if(slideAtual > 0){
        slideAtual--
    } else{
        slideAtual = numeroSlides - 1
    }

   

    banner.classList.add(slides[slideAtual])


}

const selecionarSlide = () => {
slides.forEach( slide => banner.classList.remove(slide))

slideAtual = indiceSlide

banner.classList.add(slide[indiceSlide])

}

let listaCases = []





const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    //template strings
    let template = ""

    listaCases.forEach( cardCase => {
        template += `<div class="card">
        <img src="${cardCase.imagem}" alt="">
        <p> ${cardCase.descricao}</p>
        <button>Ver mais</button>
    </div>`
    })

    elementoLista.innerHTML = template
}

const carregarCases = () =>{
    fetch("http://localhost:3000/cases")

    .then( resposta => resposta.json() )
    .then((dados) => {
       listaCases = dados

       renderizarCases()
    })
//=> outro jeito de representar função
    .catch (erro => console.error(error))
}

const solicitarOrcamento = () => {
    //pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    
    let valorEmail = document.getElementById("campo-email").value
   
    let valorDescricao = document.getElementById("campo-descricao").value

    //organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    //enviar requisição para a api
    //127.0.0.1 -> localhost
    //método HTTP POST - Crate -> cadastrar ou criar
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        }

    })
    

    //limpar os campos
    //mostrar alert com mensagem de sucesoo
    //CASO ERRO - alert com mensagem erro
}