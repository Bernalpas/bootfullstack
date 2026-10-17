
// Capturamos el formulario
const productForm = document.querySelector('#product-form');

// Agregamos un evento submit al formulario
productForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  // Creamos un objeto del form
  const product = new FormData(productForm);

  // Capturamos los datos del form
  const nameProduct = product.get('name');
  const priceProduct = product.get('price');
  const stockProduct = product.get('stock');
  const brandProduct = product.get('brand');
  const categoryProduct = product.get('category');
  const sortDescProduct = product.get('sortDesc');

  // Creamos un objeto con los datos del producto
  let dataproduct = {
    name: nameProduct,
    price: priceProduct,
    stock: stockProduct,
    brand: brandProduct,
    category: categoryProduct,
    sortDesc: sortDescProduct
  }

  // Enviamos los datos al backend
  fetch('http://localhost:8080/product/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataproduct)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

});