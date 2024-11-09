
/* Components */
import { navBarComponent } from "../Components/navBar.js"
import { cardComponent } from "../Components/cards.js"
import { cardHomeComponent } from "../Components/cardsHome.js"
import { cerrarSesion} from "./users/logout.js"


/* NavBar */
let navContainer = document.querySelector('header')

window.addEventListener('load', ()=>{

    navContainer.innerHTML = navBarComponent


    /* -----------------------Bienvenida al user----------------------------- */  
    // Recuperar el usuario logueado desde sessionStorage
    const logueado = JSON.parse(sessionStorage.getItem('usuarioLogueado'));

    // Para seleccionar los enlaces del navbar y el boton de cerrar sesion
    const loginLink = document.getElementById('login-link'); // Enlace de "Ingresar"
    const registerLink = document.getElementById('register-link'); // Enlace de "Registrarse"
    const botonLogout = document.getElementById('logout'); // Botón de "Cerrar Sesión"

    if (logueado) {    

        const mensajeBienvenida = document.getElementById('bienvenida');
        // Mostrar mensaje de bienvenida en el navbar
        if (mensajeBienvenida) {
            mensajeBienvenida.textContent = `Bienvenido, ${logueado.nombre}`;
        }

        // Ocultar los enlaces en el navbar
        if (loginLink) {
            loginLink.style.display = 'none';
        } 
        
        if (registerLink) {
            registerLink.style.display = 'none'; 
        } 

        // Mostrar el boton de Cerrar Sesion en el navbar
        if (botonLogout) {
            botonLogout.style.display = 'inline-block';
        }   

    } else {

        console.log('No hay ningún usuario logueado.');    
    }

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
    
    fetch("/Components/productos.json").then(res => res.json()).then(dat => {
        
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





