// actividad uno: fundamentos de javascript

// punto uno
let nombre = "Ana";
let edad = 24;

console.log(`Hola! Me llamo ${nombre} y tengo ${edad} años. Un gusto!`);

// punto dos, trabajando con arrays

const numeros = [3, 7, 12, 5, 2];

// numeros del array al cuadrado

const numerosAlCuadrado = numeros.map((numero) => numero * numero);
console.log(numerosAlCuadrado);

// numeros del array mayores a 5

const numerosMayoresA5 = numeros.filter((numero) => numero > 5);
console.log(numerosMayoresA5);

// numeros del array: pares e impares

const esParONo = (numero) => {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
};

const resultado = numeros.map(esParONo);
console.log(resultado);
