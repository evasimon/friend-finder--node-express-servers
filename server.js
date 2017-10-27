// dependencies
var htmlRoutes = require('./app/routing/htmlRoutes')
var apiRoutes = require('./app/routing/apiRoutes')
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serves static files from the css folder
app.use('/css', express.static(path.join(__dirname + '/css')));

// invokes the exported function to set up routes on our app
htmlRoutes(app, path);
apiRoutes(app);

// listenes on port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});