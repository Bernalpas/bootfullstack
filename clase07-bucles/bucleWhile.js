

function guardarProducto() {

  //1. Creo una variable para guardar la lista de productos

  //Un array / arreglo vacío
  let miListaDeProductos = [];

  //console.table(miListaDeProductos); // vacío

  //console.log("---------------------");

  
  // Generemos un bucle while para que el usuario ingrese 5 productos
  
  // Inicializo un contador, que cotrola cuantas veces se ejecuta el bucle
  let contador = 0;
  
  while(contador < 5){

    // Creamos una ventana de confirm para  preguntar al usuario si quiere agregar un producto
    let respuesta = confirm("Desea agregar un producto?");

    console.log("respuesta: ", respuesta);
    
    //2. Capturo el valor del input
    let nombreProducto = prompt("Ingrese el nombre del producto ");
    //3. Agrego el producto a la lista
    miListaDeProductos.push(nombreProducto);


    // Subimos el contador en 1, para que el bucle avance
    contador++;

  }


  console.table(miListaDeProductos);

}

// Función definitiva para guardar productos
function guardarProductoFinal() {

  // Declaramos un array vacío para guardar los productos
  let miListaDeProductos = []; 

  
  // Como no sabemos cuántos productos va a ingresar el usuario, vamos a usar un bucle while
  while(confirm("Desea agregar un producto?")){

    //console.log("Bucle Infinito: no termina nunca");

    //1. Declaramos una variable para capturar la respuesta del usuario
    let productoDelUser = document.getElementById("nombreProducto").value;

    //2. Validamos que el usuario haya ingresado un producto
    if(productoDelUser === "" || productoDelUser === null){

      alert("Debe ingresar un producto");
      continue; // Salta a la siguiente iteración del bucle

    } else {

      // Agregamos el producto a la lista
      miListaDeProductos.push(productoDelUser);

      alert("Producto agregado: " + productoDelUser);

      document.getElementById("nombreProducto").value = ""; // Limpiamos el input
      
    }


  }

  console.log("Salimos del bucle while");

  // Mostramos la lista de productos en la consola
  console.table(miListaDeProductos);



}