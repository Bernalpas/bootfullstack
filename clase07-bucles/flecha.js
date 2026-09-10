

// Función Flecha: se define con la sintaxis de flecha =>, tiene nombre y se puede asignar a una variable

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

// invocación de la función
saludar("Juan");

// Función como variable
const calcularIva = function(precio) {
  return precio * 0.21;
}

//invocación de la función
console.log(calcularIva(18500));


// Estructura de una función flecha
const saludarFlecha = (data) =>{
  console.log(`Hola ${data}`);
}

//invocamos la función flecha
saludarFlecha("Pedro");

// Argumentos

/*
* Esta función flecha recibe dos argumentos, los suma y devuelve el resultado
* Sólo recibe número enteros
*/
const sumar = (a, b) => {
  return a + b;
}

/*
* Los argumentos de una función simpre ocupan la misma posición, es decir, el  primer argumento que se pasa a la función es el primer parámetro que recibe la función, el segundo argumento es el segundo parámetro, y así sucesivamente.
*/

sumar(5, 10);

const restar = (numUno, numDos) => {
  return numUno - numDos;
}

restar(10, 5);