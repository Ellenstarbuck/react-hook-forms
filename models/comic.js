const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
  text: { type: String, required: true }, 
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true } 
}, {
  timestamps: true
})



const comicsSchema = new mongoose.Schema({
  //set my rules for database.
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

