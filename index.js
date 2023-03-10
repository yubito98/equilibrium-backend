const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send("Hola, este es mi servidor con express")
})

app.get('/categories', (req, res) =>{
  res.json({
    name:'Hi, I am the categories endpoind'
  })
})


app.listen(port, () =>{
  console.log("it is working on port 3000")
})