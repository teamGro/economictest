let data = require('../models/data');

module.exports = function () {
  let routes = {};

  routes.get = function (req, res) {
    res.status(200).send('index.html');
  };

  routes.getData = function (req, res) {
    res.status(200).send(data);
  };

  return routes;
};
