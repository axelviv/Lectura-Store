const url = 'http://127.0.0.1:5500/'

export const cardHomeComponent = (cardsElements) => `
    ${
        cardsElements.map(e =>{
          return `
            <div class="col-md-2 mb-4 mt-0 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="${url}${e.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-center text-center">${e.title}</h5>
                        <div class="d-flex justify-content-center">
                            <h5 class="card-title mb-0 me-5 ms-2">${e.price}</h5>                            
                        </div>
                        <a href="#" class="btn btn-secondary mt-3 d-flex justify-content-center align-items-center" style="width: 100%; height: 3rem;">Comprar</a>
                    </div>
                </div>
            </div>
          `
        }).join('')  
      }    
      `
