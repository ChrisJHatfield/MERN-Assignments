const mongoose = require('mongoose');

// mongoose.set('runValidators', true);
mongoose.connect('mongodb://localhost/authorsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then( () => console.log("Database connection is established"))
    .catch( err => console.log("There was a problem connecting to the database:", err))