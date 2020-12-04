const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/truckdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then( () => console.log("Connection to database established"))
    .catch(err => console.log("There was a problem connecting to the database: ", err))