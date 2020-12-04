const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then( () => console.log("Database connection established"))
    .catch( err => console.log("There was a problem connecting to the database", err))