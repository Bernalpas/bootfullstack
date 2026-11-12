

const getHome = (req, res) => {
  res.render("home")
}

const getProducts = (req, res) => {
  res.render("productos")
}


export { 
  getHome, 
  getProducts 
}

