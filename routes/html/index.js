const router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
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
})

router.get("/saved", (req, res)=>{
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
})

module.exports = router;

// module.exports = {

// 	fetchAll:function(req, res) {
// 		db.Article.find({})
// 			.then(function(art) {
// 				var articlesObj = {
// 					articles: art
// 				};
// 				res.render("index", articlesObj);
// 			})
// 		//This is the error handling
// 			.catch(function(err) {
// 				res.json(err);
// 			});
// 	},
// 	fetchSaved:function(req, res) {
// 		db.Article.find({"saved":"true"})
// 			.then(function(art) {
// 				var articlesObj = {
// 					articles: art
// 				};
// 				res.render("saved", articlesObj);
// 			})
// 		//This is the error handling
// 			.catch(function(err) {
// 				res.json(err);
// 			});
// 	}
// };