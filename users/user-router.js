const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {
  const { id } = req.params;

  db('posts as p')
    .join('users as u', 'u.id', '=', 'p.user_id')
    .where({ user_id: id })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => res.send(err))
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;