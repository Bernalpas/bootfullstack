
// capturamos el elemento del DOM con el id "empleados" y lo almacenamos en la variable empleados
let empleados = document.getElementById("empleados");

// For
// 1. Inicamos la variable de control let contador = 0
// 2. Condición del bucle contador < 5
// 3. Incremento del contador contador++, paso uno
for(let contador = 0; contador <= 100; contador+=10) {

  empleados.innerText += `Empleado ${contador}\n`;


}


let funcionarios = [];

funcionarios.push("Juan");
funcionarios.push("Pedro");
funcionarios.push("Maria");
funcionarios.push("Ana");
funcionarios.push("Luis");

console.log(funcionarios);

let listaFuncionarios = document.getElementById("funcionarios");


for(let indice = 1; indice < funcionarios.length; indice++){

  listaFuncionarios.innerText += `Funcionario ${indice}: ${funcionarios[indice]}\n`;

}

// Arreglos con múultiples tipos de datos

let persona = ["Pepe", "Perez", 30, "Masculino", "Argentina"];
let infoPersona = ["nombre", "apellido", "edad", "sexo", "pais"];
let trabajoPersona = ["profesor", "programador", "diseñador", "ingeniero", "arquitecto"];

console.log("##############################");
console.log("##############################");

console.log(persona);
console.log(infoPersona);

console.log(persona[0]);

// Imprimo en consola los datos de la persona de los dos arrays, recorriendo el array infoPersona con un bucle for y accediendo a los valores del array persona con el índice del bucle
for(let i = 0; i < infoPersona.length; i++){
  console.log(`${infoPersona[i]}: ${persona[i]}`);
}


// Objeto literal: es una variable que contiene propiedades, valores y métodos, se define con llaves {}

let estudiante = {
  nombre: "Mario",
  apellido: "Gomez",
  edad: 25,
  sexo: "Masculino",
  pais: "Argentina",
  // Método: es una función que pertenece a un objeto, se define con la palabra function y se llama con el nombre del método seguido de paréntesis ()
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
  },
  rindeExamen: function() {
    console.log(`El estudiante ${this.nombre} ${this.apellido} está rindiendo el examen de Programación.`);
  }

}

console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante.pais);
estudiante.saludar();
estudiante.rindeExamen();