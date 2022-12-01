const juegoCanvas = document.getElementById("juegoCanvas");

const ctx = juegoCanvas.getContext("2d");

const DIRECCIONES = {
    ARRIBA: 1,
    ABAJO: 2,
    IZQUIERDA: 3,
    DERECHA: 4
};

let direccion = DIRECCIONES.DERECHA;
let cabezaPosX = 10, cabezaPosY = 10;

let culebra = [
    { posX: 10, posY: 10 },
    { posX: 20, posY: 10 },
    { posX: 30, posY: 10 },
    { posX: 40, posY: 10 },
]

function dibujarCulebra(x, y) {
for (let unidadDeCulebra of culebra) {
    ctx.beginPath()
    ctx.rect(unidadDeCulebra.posX, unidadDeCulebra.posY, 10, 10)
    ctx.stroke()
    }
}; 

function ajustarPosicion() {
    if (direccion === DIRECCIONES.DERECHA) posX += 10;
    else if (direccion === DIRECCIONES.IZQUIERDA) posX -= 10;
    else if (direccion === DIRECCIONES.ABAJO) posY += 10;
    else if (direccion === DIRECCIONES.ARRIBA) posY -= 10;
    else throw new Error("dirección tiene un valor invalido asignado osea sos boludo o te haces");
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, juegoCanvas.width, juegoCanvas.height);
}

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowUp")       direccion = DIRECCIONES.ARRIBA;
    else if (e.code === "ArrowDown")       direccion = DIRECCIONES.ABAJO;
    else if (e.code === "ArrowLeft")       direccion = DIRECCIONES.IZQUIERDA;
    else if (e.code === "ArrowRight")       direccion = DIRECCIONES.DERECHA;
    else return;

    limpiarCanvas();
    ajustarPosicion();
    dibujarCulebra(posX, posY)});