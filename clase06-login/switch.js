
function ifTheme() {
  // Implementation for switching theme

  let dato = prompt("Ingresa el mes del año en el que estas (texto):");

  //12 meses del año
  if(dato == "diciembre" || dato == "enero" || dato == "febrero") {

    // Lógica para verano
    alert("Estamos en Verano");

  } else if(dato == "marzo" || dato == "abril" || dato == "mayo") {

    // Lógica para otoño
    alert("Estamos en Otoño");

  } else if(dato == "junio" || dato == "julio" || dato == "agosto") {

    // Lógica para invierno
    alert("Estamos en Invierno");
  } else if(dato == "septiembre" || dato == "octubre" || dato == "noviembre") {

    // Lógica para Primavera
    alert("Estamos en Primavera");

  } else {
    alert("Mes no válido. Por favor, ingresa un mes válido.");
  }
}

function switchTheme() {
  // Implementation for switching theme

  let dato = prompt("Ingresa el mes del año en el que estas (texto):");

  console.log(dato)

  // ENero - ENERO - eneRO -EnErO

  // Pasamos el dato a minúsculas para que no importe como lo escriba el usuario
  let datoMinusculas = dato.toLowerCase();

  console.log(datoMinusculas)

  // Pasamos el dato a mayusculas para que no importe como lo escribe el usser
  let datoMayusculas = dato.toUpperCase();

  console.log(datoMayusculas);

  switch(datoMinusculas){ 
    case "diciembre":
      alert("Estamos en Verano");
      break;
    case "enero":
      alert("Estamos en Verano");
      break;
    case "febrero":
      alert("Estamos en Verano");
      break;
    case "marzo":
      alert("Estamos en Otoño");
      break;
    case "abril":
      alert("Estamos en Otoño");
      break;
    case "mayo":
      alert("Estamos en Otoño");
    case "junio":
      alert("Estamos en Invierno");
      break;
    case "julio":
      alert("Estamos en Invierno");
      break;
    case "agosto":
      alert("Estamos en Invierno");
      break;
    case "septiembre":
      alert("Estamos en Primavera");
      break;
    case "octubre":
      alert("Estamos en Primavera");
      break;
    case "noviembre":
      alert("Estamos en Primavera");
      break;
    default:
      alert("Mes no válido. Por favor, ingresa un mes válido.");
      break;
  }
}
