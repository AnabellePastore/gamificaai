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

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=14",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionário devem propor e implementar ideias inovadoras "
    },

    {
        imagem: "https://unsplash.it/600/400?image=15",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu program de treinamento"
    },

    {
        imagem: "https://unsplash.it/600/400?image=16",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking "
    },

    {
        imagem: "https://unsplash.it/600/400?image=17",
        descricao: "Uma empresa de saúde promove o bem estar dos funcionários atravéz de um desafio de gamificação de condicionamento físico "
    },
]





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