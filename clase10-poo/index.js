
// Tema: POO: Programación Orientada a Objetos: es un paradigma de programación
// 1. Clases y objetos
// 2. Métodos
// 3. Herencia


//1. Clases: es un modelo o plantilla para crear objetos

//A. Declaración de una clase Auto
class Auto{

  //Genero un Constructor para crear objetos
  constructor(color, cantPuertas, modelo, precio){
    this.color = color
    this.cantPuertas = cantPuertas
    this.modelo = modelo
    this.precio = precio
  }

  //2. Métodos: son funciones que realiza la clase y que lo pueden usar sólo los objetos de la clase
  avanzar(velocidad){
    console.log("El auto se mueve para adelante a " + velocidad + " km/h")
  }

  frenar(){
    console.log("El auto se detiene")
  }

}

//1.1 Creamos un objeto de la clase Auto
// Crear un objeto lleva el nombre de instanciar un objeto
let miAuto = new Auto("rojo", 5, "Audi", 200000)

// usamos el método de la clase Auto
miAuto.avanzar(80);
console.log("#######################################")
miAuto.frenar();
console.log("#######################################")

console.table(miAuto)

console.log("#######################################")

// Creamos otra clase de ejemplo
class Alfajor{

  // Constructor
  constructor(tipo, sabor, relleno, precio){
    this.tipo = tipo
    this.sabor = sabor
    this.relleno = relleno
    this.precio = precio
  }

}

// creamos un objeto de la clase Alfajor
let Pepito = new Alfajor("triple", "chocolate", "crema", 3000)

// creamos otro tipo de alfajor
let Pepito2 = new Alfajor("doble", "vanilla", "dulce de leche", 2500)

// vemos el objeto
console.log(Pepito)
console.log(Pepito2)

console.log("#######################################")

class Persona{
  
  constructor(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }
  
}

let Pepe = new Persona("Pepe", "Perez", 30)
let Juana = new Persona("Juana", "López", 25)
let Juan = new Persona("Juan", "García", 35)

console.log(typeof Pepe) // typeof es una función que me devuelve el tipo de dato de una variable

console.log("#######################################")

//B. Expresión de la clase Casa
const Hogar = class{
  constructor(provincia, ciudad, direccion, cantDormitorios, precio){
    this.provincia = provincia
    this.ciudad = ciudad
    this.direccion = direccion
    this.cantDormitorios = cantDormitorios
    this.precio = precio
  }
  
}

// Instanciamos un objeto de la clase Hogar
let miCasa = new Hogar("Buenos Aires", "CABA", "San Martín 200", 4, 1000000)

console.table(miCasa)

console.log("#######################################")

class Mate{

  material = "madera"
  precio = 10000


}

let miMate = new Mate()
console.log(miMate)

// Lanza error porque Pepito no es de la class Auto y no puede usar los métodos de otra clase
//Pepito.avanzar()