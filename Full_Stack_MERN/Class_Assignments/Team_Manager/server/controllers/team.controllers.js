const { Team } = require('../models/team.models');

module.exports.addPlayer = (req, res) => {
    const { playerName, position } = req.body;
    Team.create({
        playerName,
        position
    })
        .then(player => {
            console.log(player);
            res.json(player)
        })
        .catch(err => res.status(400).json(err))
}

module.exports.allPlayers = (req, res) => {
    Team.find({})
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) => {
    Team.findByIdAndDelete({_id: req.params.id})
        .then(confirmDel => res.json(confirmDel))
        .catch(err => res.json(err))
}