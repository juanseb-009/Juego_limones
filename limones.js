let canvas = document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=40;
const ALTURA_PLAYER=60;
const ANCHO_PLAYER=40;
function iniciar(){
    dibujarplayer();
    dibujarsuelo();
}

function dibujarsuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.clientWidth,ALTURA_SUELO)
}

function dibujarplayer(){
    ctx.fillStyle="white";
    ctx.fillRect(canvas.width/2,canvas.height-(ALTURA_SUELO+ALTURA_PLAYER),ANCHO_PLAYER,ALTURA_PLAYER)

}