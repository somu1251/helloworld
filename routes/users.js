var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  users(req, res);
});

const users = (req, res) => {
  return res.send('Success');
};
module.exports = {
  router,
  users
}