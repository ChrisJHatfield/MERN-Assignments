const Joke = require("../models/jokes.models");

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.getSingleJoke = (req, res) => {
    Joke.find({_id: req.params._id })
        .then(singleJoke => res.json({ joke: singleJoke }))
        .catch(err => res.json({ message: "Somthing went wrong", error: err }));
};

module.exports.getRandomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => { 
            const randomId = Math.floor(Math.random() * allJokes.length);
            res.json(allJokes[randomId]);
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.update({_id: req.params._id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.remove({_id: req.params._id })
        .then(deletedResult => res.json({ result: deletedResult }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};