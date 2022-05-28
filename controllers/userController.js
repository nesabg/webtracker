const jwt = require("jsonwebtoken")

const authorization = async (req, res, next) => {
  
  if (!req.headers.authorization) {
    return res.status(403).json("You are not authorized to see this page")
  }

  const token = req.headers.authorization.split(" ")[1]

  try{
    const status = await jwt.verify(token, process.env.JWT_SECRET)        
  }catch(e){
    return res.status(403).json("You are not authorized to see this page")
  }
  next()
}

module.exports = {
  authorization
}
