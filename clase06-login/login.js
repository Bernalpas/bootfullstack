

//1. Creamos una función para el login del user
function Login() {

  //2. Creamos las variables y capturamos los datos del user
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Hardcodeamos datos de la base de datos
  let emailUser = "mario@gmail.com"
  let passwordUser = "MA2026$" 


  //3. Evaluamos el acceso con un condicional
  if(email == emailUser && password == passwordUser){

    alert("Bienvenido Admin");

    window.location.href="./admin.html"
  }else{

    alert("Email o Password incorrectos")

    window.location.href="./error.html"
  }
  
}