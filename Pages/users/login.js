import { users } from './users.js';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === username && user.password === password);

    if (user) {
        alert('Inicio de sesion exitoso!.');
        window.location.href = '../home.html';
    } else {
        alert('Usuario o contraseña incorrectos. Intenta nuevamente!');
    }
});
