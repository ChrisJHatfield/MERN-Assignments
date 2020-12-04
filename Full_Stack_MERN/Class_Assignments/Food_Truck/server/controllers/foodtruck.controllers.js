const { Foodtruck } = require('../models/models.foodtruck');

module.exports = {
    createTruck: (req, res) => {
        Foodtruck.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    findAllFoodtrucks: (req, res) => {
        Foodtruck.find({})
            .then(allTrucks => res.json(allTrucks))
            .catch(err => res.json(err))
    },
    getOneFoodtruck: (req, res) => {
        Foodtruck.findOne({_id: req.params.id})
            .then(oneTruck => {
                if( oneTruck === null){
                    res.status(500).json({error: "Food truck does not exist."})
                } else {
                    res.json(oneTruck)
                }
            })
            .catch(err => res.json(err))
    },
    updateFoodtruck: (req, res) => {
        Foodtruck.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true, useFindAndModify: false})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    addReview: (req, res) => {
        Foodtruck.findOne({ _id: req.params.id, 'reviews.name': req.body.name})
            .then(data => {
                if(data == null){
                    return Foodtruck.findOneAndUpdate({_id: req.params.id}, { $addToSet: { reviews: req.body}}, {new:true, runValidators:true, useFindAndModify: false})
                } else {
                    res.status(400).json({ errors:{ reviews:{ errors:{ name:{ message: "Name already exists on this trucks review"}}}}});
                }
            })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    deleteFoodtruck: (req, res) => {
        Foodtruck.findOneAndDelete({ _id: req.params.id })
            .then(confirmDel => req.body(confirmDel))
            .catch(err => res.json(err))
    }
}