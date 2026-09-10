
// Instanciar un objet fecha
let fecha = new Date();

console.log(fecha.getDate()); // Devuelve el día del mes (1-31)
console.log(fecha.getDay()); // Devuelve el día de la semana (0-6) 0 = Domingo, 1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves, 5 = Viernes, 6 = Sábado
console.log(fecha.getMonth()); // Devuelve el mes (0-11) 0 = Enero, 1 = Febrero, 2 = Marzo, 3 = Abril, 4 = Mayo, 5 = Junio, 6 = Julio, 7 = Agosto, 8 = Septiembre, 9 = Octubre, 10 = Noviembre, 11 = Diciembre
console.log(fecha.getFullYear()); // Devuelve el año (4 dígitos)


// Función para mostrar la fecha, el día y la hora del login del usuario

const Login = () => {

  console.log("Usuario logueado: ");
  mostrarFecha();

}

Login();



function mostrarFecha() { 

  let fecha = new Date();

  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let año = fecha.getFullYear();

  console.log(`Fecha: ${dia}/${mes}/${año}`);
}

mostrarFecha();

