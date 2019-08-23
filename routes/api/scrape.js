var db = require("../../models");
var axios = require("axios");
var cheerio = require("cheerio");
const router = require("express").Router();

router.post("/", (req, res)=>{
	//This grabs the html body of npr
	axios.get("https://www.npr.org/sections/food/").then(function(response) {
  
		// This loads the Response into cheerio and save it to a variable
		var $ = cheerio.load(response.data);
		$("h2.title").each(function(i, element) {
			var result = [];

			var title = $(element).children().text();
			var link = $(element).children().attr("href");
			var summary = $(element).parent().children().text();
			result.push({
				title: title,
				link: link,
				summary: summary
			});
			// This creates a new Article using the `result` object built from scraping
			db.Article.create(result)
				.then(function(dbArticle) {
					// View the added result in the console
					console.log(dbArticle);
				})
				.catch(function(err) {
					// If an error occurred, send it to the client
					// return res.json(err);
					res.redirect("/")
				});
		});
		res.redirect("/")
		//res.send("articles found :)");
	});
})

module.exports = router;

