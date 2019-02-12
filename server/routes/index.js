const listingsController = require('../controllers').listings;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Listings API!',
    }));

    app.post('/api/listings', listingsController.create);
};
