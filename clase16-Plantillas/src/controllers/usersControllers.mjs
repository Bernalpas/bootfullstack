

const registerUser = (req, res) => {

  console.log(req.body)

  res.status(200).json({
    message: "User registered successfully",
    user: req.body.name,
    role: req.body.role,
  })

  
}


export { 
  registerUser 
}