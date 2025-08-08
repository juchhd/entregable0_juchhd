function saludar() {
    alert("¡Bienvenid@!");
}
saludar();

const fondos = [
    { bg: "darkgreen", color: "white" },
    { bg: "darkblue", color: "white" },
    { bg: "purple", color: "white" },
    { bg: "maroon", color: "white" },
    { bg: "black", color: "white" }
];

let indice = 0;

function cambiarColorFondo() {
    const fondo = fondos[indice];
    document.body.style.backgroundColor = fondo.bg;
    document.body.style.color = fondo.color;

    indice = (indice + 1) % fondos.length;
}

cambiarColorFondo();
setInterval(cambiarColorFondo, 5000); 