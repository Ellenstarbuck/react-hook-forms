const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { port, dbURI } = require('./config/environment')
const app = express()
const logger = require('./lib/logger')
const router = require('./config/router')

//- index.js
//Set up mongoose, databaseURI - make sure this connects. If they both work don’t forget to add your body-parser next. 
//use mongo to make the connection 
//the connect method needs ONE thing, but rest is optional. Needs the address that mongo server is running on our machine
//can take a callfunction
mongoose.connect(
  dbURI, 
  { useNewUrlParser: true , useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected')
  })

app.use(express.static(`${__dirname}/dist`))  
//turns our requests into json 
app.use(bodyParser.json())

//logger

app.use(logger)

//TEST it works in insomina
//app.get('/', (req, res) => {
//  res.json({ message: 'HEY GIRL' })
//})

app.use('/api', router)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))






app.listen(port, () => console.log(`Express is up and running on port ${port}`))