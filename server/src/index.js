const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const pgp = require('pg-promise')();
const config = require('./config/config')

const db = pgp(config.db)
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || config.port,
  () => console.log(`Server start on port ${config.port} ...`))


app.post('/login', async (req, res) => {
  try {
  	const person = await db.any(
  		"SELECT * from person where login = $1 and pwd = $2",
  		[req.body.login, req.body.pwd]
  	);
  	console.log(person);
  	res.send([{
  		success: person.length > 0 ? true : false, 
  		role: person.length > 0 ? person[0].role : "null"
  	}]);
  } catch (error) {
  	console.log(error);
  }
 })