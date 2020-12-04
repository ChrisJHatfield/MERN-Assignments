const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

require('./server/config/config.mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
require('./server/routes/foodtruck.routes')(app);

app.listen(port, () => console.log("The server running at port: ", port));