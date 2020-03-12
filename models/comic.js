const mongoose = require('mongoose')

//Schema's for my comic book. The blueprint for them which the users have to match in 
//order to have their comic books validated


//the comment schema - which attaches the user Schema to it
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true }, 
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true } 
}, {
  timestamps: true
})



const comicsSchema = new mongoose.Schema({
  //setting my rules for the database.
  name: { type: String, required: true, unique: true },
  writer: { type: String, required: true },
  publisher: { type: String, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true },
  synopsis: { type: String, required: true, maxlength: 500 },
  comments: [commentSchema], 
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true } 
},  {
  timestamps: true
})

module.exports = mongoose.model('Comic', comicsSchema)

