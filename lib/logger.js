
//logger is middleware, and it logs what is happening - the request method from user is going to the correct url
//this lets us know that things are working in our terminal during development phase

function logger(req, res, next) {
  console.log(`incoming${req.method} to ${req.url}`)
  next()
}

module.exports = logger 