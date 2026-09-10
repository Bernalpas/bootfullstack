

// Creo una función para la buscar productos
function busquedaProductos(){

  // Base de datos de productos
  let productos = ["arroz", "fideos", "pan", "leche", "azúcar", "sal", "aceite", "manteca", "queso", "jamon"];


  // Creamos una variable para capturar el dato de busqueda
  let producto = document.getElementById("botonBusqueda").value;

  productMin = producto.toLowerCase()

  // Usamos el método includes() para buscar el producto en el array productos
  if(productos.includes(productMin)){
    alert(`El producto ${producto} se encuentra en stock`);
  } else {
    alert(`El producto ${producto} no se encuentra en stock`);
  }


}


const busquedaObjetos = () => {

  // Arreglo de objetos con productos
  let productosPrecio = [
    {
      nombre: "pan",
      precio: 2500
    },
    {
      nombre: "leche",
      precio: 2900
    },
    {
      nombre: "arroz",
      precio: 1600
    }
  ]

  // capturamos la busqueda del user
  let productoBuscado = document.getElementById("botonBusqueda").value;

  // pasamos a minusculas el dato del user
  productoMinuscula = productoBuscado.toLowerCase();

  // buscamos en el arreglo el producto del user
  productoEncontrado = productosPrecio.find(item => item.nombre === productoMinuscula);

  console.log(productoEncontrado);

  if (productoEncontrado) {
    alert(`El producto ${productoEncontrado.nombre} tiene el precio de ${productoEncontrado.precio}`)
  } else{
    alert(`No tenemos el producto: ${productoEncontrado.nombre}`)
  }
  
}



