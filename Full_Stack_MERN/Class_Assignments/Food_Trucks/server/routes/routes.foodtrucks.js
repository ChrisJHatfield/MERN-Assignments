const FoodtruckController = require('../controllers/controllers.foodtrucks');

module.exports = function(app) {
    app.get('/api/foodtruck', FoodtruckController.allFoodtrucks),
    app.get('/api/foodtruck/:id', FoodtruckController.oneFoodtruck),
    app.put('/api/foodtruck/:id', FoodtruckController.updateFoodtruck),
    app.post('/api/foodtruck', FoodtruckController.createFoodtruck),
    app.delete('/api/foodtruck/:id', FoodtruckController.deleteFoodtruck)
}