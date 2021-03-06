const { Tracking } = require('../models');

const trackingController = {


    getAllTracking(req, res) {
        Tracking.find()
        .select('-__v')
        .then((dbTackedData) => {
            res.json(dbTackedData);

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },


    getOneTracking(req, res) {

        Tracking.findOne({ username: req.params.username  })
        .select('-__v')
        .then((dbTackedData) => {
            res.json(dbTackedData);

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
 
    },

    createTracking(req, res) {
        // res.send(Tracking.create(req.body));
        Tracking.create(req.body)
       .then((dbTackedData) => {
        res.json(dbTackedData);
       })
       .catch((err) => {
        console.log(err);
        res.status(500).json(err);
       });

    }


 
};

module.exports = trackingController;