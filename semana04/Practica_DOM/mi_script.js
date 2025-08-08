document.addEventListener('DOMContentLoaded', function () {

    

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :

    let enlaces = document.getElementsByTagName('a');

    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
    
    let contador = 0;

    for (let i = 0; i < enlaces.length; i++) {
      if (enlaces[i].href === "http://prueba/") {
        contador++;
      }
    }
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :

    let parrafos=document.getElementsByTagName('p');
    let tercerParrafo=parrafos[2]; // el tercer parrafo es indice 2.
    let enlacesTercerParrafo= tercerParrafo.getElementsByTagName('a');

    document.getElementById("info").innerHTML = "El número de enlaces de la página es: " +enlaces.length+".<br>"+
    "La dirección a la que se enlaza el penúltimo enlace es: " +enlaces[enlaces.length-2].href+".<br>"+
    "El número de enlaces que enlazan a http://prueba/ es: " +contador+".<br>"+
    "El número de enlaces del tercer párrafo es: " +enlacesTercerParrafo.length
    ;
});