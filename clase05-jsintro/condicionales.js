

  /* 
Condicionales: desiciones que tomamos para ejecutar
lineas de codigo para responder a unos datos
*/



let edad = 17;
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

console.log("####################################");
console.log("####################################");



//Codicionales con else
  /*
if(condición){
  bloque de código que se ejecuta si es true
}else{
  bloque de codigo que se ejecuta si es false
}
*/

let pasaporte = false;
let pasaje = true;


// Operadores Lógicos
// & significa y lógico
// | significa el o lógico

// Con el y, los dos datos deben ser verdaderos
if(pasaporte && pasaje && edad >= 18){
  console.log("Puede subir al avión");
}else{
  console.log("Necesita ambos documentos y ser maryor de edad para el viaje");
}


// Con el O, uno de los datos es true y es suficiente
if(pasaporte || pasaje || edad >= 18){
  console.log("Puede subir al avión");
}else{
  console.log("Necesita ambos documentos para el viaje");
}



console.log("####################################");
console.log("####################################");


let email = "pepe@gmail.com"
let password = "1234"

let userEmail = "pepe@gmail.com"
let userPassword = "05011999"

if(email == userEmail && password == userPassword  ){
  console.log("Bienvenido al Banco");
}else{
  console.log("Contraseña o Email incorrectos");
}


if(email == userEmail || password == userPassword  ){
  console.log("Bienvenido al Banco");
}else{
  console.log("Contraseña o Email incorrectos");
}

console.log("####################################");
console.log("####################################");


