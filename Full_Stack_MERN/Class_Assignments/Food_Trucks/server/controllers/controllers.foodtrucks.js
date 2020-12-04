const { Foodtruck } = require('../models/models.foodtrucks');

module.exports.createFoodtruck = (req, res) => {
    const { truckName, style, description } = req.body;
    Foodtruck.create({
        truckName,
        style,
        description
    })
        .then(foodtruck => {
            console.log(foodtruck)
            res.json(foodtruck)
        })
        .catch(err => res.status(400).json(err))
}

module.exports.allFoodtrucks = (req, res) => {
    Foodtruck.find({})
        .then(allTrucks => res.json(allTrucks))
        .catch(err => console.log(err))
}

module.exports.oneFoodtruck = (req, res) => {
    Foodtruck.findOne({_id: req.params.id})
        .then(oneTruck => res.json(oneTruck))
        .catch(err => res.json(err))
}

module.exports.updateFoodtruck = (req, res) => {
    Foodtruck.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updateTruck => res.json(updateTruck))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteFoodtruck = (req, res) => {
    Foodtruck.findOneAndDelete({_id: req.params.id})
        .then(confirmDel => res.json(confirmDel))
        .catch(err => res.json(err))
}