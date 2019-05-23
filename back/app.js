module.exports = function (menu) {
  let express = require('express');
  let bodyParser = require('body-parser');
  let routes = require('./routes')();
  let app = express();

  let port = process.env.PORT;
	  if (port === null || port === '' || port === undefined) {
	    port = 8000;
	  }
	  app.set('port', port);
  app.use(express.static(__dirname + '/../public'));
  app.use(function (req, res, next) {
    res.set('X-Powered-By', 'test');
    next();
  });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/', routes.get);

  app.get('/getData', routes.getData);

  app.use(function (req, res) {
    res.status(404);
    res.send('404 - страница не найдена');
  });

  app.use(function (err, req, res, next) {
    console.error(err.stack);

    res.status(500);
    res.render('500 - server error');
  });

  return app;
};
