const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true , unique: true },
  email: { type: String, required: true , unique: true },
  password: { type: String, required: true }
})

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
  //bcyrpt hashes the password our user is trying to login with the same 
  //one it hashed in the DB when they registered, 
  //it then compares them for us to see if they match, 
  //and returns true or false depending on the outcome

}

//setting a virtual field on the model, 
//this only exists when a user is first created 
//and is not saved to the database
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })
userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match') //throwing an error back to the controller
    }
    next()
  })
userSchema
  .pre('save', function hashPassword(next) { //this happens before it is saved
    if (this.isModified('password')) { //if the password has been created or changed
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8)) //rehash it
    }
    next() //move onto saving
  })

module.exports = mongoose.model('User', userSchema)