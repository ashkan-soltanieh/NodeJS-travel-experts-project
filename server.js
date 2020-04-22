// express and path are needed for creating route and generating server
const express = require('express');
const path = require('path');
// body parser used for parsing submitted form data in order/register/ contact us forms
const bodyParser = require('body-parser');
// creating app object from express module
const app = express();
// index is main route that manages all other page routers
const routes = require('./routes/index');
// used for parsing data submitted from forms
app.use(bodyParser.urlencoded({ extended: true }));
// view engine (ejs) is used to make pages dynamic
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
// static files are defined here
app.use(express.static(path.join(__dirname, './static')));

// server on / listens to routes() wich is set ti index
app.use('/', routes());
// server setup
server = app.listen(8000, () => {
  console.log('port is listening on', server.address().port);
});
