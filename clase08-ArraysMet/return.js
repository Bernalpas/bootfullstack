

// Funciones con return
const calcularPromedio = (a, b, c, d) => {

  //1. Sumo los datos
  let suma = a + b + c + d;
  //console.log(`La suma de los números: ${a}, ${b}, ${c}, ${d} = ${suma}`);

  //2. Calculo el promedio
  let promedio = suma / 4;
  //console.log(`El promedio de los números es: ${promedio}`);

  //3. Retorno lo que necesito o lo que otra función necesita
  return promedio;


}

// Invocamos a la función
let promedio = calcularPromedio(10, 20, 30, 40);
//console.log(promedio);

let promedio2 = calcularPromedio(100, 200, 300, 400);
//console.log(promedio2);




// Creamos una función que necesita el promedio de los números
const imprimirPromedio = (promedio) => {
  console.log(`El promedio de los números es: ${promedio}`);
}

// Invocamos a la función
imprimirPromedio(promedio);
imprimirPromedio(promedio2);

