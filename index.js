const express = require('express');
const routerApi = require('./routes')
const cors = require('cors');

const app = express();
app.use(express.json());
const port = 3080;

app.use(cors());


app.get('/', (req, res) =>{
  res.send("Welcom to Equilibrium API")
})

routerApi(app);

app.listen(port, () =>{
  console.log("it is working on port 3080")
})

