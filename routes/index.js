var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

router.post('/', function(req, res, next) {
    var storm = {
        name: req.body.name,
        date: new Date()
    }
    knex('storm')
        .insert(storm, 'id')
        .then(ids => {
            res.json(ids[0])
        })
});

router.post('/entry/:id', function(req, res, next) {
    var entry = {
        storm_id: req.body.storm_id,
        content: req.body.content
    }
    knex('entry')
        .insert(entry, 'id')
        .then(ids => {
            res.json(ids[0])
        })
});

router.get('/entry/:id', (req, res) => {
    knex('entry')
        .where('storm_id', req.params.id)
        .then(entry => {
            res.json({
                data: entry
            });
        });
});

router.get('/:id', (req, res) => {
    knex('storm')
        .where('id', req.params.id)
        .then(storm => {
            res.json({
                data: storm
            });
        });
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    knex('storm')
        .where('id', id)
        .del()
        .then(() => {
            console.log("post " + id + " deleted");
        });
});

module.exports = router;
