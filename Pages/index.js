
/* Components */
import { navBarComponent } from "../Components/navBar.js"
import { cardComponent } from "../Components/cards.js"
import { cardHomeComponent } from "../Components/cardsHome.js"
import { cerrarSesion} from "./users/logout.js"


/* NavBar */
let navContainer = document.querySelector('header')

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navBarComponent
})


/* Cerrar Sesion */
cerrarSesion();


/* -----------------------Cards----------------------------- */
let cardContainerLibros = document.querySelector('#card-libros')
let cardContainerSeñaladores = document.querySelector('#card-señaladores')
let cardContainerFundas = document.querySelector('#card-fundas')

let cardHomeContainerLibros = document.querySelector('#cardHome-libros')
let cardHomeContainerSeñaladores = document.querySelector('#cardHome-señaladores')
let cardHomeContainerFundas = document.querySelector('#cardHome-fundas')

window.addEventListener('load', ()=>{
    
    fetch("../Components/productos.json").then(res => res.json()).then(dat => {
        
        //Secciones de Productos
        //Se encuentran dentro de if porque el codigo se cortaba cuando no encontraba uno de los id
        if(cardContainerLibros){
            cardContainerLibros.innerHTML = cardComponent(dat.cardsElementsLibros)
        }

        if(cardContainerSeñaladores){
            cardContainerSeñaladores.innerHTML = cardComponent(dat.cardsElementsSeñaladores)
        }

        if(cardContainerFundas){
            cardContainerFundas.innerHTML = cardComponent(dat.cardsElementsFundas)
        }

        //Productos en Home
        if(cardHomeContainerLibros){
            cardHomeContainerLibros.innerHTML = cardHomeComponent(dat.cardsElementsLibros.slice(0, 3))
        }

        if(cardHomeContainerSeñaladores){
            cardHomeContainerSeñaladores.innerHTML = cardHomeComponent(dat.cardsElementsSeñaladores.slice(0, 3))
        }

        if(cardHomeContainerFundas){
            cardHomeContainerFundas.innerHTML = cardHomeComponent(dat.cardsElementsFundas.slice(0, 3))
        }

    }).catch(error =>{
        console.log(error)
    })
})