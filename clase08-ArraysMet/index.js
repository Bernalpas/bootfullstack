
// Este ejercicio muestra los métodos de arrays

// 1. Capturamos el btnIngresar
const btnPrueba = document.getElementById("btnPrueba");

//2. Le agregamos el evento al boton para prueba del evento
btnPrueba.addEventListener("mouseover", function(){
  alert("Evento con addEventListener");
})


// 3. capturamos el btnIngresarNombre
const btnIngresarNombre = document.getElementById("btnIngresarNombre");

// 4. Creamos el array para almacenar los usuarios
let listaDeUsuarios = [];

// 3. Le agregamos el evento al boton para ingresar datos
btnIngresarNombre.addEventListener("click", (event) => {

  // 5. Prevenimos el comportamiento predeterminado del evento
  // (para evitar que se recargue la página)
  event.preventDefault();


  // 6. Capturamos el nombre del usuario
  const nombre = document.getElementById("nombre").value;

  // 7. Agregamos el nombre al array
  // push(): ingresa un elemento al final del array
  listaDeUsuarios.push(nombre); // es como hacer una fila

  // 8. Imprimimos el array en la consola para ver su contenido
  console.table(listaDeUsuarios);



  // imprimimos el objeto event en la consola para ver su contenido
  //console.log(event);

  //alert("Usuario ingresado al Sistama");

    // 9. Llamamos a la función para limpiar los campos del formulario
    limpiarCampos();

  
})

// 5. Capturamos el btnIngresarUsuario
const btnIngresarUsuario = document.getElementById("btnIngresarUsuario");

btnIngresarUsuario.addEventListener("click", (event) => {
  event.preventDefault();

  // 6. Capturamos el nombre del usuario
  const nombre = document.getElementById("nombre").value;

  console.log(nombre);

  // 7. Agregamos el nombre al array
  // unshift(): ingresa un elemento al principio del array
  listaDeUsuarios.unshift(nombre); // el último post, primero en el feed 


  // 8. Imprimimos el array en la consola para ver su contenido
  console.table(listaDeUsuarios);


    // 9. Llamamos a la función para limpiar los campos del formulario
    limpiarCampos();

});


// Creamos una función para limpiar los campos del formulario
function limpiarCampos() {

  // capturamos el formulario
  let formulario =  document.getElementById("formIngresar");

  // 9. Limpiamos los campos del formulario
  // reset(): resetea todos los campos del formulario
  formulario.reset();

  // Forma larga
  //let nombre = document.getElementById("nombre").value;
  //nombre = ""; // hacerlo para todos los inputs
  
}

// Función para eliminar el último usuario
function eliminarUltimoUsuario() {
  listaDeUsuarios.pop(); // elimina el último elemento del array

  //imprimimos el array en la consola para ver su contenido
  console.table(listaDeUsuarios);
}

// función para eliminar el primer usuario
// shift(): elimina el primer elemento del array
function eliminarPrimeroUsuario() {
  listaDeUsuarios.shift(); // elimina el primer elemento del array

  //imprimimos el array en la consola para ver su contenido
  console.table(listaDeUsuarios);
}	



// Otra forma de trabajar con el addEventListener
// imprimir los usuarios en la lista desordenada
let listaUsuariosText = document.getElementById("listaUsuariosText");
function imprimirParrafo() {

  // 1. Escribimos un dato con innerText
  listaUsuariosText.innerText = "Aquí están los nombres usuarios, estos usuarios son clientes de la empresa desde hace 5 años";

  // 2. Capturamos el titulo
  const titulo = document.getElementById("titulo");

  // 3. Le agregamos el evento al titulo para cambiar el texto
  titulo.innerText = "Métodos de Arrays - Educación IT - Bootcamp";

}

// 2. Capturamos el btnImprimirParrafo
const btnImprimirParrafo = document.getElementById("btnImprimirParrafo");

// 3. Le agregamos el evento al boton para imprimir el parrafo
btnImprimirParrafo.addEventListener("click", function(){
  imprimirParrafo();
})
