// DEPENDENCIES ---
//Set up server
var express = require("express");
//noSQl database
var mongoose = require("mongoose");
// This will make automatic console.logs
var logger = require("morgan");
// This set Handlebars.
var exphbs = require("express-handlebars");



//This creates express server
var app = express();

// This is for automatic console logging
app.use(logger("dev"));

// This parses request body as JSON
// This is for deployment
app.use(express.urlencoded({ extended: false }));
// This is for development

app.use(express.json());

//This uses static folder
app.use(express.static("public"));

// When deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// This is for deployment
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// goose.connect(MONGODB_URI, { useNewUrlParser: true });

// This starts the handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// ---

// This Import the routes
var routes = require("./routes");
app.use(routes);


var PORT = process.env.PORT || 3000;
// This starts server listening on port 3000
app.listen(PORT, function() {
	console.log("App running on port " + PORT );
});