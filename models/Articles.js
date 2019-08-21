var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// This is the Mongoose Article constructor
var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	link: {
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	saved: {
		type: Boolean,
		default: false
	},
	// This will be used to connect to the notes
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// This exports the Article model
module.exports = Article;