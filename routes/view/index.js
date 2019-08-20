var db = require("../../models");



module.exports = {

	fetchAll:function(req, res) {
		db.Article.find({})
			.then(function(art) {
				var articlesObj = {
					articles: art
				};
				res.render("index", articlesObj);
			})
		//This is the error handling
			.catch(function(err) {
				res.json(err);
			});
	},
	fetchSaved:function(req, res) {
		db.Article.find({"saved":"true"})
			.then(function(art) {
				var articlesObj = {
					articles: art
				};
				res.render("saved", articlesObj);
			})
		//This is the error handling
			.catch(function(err) {
				res.json(err);
			});
	}
};