var express = require('express');
var router = express.Router();
var StudentProfileModel = require('../model/model');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  if (!req.body) {
    console.log('Post body content must not be empty!');
    return res.status(400).send({error: 'Post body content must not be empty!'});
  }
  StudentProfileModel.create(req.body)
    .then(data => {
      if (!data) {
        res.status(400).send({error: 'Error: Failed to add student profile'});
      } else {
        res.status(200).send(data);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({error: 'Error: Failed to add student profile'});
    });
});

module.exports = router;
