let canvas = document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=20;
const ALTURA_PLAYER=60;
const ANCHO_PLAYER=40;

let personajeX=canvas.width/2;
let personajeY= canvas.height-(ALTURA_SUELO+ALTURA_PLAYER);
let limonX= canvas.width/2;
let limonY=0;
let puntaje=0;
let vidas=3;
let velocidadC=200

const ancho_Limon=20;
const alto_Limon=20;
function iniciar(){
    setInterval(bajarLimon,velocidadC);//recive 1. una funcion y 2. milisegundos
    dibujarplayer();
    crearLimon();
    pintarLimon();
}

function dibujarsuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.clientWidth,ALTURA_SUELO)
}

function dibujarplayer(){
    ctx.fillStyle="white";
    ctx.fillRect(personajeX,personajeY,ANCHO_PLAYER,ALTURA_PLAYER)

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
    detectarColission();
    detectarPiso();
}
function detectarColission(){
    if(limonX + ancho_Limon > personajeX && limonX < personajeX+ANCHO_PLAYER && limonY + alto_Limon > personajeY && limonY < personajeY+ALTURA_PLAYER){
        //alert("ATRAPADO");
        crearLimon();
        puntaje = puntaje+1;
        mostrarEnSpan("txtPuntaje",puntaje);
    }
}


function crearLimon(){
    limonX=generarAleatorio(0,canvas.width-ancho_Limon);
    limonY=0; 
    actualizarscreen();   
}
function detectarPiso(){
    if(limonY+alto_Limon==canvas.height-ALTURA_SUELO){
        crearLimon();
        vidas=vidas-1;
       mostrarEnSpan("txtVidas",vidas);
       if(vidas == 0){
            alert("GAME OVER");
       }
    }
}