

// Creo una función para la buscar productos
function busquedaProductos(){

  // Creamos una variable para capturar el dato de busqueda
  let edad = document.getElementById("botonBusqueda").value;

  //12345

  /* 
Condicionales: desiciones que tomamos para ejecutar
lineas de codigo para responder a unos datos
*/

//let edad = 18;
// SI (condición){ se ejecuto o no se ejecute un bloque de código}
// True = se ejecuta
// False = no se ejecuta
// operadores relacionales
// == significa comparación de igualdad
if (edad == 18) { //flase
  console.log("Sos mayor de edad, podés comprar");
}

// < menor que
if (edad < 18) {
  console.log("No podés comprar, sos menor de edad");
  
}

// > mayor que
if (edad > 18) {
  console.log("Sos bienvenido siempre");
}

// => mayor o igual que    >  = 
if (edad >= 18) {
  console.log("Tenés 18 años en adelante");
  
}


// <= menor o igual que
if(edad <= 17){
  console.log("Seguis siendo menor");
}


  //Imprimir el elemento que captura el document
  //console.log(busquedaUser);
  

}



