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


app.get('/posts', async (req, res) => {
  try {
  	const person = await db.one("SELECT * from person where login = $1", "admin");	
  	res.send([{
  		name: person.login,
  		pwd: person.pwd,
  		role: person.role
  	}]);
  } catch (error) {
  	console.log(error);
  }
 })