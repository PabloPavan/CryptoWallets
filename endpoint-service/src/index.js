const express = require('express');

const app = express()

app.use(express.json()); // pra poder usar json
app.use(express.urlencoded({ extended:false })); // passar parametro url tipo get

require('./controllers/authController')(app); 

app.listen(3000, () => console.log(`Running...!`))
