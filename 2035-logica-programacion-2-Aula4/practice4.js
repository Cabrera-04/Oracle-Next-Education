let listaGenerica = [];
let lenguajesDeProgramaciom = ["JavaScript", "C", "C++", "Kotlin", "Python"];
let nuevosLenguajesDeProgramacion = ["Java", "Ruby", "GoLang"];
let numeros = [5, 9, 1];
let sumatoria = 0;
let max;
let min;

let colores1=["amarillo","azul","rojo"];
let colores2=["verde","rosado","naranja"];

console.log(lenguajesDeProgramaciom);
lenguajesDeProgramaciom = lenguajesDeProgramaciom.concat(
  nuevosLenguajesDeProgramacion
);
console.log(lenguajesDeProgramaciom);

//Hay muchas formas, en este caso lo hice con "for" pero tambien hay una función llamada forEach que tambien puede funcionar
function mostrarLenguajes() {
  for (let i = 0; i < lenguajesDeProgramaciom.length; i++) {
    console.log(lenguajesDeProgramaciom[i]);
  }
}

//Aquí tambien hay varias formas, se puede tambien usar lo anterior pero esta vez con un reverse()
function mostrarLenguajesAlReves() {
  for (let i = lenguajesDeProgramaciom.length - 1; i >= 0; i--) {
    console.log(lenguajesDeProgramaciom[i]);
  }
}

mostrarLenguajes();
mostrarLenguajesAlReves();

function promedio(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    sumatoria += numeros[i];
  }
  return console.log(sumatoria / numeros.length);
}

promedio(numeros);

function biggestNSmallest(numeros) {
  max = numeros[0];
  min = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }

    if (numeros[i] < min) {
      min = numeros[i];
    }
  }
  return console.log("El mayor es: " + max + " y el menor es: " + min);
}

biggestNSmallest(numeros);

console.log(numeros);

function biggest(numeros) {
  sumatoria = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumatoria += numeros[i];
  }
  return console.log(sumatoria);
}

biggest(numeros);

function posicion(numeros, numero) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == numero) {
      return console.log("El número " + numero + " está en la posición " + i);
    }
    return console.log(-1);
  }
}

posicion(numeros, 6);

console.log(colores1);
function appendArrays(array1, array2) {
    array1.push(...array2);
    return console.log(array1);
}
appendArrays(colores1, colores2);

function arrayAlCuadrado(arrayNumeros){
    for( let i = 0; i < arrayNumeros.length; i++){
        arrayNumeros[i] = arrayNumeros[i] * arrayNumeros[i];
    }
    return console.log(arrayNumeros);
}

arrayAlCuadrado(numeros);
