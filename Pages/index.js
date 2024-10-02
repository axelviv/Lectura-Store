
/* Components */
import { navBarComponent } from "../Components/navBar.js"
import { cardComponent } from "../Components/cards.js"
import { cardsElementsLibros } from "../Components/cardsElementsLibros.js"
import { cardsElementsSeñaladores } from "../Components/cardsElementsSeñaladores.js"
import { cardsElementsFundas } from "../Components/cardsElementsFundas.js"
import { cerrarSesion} from "./users/logout.js"

/* NavBar */
let navContainer = document.querySelector('header')

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navBarComponent
})

/* Cerrar Sesion */
cerrarSesion();

/* -----------------------Cards----------------------------- */

/* Libros */
let cardContainerLibros = document.querySelector('#card-libros')

window.addEventListener('load', ()=>{
    cardContainerLibros.innerHTML = cardComponent(cardsElementsLibros)
})

/* Señaladores */
let cardContainerSeñaladores = document.querySelector('#card-señaladores')

window.addEventListener('load', ()=>{
    cardContainerSeñaladores.innerHTML = cardComponent(cardsElementsSeñaladores)
})

/* Fundas */
let cardContainerFundas = document.querySelector('#card-fundas')

window.addEventListener('load', ()=>{
    cardContainerFundas.innerHTML = cardComponent(cardsElementsFundas)
})


