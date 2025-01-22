function saludarMundo() {
    console.log("¡Hola, mundo!");
}

function saludar(nombre) {
    if (!nombre) {
        nombre = prompt("¿Cuál es tu nombre?");
    }
    console.log(`¡Hola, ${nombre}!`);
}

function doble(num) {
    if (num === undefined) {
        num = parseFloat(prompt("Ingresa un número para doblar:"));
    }
    return num * 2;
}

function promedio(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
        a = parseFloat(prompt("Ingresa el primer número:"));
        b = parseFloat(prompt("Ingresa el segundo número:"));
        c = parseFloat(prompt("Ingresa el tercer número:"));
    }
    return (a + b + c) / 3;
}

function mayor(a, b) {
    if (a === undefined || b === undefined) {
        a = parseFloat(prompt("Ingresa el primer número:"));
        b = parseFloat(prompt("Ingresa el segundo número:"));
    }
    return a > b ? a : b;
}

function cuadrado(num) {
    if (num === undefined) {
        num = parseFloat(prompt("Ingresa un número para calcular su cuadrado:"));
    }
    return num * num;
}

saludarMundo();
saludar();
console.log(doble());
console.log(promedio());
console.log(mayor());
console.log(cuadrado());
