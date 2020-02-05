//this is our control file. It needs to be able to talk to the chef taking the orders

const Comic = require('../models/comic')



function index(req, res) {
  Comic
    .find()
    .then(foundComics => res.status(200).json(foundComics))
    .catch(err => console.log(err))
} 

function create(req, res) {
  req.body.user = req.currentUser
  Comic 
    .create(req.body)
    .then(createdComic => res.status(201).json(createdComic))
    .catch(err => console.log(err))
}

function show(req, res) {
  Comic
    .findById(req.params.id)
    .then(comic => res.status(200).json(comic))
    .catch(err => console.log(err))
}

function update(req, res) {
  Comic
    .findById(req.params.id)
    .then(comic => {
      if (!comic) return res.status(404).json({ message: 'comic not found' })
      Object.assign(comic, req.body)
      return comic.save()
    }) 
    .then(updatedComic => res.status(202).json(updatedComic))
    .catch(err => console.log(err))
}

function destroy(req, res) { 
  Comic
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.json(err))
}

function commentCreate(req, res, next) { 
  req.body.user = req.currentUser
  Comic
    .findById(req.params.id) 
    .then(comic => {
      if (!comic) return res.status(404).json({ message: 'Not Found' }) 
      comic.comments.push(req.body) 
      return comic.save() 
    })
    .then(dinosaur => res.status(201).json(dinosaur)) 
    .catch(next)
}

function commentDelete(req, res) { 
  Comic
    .findById(req.params.id)
    .then(comic => {
      if (!comic) return res.status(404).json({ message: 'Not Found' })
      const comment = comic.comments.id(req.params.commentId) 
      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'Unauthorized' })
      } else {
        return comic.save().then(() => res.sendStatus(204))
      }
    })
    .catch(err => res.json(err)) 
}


module.exports = { index, create, show, update, destroy, commentCreate, commentDelete }