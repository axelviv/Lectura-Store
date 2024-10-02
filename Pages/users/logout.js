    
    const url = 'http://127.0.0.1:5500/'
    
    export function cerrarSesion() {
        setTimeout(() => {
            
            const logoutButton = document.getElementById('logout');
            
                logoutButton.addEventListener('click', function() {
                    window.location.href = `${url}pages/users/login.html`;
                    
                    alert('Sesion Cerrada!.');
                });

            
        }, 100); // Esperar 100 ms
    }