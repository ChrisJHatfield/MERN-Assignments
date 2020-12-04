const ProductController = require('../controllers/controllers.product');

module.exports = function(app) {
    app.get('/api/product', ProductController.allProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.post('/api/product', ProductController.createProduct);
    app.put('/api/product/:id', ProductController.editOneProduct);
    app.delete('/api/product/:id', ProductController.deleteOneProduct);
}