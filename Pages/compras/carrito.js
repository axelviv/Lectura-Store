

document.addEventListener('DOMContentLoaded', function () {
    //Guardo el array del carrito del localstorage y si no existe lo guardo como un array vacio
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    //Mostrar mensaje cuando el carrito esta vacio
    if (carrito.length === 0) {

        document.getElementById('tablaCarrito').innerHTML = `
            <tr>
                <td colspan="5" class="text-center">El carrito está vacío.</td>
            </tr>
        `

    } else {

        // Crear las filas para la tabla con los productos del carrito
        carrito.forEach((producto, index) => {
            const row = document.createElement('tr');

            // Crear las celdas de la fila con los datos del producto
            row.innerHTML = `
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>
                    <input type="number" class="form-control cantidad" value="1" min="1" data-index="${index}">
                </td>
                <td class="totalProducto">$${producto.precio}</td>
                <td>
                    <button class="btn btn-danger eliminar" data-index="${index}">Eliminar</button>
                </td>
            `;

            // Añadir la fila a la tabla
            document.getElementById('tablaCarrito').appendChild(row);
        });

        // Llamo a la funcion que actualiza el total a pagar
        actualizarTotal();

        // LLamo la funcion para agregar event listeners para la cantidad y el botón de eliminar
        agregarEventos();
        
    }
});

// Función para actualizar el total a pagar
function actualizarTotal() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;

    // Recorrer el carrito y sumar el precio de todos los productos
    carrito.forEach((producto, index) => {
        const cantidad = document.querySelector(`input[data-index='${index}']`).value;
        total += producto.precio * cantidad;
    });

    // Mostrar el total actualizado y redondeado
    document.getElementById('totalPagar').textContent = total.toFixed(2);
}

// Función para agregar los eventos de cambio de cantidad y eliminación
function agregarEventos() {
    // Eventos para cambiar la cantidad de los productos
    document.querySelectorAll('.cantidad').forEach(input => {
        input.addEventListener('input', function (e) {
            const index = e.target.dataset.index;
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Actualizar el total de cada producto en función de la cantidad
            const totalProducto = document.querySelectorAll('.totalProducto')[index];
            totalProducto.textContent = `$${(carrito[index].precio * e.target.value).toFixed(2)}`;

            // Actualizar el total general
            actualizarTotal();
        });
    });

    // Eventos para eliminar productos del carrito
    document.querySelectorAll('.eliminar').forEach(boton => {
        boton.addEventListener('click', function (e) {
            const index = e.target.dataset.index;
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Eliminar el producto del carrito
            carrito.splice(index, 1);

            // Guardar el carrito actualizado en el localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Recargar la página para actualizar la tabla
            location.reload();
        });
    });
}


// Vaciar carrito
const btnVaciarCarrito = document.getElementById('vaciarCarrito');
            
    btnVaciarCarrito.addEventListener('click', function() {

    localStorage.removeItem('carrito');
                    
    alert('Carrito Vaciado!');

    location.reload();
});
