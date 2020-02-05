const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/comic-book-api'
const secret = 'omg, i am a secret'
module.exports = { port, dbURI, secret }