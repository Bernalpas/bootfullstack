console.log("Hola gente")


function login() {
    //este evento imprime en consola un texto
    console.log("Hola gente, alguien hizo click")

    //mostrar una aviso en el navegador
    alert("Hola, soy una ventana")

    //crear una variable que guarde el valor del input del email
    var email = document.getElementById("email").value

    //imprimimos en consola el valor del input
    //console.log(email)

    //imprimo el contenido del input del email
    console.log(email)

    // creamos una variable que guarde el valor del input del password
    var password = document.getElementById("password").value

    //imprimimos en consola el valor del input
    console.log(password)

}