const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')


//check for valid tokens before certain requests are allowed to pass to the controllers

function secureRoute(req, res, next) {
  if (!req.headers.authorization) return res.status(404).json({ message: 'not authorized' })
  const token = req.headers.authorization.replace('Bearer ', '')
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if (!user) return res.status(401).json({ message: 'Unauthorized 2'  })
      req.currentUser = user
      next()
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized 3' }))
}

module.exports = secureRoute