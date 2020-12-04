const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopledb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

})
    .then( () => console.log("Database connection established"))
    .catch( err => console.log("There was an error connecting to the database", err))