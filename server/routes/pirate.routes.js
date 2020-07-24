const PirateController = require('../controllers/pirate.controller');

module.exports = function(app){
    app.get('/api', PirateController.index);
    app.post('/api/pirates', PirateController.create);
    app.get('/api/pirates', PirateController.findAll);
    app.delete('/api/pirates/:id', PirateController.delete);
    app.put('/api/pirates/:id', PirateController.update);
    app.get('/api/pirates/:id', PirateController.findById);
}