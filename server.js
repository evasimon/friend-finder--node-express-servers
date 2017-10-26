var htmlRoutes = require('./app/routing/htmlRoutes')
var apiRoutes = require('./app/routing/apiRoutes')
var express = require('express');
var bodyParser = require('body-parser');

// Sets up the Express App
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// invoke the exported function to set up routes on our app
htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});