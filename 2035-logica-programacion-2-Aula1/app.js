let numeroSecreto = generarNumeroSecreto();
let intentos=1;


function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p", `¡Lo lograste en ${intentos} ${ intentos === 1 ? "intento" : "intentos"}`);
  } else {
    limpiarCaja();
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
  }
  return;
}

function limpiarCaja(){
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Secret Number Game"); // tambien se puede ejecutar aquí en vez de hacerlo en el HTML pero de hacerlo en el HTML se debe hacer en eventos
asignarTextoElemento("p", "Choose a number between 1 and 10"); // tambien se puede ejecutar aquí en vez de hacerlo en el HTML pero de hacerlo en el HTML se debe hacer en eventos
