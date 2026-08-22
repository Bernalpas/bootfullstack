
/* Variables para la captura de elmentos de html por el DOM */

let ventanaAlert = document.getElementById("ventanaAlert");
let ventanaPrompt = document.getElementById("ventanaPrompt");
let ventanaConfirm = document.getElementById("ventanaConfirm");

/* Imprimir en consola los elemento para ver que tag tomó JS */

console.log("********************************************");
console.log(ventanaAlert);
console.log(ventanaPrompt);
console.log(ventanaConfirm);
console.log("********************************************");

/* 
Creamos una funciones para manejar 
los eventos de las ventanas y aplicamos el 
Evento onclick a los botones
*/

/* Ventanas en JS */

function dameVentanaAlert() {
  //1. Ventana de Info
  
  alert("Bienvenido a la clase de ventanas de JS")
}

function dameVentanaPrompt() {
  //2. Ventana para introducir datos desde el front
  
  prompt("Introduce la clave para seguir: ")
}

function dameVentanaConfirm() {
  //3. Ventana de confirmación de datos
  
  confirm("Pagás con QR?")
}


/* Invocamos a una función */
//dameVentanaAlert()



