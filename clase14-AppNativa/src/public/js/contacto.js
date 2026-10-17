
console.log('Contacto cargado');

// Capturamos el formulario
let formulario = document.getElementById('contact-form');

// Agregamos el evento add.addEventListener
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  // Capturamos los datos 
  let nameUser = document.getElementById('name').value;
  let emailUser = document.getElementById('email').value;
  let phoneUser = document.getElementById('phone').value;
  let commentsUser = document.getElementById('comments').value;
  let subjectUser = document.getElementById('subject').value;

  // Creamos un objeto con los datos del usuario
  let dataUser = {
    name: nameUser,
    email: emailUser,
    phone: phoneUser,
    comments: commentsUser,
    subject: subjectUser
  };

  // Enviamos los datos al backend
  fetch('http://localhost:8080/user/contacto', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataUser)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

});
