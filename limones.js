let canvas = document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=40;
const ALTURA_PLAYER=60;
const ANCHO_PLAYER=40;

let personajeX=canvas.width/2;
let limonX= canvas.width/2;
let limonY=5;

const ancho_Limon=20;
const alto_Limon=20;
function iniciar(){
    dibujarplayer();
    dibujarsuelo();
    pintarLimon();
}

function dibujarsuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.clientWidth,ALTURA_SUELO)
}

function dibujarplayer(){
    ctx.fillStyle="white";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PLAYER),ANCHO_PLAYER,ALTURA_PLAYER)

}

function moverIzquierda(){
    personajeX = personajeX-10;
    actualizarscreen();

}
function moverDerecha(){
    personajeX = personajeX+10;
    actualizarscreen();

}
function actualizarscreen(){
    limpiarcanvaa();
    dibujarsuelo();
    dibujarplayer();
    pintarLimon();
}

function limpiarcanvaa(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
function pintarLimon(){

    ctx.fillStyle="rgb(25, 255, 4)";
    ctx.fillRect(limonX,limonY,ancho_Limon,alto_Limon)

}
function bajarLimon(){
    limonY=limonY+10;
    actualizarscreen();
}