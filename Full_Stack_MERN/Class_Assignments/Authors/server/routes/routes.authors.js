const AuthorController = require('../controllers/controllers.mongoose');

module.exports = function(app) {
    app.get('/api/author', AuthorController.allAuthors),
    app.get('/api/author/:id', AuthorController.getOneAuthor),
    app.put('/api/author/:id', AuthorController.editAuthor),
    app.post('/api/author', AuthorController.createAuthors),
    app.delete('/api/author/:id', AuthorController.deleteAuthor)
}