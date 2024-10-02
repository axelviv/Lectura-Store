
export const cardComponent = (cardsElements) => `
    ${
        cardsElements.map(e =>{
          return `
            <div class="col-md-3 mb-4 mt-4 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="${e.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-center text-center">${e.title}</h5>
                        <p class="card-text" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; height: 4.5em; font-style: italic;">${e.description}</p>
                        <hr>
                        <div class="d-flex align-items-center">
                            <h4 class="card-title mb-0 me-5 ms-2">${e.price}</h4>
                            <input type="number" min="0" max="5" value="0"  style="width: 100%;" class="form-control">
                        </div>
                        <a href="#" class="btn btn-secondary mt-3 d-flex justify-content-center align-items-center" style="width: 100%; height: 3rem;">Comprar</a>
                    </div>
                </div>
            </div>
          `
        }).join('')  
      }    
      `

