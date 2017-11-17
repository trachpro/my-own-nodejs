

var express = require('express'),
    os = require('os'),
    compression = require('compression'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    favicon = require('serve-favicon'),
    interfaces = os.networkInterfaces(),
    addrs = [],
    db = require('./app/lib/db');

// var app = express();

console.log('Connection has been established successfully.');

// var model_list = utils.loadModels();
var app = express()
    , http = require('http').createServer(app)
// require('./config/express')(app, config)
// require('./config/routes')(app, utils, model_list)

var model = require('./app/models/food')(db.sequelize, db.Sequelize);

var ctrls = {};
ctrls.food = require('./app/controllers/food')(model);

var name = "food";
// console.log('Route /' + name + " completed.");
app.get('/api/' + name + '/:limit([0-9]+)/:page([0-9]+)', ctrls[name].list); // get list with page
app.get('/api/' + name, ctrls[name].list); // get list with default page = 1
app.get('/api/' + name + '/:id([0-9a-f]+)', ctrls[name].get); // get by id
app.post('/api/' + name + '/search', ctrls[name].search); // search
app.post('/api/' + name, ctrls[name].insert); // insert
app.put('/api/' + name + '/:id([0-9a-f]+)', ctrls[name].update); // update
app.delete('/api/' + name + '/:id([0-9a-f]+)', ctrls[name].delete); // delete

app.listen(8000);