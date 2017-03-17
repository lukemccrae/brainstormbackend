var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

router.post('/', function(req, res, next) {
    var storm = {
        name: req.body.name,
        date: new Date()
    }
    if (req.body.name) {
        knex('storm')
            .insert(storm, 'id')
            .then(ids => {
                res.json(ids[0])
            })
    }
});

router.post('/entry/:id', function(req, res, next) {
    var entry = {
        storm_id: req.body.storm_id,
        content: req.body.content
    }
    if (req.body.content) {
        console.log('posting', entry);
        knex('entry')
            .insert(entry, 'id')
            .then(ids => {
                res.json(ids[0])
            })
    } else {
        console.log('empty content')
    }
});

router.post('/voteChat/:id', function(req, res, next) {
    console.log(req.body);
    var chat = {
        storm_id: req.body.storm_id,
        content: req.body.content,
        date: new Date()
    }
    console.log('posting', chat);
    knex('chat')
        .insert(chat, 'id')
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

router.get('/chat/:id', (req, res) => {
    knex('chat')
        .where('storm_id', req.params.id)
        .then(chat => {
            res.json({
                data: chat
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
            console.log("storm " + id + " deleted");
        });
});

router.delete('/entry/:id', (req, res) => {
    const id = req.params.id;
    knex('entry')
        .where('id', id)
        .del()
        .then(() => {
            console.log("entry " + id + " deleted");
        });
});

router.put('/entry/upvote/:id', (req, res) => {
    const id = req.params.id;
    const update = {
        votes: req.body.votes
    }
    knex('entry')
        .where('id', id)
        .update(update, 'id')
        .then(() => {
            console.log('entry ' + id + 'upvoted');
        })
})

router.put('/entry/:id', (req, res) => {
    const id = req.params.id;
    const entry = {
        content: req.body.content
    }
    console.log(entry);
    knex('entry')
        .where('id', id)
        .update(entry, 'id')
        .then(() => {
            console.log('entry ' + id + ' updated');
        });
});

module.exports = router;
