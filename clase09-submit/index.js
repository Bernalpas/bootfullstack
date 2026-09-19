

let formulario = document.querySelector("#formProducts")


const saludo = (event) =>{
  event.preventDefault()
  alert("Función de ejemplo con el Event Submit")
} 

formulario.addEventListener("submit", (event) =>{
  event.preventDefault()

  //1. Podemos obtener los valores del formulario con document.querySelector()
  let nombre = document.querySelector("#nombre").value
  console.log(nombre)

  //2 Podemos obtener los datos con el document.getElementById()
  let precio = document.getElementById("precio").value
  console.log(precio)

  //3. Podemos obtener los datos desde la variables del formulario
  let origen = formulario.origen.value
  console.log(origen)

  console.log("#######################################")
  
  // Instanciamos un objeto del tipo FormData(clase nativa de JS)
  let miFormulario = new FormData(formulario)
  
  // capturamos los valores del formulario usando el objeto miFormulario
  let nombreFormulario = miFormulario.get("nombre");
  let precioFormulario = miFormulario.get("precio");
  let origenFormulario = miFormulario.get("origen");
  console.log("Datos con el objeto miFormulario: ");
  console.log(nombreFormulario)
  console.log(precioFormulario)
  console.log(origenFormulario)
  
  console.log("#######################################")

  // Utilizamos otra clase nativa de JS
  const fechaLogin = new Date()

  console.log(fechaLogin.getFullYear()); //año actual
  console.log(fechaLogin.getMonth()); //mes actual
  console.log(fechaLogin.getDate()); //día actual
  console.log(fechaLogin.getHours()); //hora actual
  console.log(fechaLogin.getMinutes()); //minuto actual
  console.log(fechaLogin.getSeconds()); //segundo actual
  


  formulario.reset()
  
} )


