import { users } from './users.js';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === username && user.password === password);

    if (user) {
        // Guardar la información del usuario en sessionStorage
        sessionStorage.setItem('usuarioLogueado', JSON.stringify(user));        

        alert(`Sesion Iniciada. Bienvenido ${user.nombre}`);

        window.location.href = '../home.html';
    } else {
        alert('Usuario o contraseña incorrectos. Intenta nuevamente!');
    }
});
