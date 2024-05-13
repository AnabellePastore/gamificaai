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