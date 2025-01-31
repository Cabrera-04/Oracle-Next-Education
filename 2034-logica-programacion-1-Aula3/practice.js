let contador = 1;

while (contador <= 10) {
  console.log(contador);
  contador++;
}


contador = 10;

while (contador >= 0) {
  console.log(contador);
  contador--;
}

let numero = parseInt(prompt("Ingresa un número para la cuenta regresiva:"));

if (!isNaN(numero) && numero >= 0) {
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
} else {
  console.log("Por favor, ingresa un número válido.");
}

numero = parseInt(prompt("Ingresa un número para la cuenta progresiva:"));

if (!isNaN(numero) && numero >= 0) {
  let contador = 0;
  while (contador <= numero) {
    console.log(contador);
    contador++;
  }
} else {
  console.log("Por favor, ingresa un número válido.");
}