

const getHome = (req, res) => {
  res.render("home", 
    { title: "Home" })
}

const getProducts = (req, res) => {
  res.render("productos", 
    { title: "Productos" })
}

const getAbout = (req, res) => {
  res.render("nosotros", 
    { title: "Nosotros" })
}

const getContact = (req, res) => {
  res.render("contacto", 
    { title: "Contacto" })
}

const getLogin = (req, res) => {
  res.render("login", 
    { 
      title: "Login",
      customStyle: "login"
    })
}

const getPromos = (req, res) => {
  res.render("promos", 
    { title: "Promociones" })
}

const getRegister = (req, res) => {
  res.render("registro", 
    { 
      title: "Registro", 
      customStyle: "login"
    })
}



export { 
  getHome, 
  getProducts,
  getAbout,
  getContact,
  getLogin,
  getPromos,
  getRegister
}

