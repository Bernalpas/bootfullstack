

//1. Creamos una función para el login del user
function Login() {

  //2. Creamos las variables y capturamos los datos del user
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Hardcodeamos datos de la base de datos
  let emailUser = "mario@gmail.com"
  let passwordUser = "MA2026$" 


  // Ejercicio de Backend
  //1. Imprimo en consola los datos del user
  console.log(email);
  console.log(password);

  // 2. Creamos un objeto con los datos del user
  let user = {
    email: email,
    password: password
  }

  // 3. Imprimo en consola el objeto del user
  console.log(user);

  // 4. Enviamos objeto del user a la API de login
  // fetch: es una función nativa de JS para envío de datos a una API
  fetch('http://localhost:9000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json()).then(data => {
    console.log(data);
  })



  //3. Evaluamos el acceso con un condicional / comentado para ejercicio de back
  /* if(email == emailUser && password == passwordUser){

    alert("Bienvenido Admin");

    window.location.href="./admin.html"
  }else{

    alert("Email o Password incorrectos")

    window.location.href="./error.html"
  } */
  
}