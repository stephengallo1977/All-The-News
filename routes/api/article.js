var db = require("../../models");

module.exports = {
	// The Routes for all Articles
	all: function(req, res) {
		db.Article.find({})
			.then(function(articles) {
				res.json(articles);
			})
		//The error handling
			.catch(function(err) {
				res.json(err);
			});
	},

	// The route for deleting all Articles
	deleteAll: function(req, res) {
		db.Article.remove(
		).then(function(articles) {
			res.json(articles);
		})
		//The error handling
			.catch(function(err) {
				res.json(err);
			});
	},

	// The route for updating save value
	updateSave: function(req, res) {
		var bod = req.body;
		db.Article.update(req.body)
			.then(function(data) {
				return db.Article.findOneAndUpdate(
					{_id: req.params.id}, 
					{$set: { saved: bod.saved }} 
				);
			})
			.then(function(article) {
				res.json(article);
			})
			.catch(function(err) {
				res.json(err);
			});
	},

	// The route for specific Article and note
	findOne: function(req, res) {
		db.Article.findOne({_id: req.params.id})
			.populate("note")
			.then(function(articles) {
				res.json(articles);
			})
		//The error handling
			.catch(function(err) {
				res.json(err);
			});
	},

	// The route for saving & updating the Article's note
	postOne: function(req, res) {
		db.Note.create(req.body)
			.then(function(newNote) {
				return db.Article.findOneAndUpdate(
					{_id: req.params.id}, 
					{$set: { note: newNote._id }}
				);
			})
			.then(function(article) {
				res.json(article);
			})
			.catch(function(err) {
				res.json(err);
			});
	}
};