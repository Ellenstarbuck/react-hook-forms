const router = require('express').Router()
const comics = require('../controller/comics')
const users = require('../controller/auth')
const secureRoute = require('../lib/secureRoute')

//showing comics and making new comics
router.route('/comics')
  .get(comics.index)
  .post(secureRoute, comics.create)

//getting individual comics, updating and edit comics the user the has made and deleting them
router.route('/comics/:id') 
  .get(comics.show)
  .put(secureRoute, comics.update)
  .delete(secureRoute, comics.destroy)

//register and login
router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)  

//backend request for comments - making and deleting
router.route('/comics/:id/comments')
  .post(secureRoute, comics.commentCreate)

router.route('comics/:id/comments/:commentId')  
  .delete(secureRoute, comics.commentDelete)

module.exports = router  