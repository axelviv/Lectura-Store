
const url = 'http://127.0.0.1:5500/'

const navElements = [
    {title:'Home', link:`${url}pages/home.html`},
    {title:'Libros', link:`${url}pages/libros.html`},
    {title:'Señaladores', link:`${url}pages/señaladores.html`},
    {title:'Fundas', link:`${url}pages/fundas.html`},
]

const navElements2 = [
    {title:'Ingresar', link:`${url}pages/users/login.html`, id: 'login-link'},
    {title:'Registrarse', link:`${url}pages/users/register.html`, id: 'register-link'},
    {title:'', link:`${url}pages/compras/carrito.html`, icon: 'bi-cart4', id: 'cart-link'},
]


export const navBarComponent = `
    <nav class="navbar navbar-expand-md bg-light-subtle border-bottom border-secondary-subtle">
                <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/Pages/home.html"><img src="/Assets/Lectura STOREs.svg" width="200" alt="Logo de la página web"></a>
                <div class="collapse navbar-collapse" id="navbar-toggler">
                    <ul class="navbar-nav ms-auto d-flex justify-content-center align-items-center">                                                        
                        ${
                          navElements.map(e =>{
                            return `
                                <li class="nav-item">
                                    <a class="nav-link" id="menu" href="${e.link}">${e.title}</a>
                                </li>
                            `
                          }).join('')  
                        }
                    </ul>
                    <ul class="navbar-nav ms-auto d-flex justify-content-center align-items-center">                 
                    ${
                        navElements2.map(e =>{
                          return `
                              <li class="nav-item menuRegisterLogin">
                                  <a class="nav-link" id="${e.id}" href="${e.link}">${e.title} <i class="bi ${e.icon}"></i></a>
                                  
                              </li>
                          `
                        }).join('')  
                      }
                      
                        <li class="nav-item">
                        <!-- Mensaje de bienvenida -->
                        <span id="bienvenida" class="nav-link"></span>
                        </li>
                        <li class="nav-item">
                            <button id="logout" type="submit" class="btn btn-secondary" style="display: none;">Cerrar Sesión</button>
                        </li>
                    </ul>                
                </div>
                </div>
            </nav>
          `