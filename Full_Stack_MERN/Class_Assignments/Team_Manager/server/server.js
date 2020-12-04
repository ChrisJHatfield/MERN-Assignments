const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
require('./routes/team.routes')(app);

app.listen(port, () => console.log("The server is running at port: ", port));