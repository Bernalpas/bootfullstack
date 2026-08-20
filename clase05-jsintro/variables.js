// Comentairio de una sola línea

/*
  Comentario de varias líneas
  para multiples propósitos
  y explicaciones
*/  

//1. Variable declaration
// Palabra reservada var, let, const: pertenecen a la sintaxis de JS

var nombre; // Declaración de variable sin inicializar

nombre = "Pepe" // asignación de una variable

let apellido = "Perez"; // Declaración de variable con inicialización
// = es un operador de asignación

// Imprimir un dato en la consola
console.log(nombre)
console.log(apellido);

console.log("########################");

// Cambio de datos en las variables anteriores
nombre = "Gaseosas";
apellido = "Panificados";

console.log(nombre);
console.log(apellido);

console.log("########################");

// let = let
//console.log(let);

// const: variable que no puede cambiar su dato
const CODIGO = "123456RED"

console.log(CODIGO);

// las const van en mayúscula
const IVA = 1.21

// lanza error, no puedo reasignar un valor a una const
//CODIGO = 2131564564

console.log("########################");

console.log("Tipos de Datos para las Variables");

console.log("########################");

//1. String: cadena de caracteres, va  " ", ' ', ` ` 
// paradigma camelCase
let provinciaArgentina = "Mendoza"
let pais = 'Argentina'
let continente = `América`
const DNI = "25256897"

console.log(provinciaArgentina, pais, continente, DNI);

//2. Numéricos

var edad = 25; // enteros
let precioProducto = 2500 // decimales float
let total = precioProducto * IVA // operador multiplicación
console.log(total);

let potencia = 5**2 // potencia
console.log(potencia);

let divison = 1000 / 50 // operador division
console.log(divison);

let suma = 8000 + 5400
// concatenar - unir variables con texto
console.log('El resultado de la suma es: ' + suma);

let resta = suma - divison
// texto con variable usando el template sting
console.log(`El resultado de la resta es ${resta}`);

//3. Arreglos / Arrays: variables que guardan muchos datos
let alumnos = ["Pepe", "Juan", "Mario", "María"]
//  indice:      0        1       2         3

console.log(alumnos); // imprimo todo el arreglo

console.log(alumnos[0]);// imprimo un elemento del arreglo
console.log(alumnos[4]);// no existe el índice 4 en el arreglo
console.log(alumnos[3]);

let persona = ["Pepe", "Buenos Aires", 30, "Programación", 123156465]
//                0          1          2         3            4 

console.log("La persona se llama " + persona[0] + " y su DNI es " + persona[4]);















