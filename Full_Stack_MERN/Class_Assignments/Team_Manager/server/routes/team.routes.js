const PlayerController = require('../controllers/team.controllers');

module.exports = function(app) {
    app.get('/api/player', PlayerController.allPlayers);
    app.post('/api/player', PlayerController.addPlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer)
}