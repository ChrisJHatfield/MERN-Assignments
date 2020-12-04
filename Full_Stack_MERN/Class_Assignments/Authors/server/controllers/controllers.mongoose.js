const { Author } = require('../models/models.authors');

module.exports.createAuthors = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(author => {
            console.log(author);
            res.json(author);
        })
        .catch(err => res.status(400).json(err))
}

module.exports.allAuthors = (req, res) => {
    Author.find({})
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))
}

module.exports.editAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updateAuthor => {res.json(updateAuthor)})
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.findOneAndDelete({_id: req.params.id})
        .then(confirmDelete => req.params(confirmDelete))
        .catch(err => res.json(err))
}