// Crear el array inicial
let frutas = ["manzana", "banana", "pera"];

// console.log("Array inicial:", frutas);

frutas.push("naranja");

// console.log("Después de push:", frutas);

frutas.pop();

// console.log("Después de pop:", frutas);



// Crear el array bidimensional
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const elemento = matriz[1][1]; 

// console.log(elemento);



for (let i = 0; i < frutas.length; i++) {
    // console.log(frutas[i]);
}


// Crear la función elevarAlCuadrado
function elevarAlCuadrado(numeros) {
    return numeros.map(numero => numero ** 2);
}

const numeros = [1, 5, 8, 12, 20];

// const cuadrados = elevarAlCuadrado(numeros);

// console.log(cuadrados);

// Crear la función filtrarMayoresDe
function filtrarMayoresDe(numeros, referencia) {
    return numeros.filter(numero => numero > referencia);
}
const valorReferencia = 6;
const mayores = filtrarMayoresDe(numeros, valorReferencia);

// console.log(mayores);


// Crear la función sumarElementos
function sumarElementos(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

const num = [1, 2, 3, 4, 5];
const suma = sumarElementos(num);

// console.log(suma);
// Salida: 15


// Crear el array de números
const num1 = [5, 8, 9, 7, 3];

const hayMayorQue10 = num1.some(numero => numero > 10);

// console.log(hayMayorQue10);


const todosPositivos = numeros.every(numero => numero > 0);

// console.log(todosPositivos);


// Crear el array de objetos personas
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 32 },
    { nombre: 'Pedro', edad: 28 },
    { nombre: 'María', edad: 40 }
];

const personaMayorDe30 = personas.find(persona => persona.edad > 30);

// console.log(personaMayorDe30);
// Salida: { nombre: 'Luis', edad: 32 }

// Crear el array de palabras
const palabras = ['naranja', 'manzana', 'banana', 'pera', 'kiwi'];

palabras.sort();

console.log(palabras);
// Salida: ['banana', 'kiwi', 'manzana', 'naranja', 'pera']

