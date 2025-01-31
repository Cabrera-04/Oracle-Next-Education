function calcularIMC() {
    const peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
    const altura = parseFloat(prompt("Ingresa tu altura en metros:"));
    const imc = peso / (altura * altura);
    console.log(`Tu IMC es: ${imc}`);
}

function calcularFactorial() {
    const numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}

function convertirDolaresAPesos() {
    const dolares = parseFloat(prompt("Ingresa la cantidad en dólares que deseas convertir a pesos colombianos:"));
    const tasaDeCambio = 4500;
    const pesos = dolares * tasaDeCambio;
    console.log(`${dolares} dólares equivalen a ${pesos} pesos colombianos.`);
}

function salaRectangular() {
    const altura = parseFloat(prompt("Ingresa la altura de la sala rectangular en metros:"));
    const anchura = parseFloat(prompt("Ingresa la anchura de la sala rectangular en metros:"));
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} m`);
}

function salaCircular() {
    const radio = parseFloat(prompt("Ingresa el radio de la sala circular en metros:"));
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} m`);
}

function tablaDeMultiplicar() {
    const numero = parseInt(prompt("Ingresa el número para mostrar su tabla de multiplicar:"));
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

calcularIMC();
calcularFactorial();
convertirDolaresAPesos();
salaRectangular();
salaCircular();
tablaDeMultiplicar();
