const express = require('express')
const config = require('config')
const app = express()
const port = config.get("port")
const cors = require("cors");
const DbFactory = require('./db/dbFactory.js');

app.use(cors());

const dbFactory = new DbFactory();
const db = dbFactory.db;
console.log("Usando base de datos " + db.type);

app.get('/movies', async (req, res) =>  {
  res.header("Access-Control-Allow-Origin", "*");
  const list = await db.getAll("movies");
  res.json(list);
})

app.get('/genres', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json( await db.getAll("genres"));
})

app.delete('/movie/:id', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  await db.deleteItem("movies", req.params.id);
  console.log("movie " + req.params.id + "deleted");
})

app.get('/entorno', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(process.env.UNA_VARIABLE_DE_ENTORNO);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


