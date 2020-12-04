const FoodtruckController = require('../controllers/foodtruck.controllers');

module.exports = app => {
    app.get('/api/foodtruck', FoodtruckController.findAllFoodtrucks),
    app.get('/api/foodtruck/:id', FoodtruckController.getOneFoodtruck),
    app.put('/api/foodtruck/:id', FoodtruckController.updateFoodtruck),
    app.put('/api/foodtruck/:id/review', FoodtruckController.addReview),
    app.post('/api/foodtruck', FoodtruckController.createTruck),
    app.delete('/api/foodtruck/:id', FoodtruckController.deleteFoodtruck)
}