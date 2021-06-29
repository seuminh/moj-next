const { getSession } = require("next-auth/client")

const protect = async(req, res, next) => {
  const session = getSession()
// if(session) = 
}