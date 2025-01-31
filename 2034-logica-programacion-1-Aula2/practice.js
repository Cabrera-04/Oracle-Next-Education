let dia = prompt("¿Qué día de la semana es?");

if (dia === "Sábado" || dia === "Domingo") {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}

let numero = parseFloat(prompt("Ingresa un número:"));

if (numero > 0) {
  alert("El número es positivo.");
} else if (numero < 0) {
  alert("El número es negativo.");
} else {
  alert("El número es cero.");
}

let puntuacion = parseInt(prompt("Ingresa tu puntuación:"));

if (puntuacion >= 100) {
  alert("¡Felicidades, has ganado!");
} else {
  alert("Inténtalo nuevamente para ganar.");
}

let saldo = 500; // Puedes cambiar este valor o pedirlo al usuario
alert(`El saldo de tu cuenta es: $${saldo}`);

let nombre = prompt("Por favor, ingresa tu nombre:");
alert(`¡Bienvenido, ${nombre}!`);