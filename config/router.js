const router = require('express').Router()
const comics = require('../controller/comics')
const users = require('../controller/auth')
const secureRoute = require('../lib/secureRoute')


router.route('/comics')
  .get(comics.index)
  .post(secureRoute, comics.create)

router.route('/comics/:id') 
  .get(comics.show)
  .put(secureRoute, comics.update)
  .delete(secureRoute, comics.destroy)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)  

router.route('/comics/:id/comments')
  .post(secureRoute, comics.commentCreate)

router.route('comics/:id/comments/:commentId')  
  .delete(secureRoute, comics.commentDelete)

module.exports = router  