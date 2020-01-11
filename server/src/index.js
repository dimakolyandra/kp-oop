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


async function get_all_order_items() {
  console.log("Getting all order items...");
  return await db.any("SELECT * from order_data");
}

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


app.post('/product_add', async (req, res) => {
  console.log("Insertin order items... " + req.body.order_items);
  try {
    await db.none("INSERT INTO ORDER_DATA(order_items) VALUES ($1)", req.body.order_items)
    console.log("Success insert");
  } catch(error) {
    console.log("Error when insert error: " + error);
  } 
  res.send(await get_all_order_items());
})


app.post('/product_delete', async (req, res) => {
  console.log("Deleting order item... " + req.body.order_id);
  try {
    await db.none("DELETE FROM ORDER_DATA where order_id = $1", req.body.order_id);
    console.log("Success delete");
  } catch(error) {
    console.log("Error when delete error: " + error);
  } 
  res.send(await get_all_order_items());
})


app.get('/product', async (req, res) => {
  console.log("Getting all order items...");
  res.send(await get_all_order_items());
})