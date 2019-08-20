var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Mongoose Note constructor
var NoteSchema = new Schema({
	title: String,
	body: String
});

// This will create our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// This exports the Note model
module.exports = Note;