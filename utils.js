function generarAleatorio(min, max){
    let random= Math.random();
    let numero = random*(max-min);
    let numeroInt = Math.ceil(numero);
    numeroInt= numeroInt+min;
    return numeroInt 
}