document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los enlaces de la página
    let enlaces = document.querySelectorAll('a');
    let linkstotales = enlaces.length;

    // Dirección del penúltimo enlace
    let penultimoEnlace = linkstotales > 1 ? enlaces[linkstotales - 2].href : "No hay suficientes enlaces";

    // Número de enlaces que apuntan a http://prueba/
    let enlacesPrueba = Array.from(enlaces).filter(enlace => enlace.href === 'http://prueba/').length;

    // Número de enlaces del tercer párrafo
    let parrafos = document.querySelectorAll('p');
    let enlacesTercerParrafo = 0;
    if (parrafos.length >= 3) {
        enlacesTercerParrafo = parrafos[2].querySelectorAll('a').length;
    }

    // Mostrar la información en el párrafo con id="info"
    let info = document.getElementById('info');
    info.innerHTML = `Número de enlaces: ${linkstotales}<br>
    Penúltimo enlace: ${penultimoEnlace}<br>
    Enlaces a http://prueba/: ${enlacesPrueba}<br>
    Enlaces en el tercer párrafo: ${enlacesTercerParrafo}`;
});
    
    
   
