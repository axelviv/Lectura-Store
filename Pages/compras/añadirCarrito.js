

//domcontentloaded y settimeout 500 para que cargue todas los elementos de las cards en el html antes de empezar a buscar los elementos
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        
        //Selecciona todos los botones con la clase btn-añadir
        const botones = document.querySelectorAll('.btn-añadir');        

        //Le agrego un botoneventlistener_click para cada uno de los botones y obtengo la card que pertenece a cada uno con closest
        botones.forEach(boton => {
            boton.addEventListener('click', function (evento) {
                const card = evento.target.closest('.card');
                
                // Obtengo los valores del producto que necesito desde la card del boton especifico que obtuve con closest
                const nombre = card.querySelector('.nombreProducto') ? card.querySelector('.nombreProducto').textContent.trim() : 'Producto desconocido';
                const precio = card.querySelector('.precioProducto') ? parseFloat(card.querySelector('.precioProducto').textContent.replace('$', '').trim()) : 0;

                // Crear un objeto con los datos del producto
                const producto = {
                    nombre,
                    precio
                };

                // Agregar el producto al carrito llamando a la funcion agregarAlCarrito() y pasandole el objeto como parametro
                agregarAlCarrito(producto);
            });
        });
    }, 500); // Retrasamos la ejecución para asegurar que los botones estén en el DOM
});

// Función para agregar el producto al carrito
function agregarAlCarrito(prod) {

    //Guardo el array del carrito del localstorage y si no existe lo guardo como un array vacio
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Busco si el producto ya está en el carrito, si no lo encuentra findindex devuelve -1
    const indice = carrito.findIndex(item => item.nombre === prod.nombre);
    
    if (indice === -1) {
        //Agrega el producto al array carrito
        carrito.push(prod);
        alert(`El producto se agrego al carrito.`);
        console.log(`Producto añadido al carrito: ${prod.nombre}, Precio: $${prod.precio}`);

    } else {

        alert(`Ya está en el carrito.`);

    }

    // Guardado del carrito actualizado en el localstorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}




    
