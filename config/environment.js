const port = process.env.PORT || 4000
//whatever we put here is what mongod will name our database. 
//It will create it for you.

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/comic-book-api'

const secret = 'omg, i am a secret'

//exporting an object out which has a port key/value and dbURI key/value
//same name for key and value so can shorthand to one thing
module.exports = { port, dbURI, secret }