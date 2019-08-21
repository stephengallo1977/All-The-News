# All-The-News

Whenever a user visits a site, this app  scrapes stories from a news website, and displays them for the user. Each scraped article can be saved to this application database. Thise app can scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).

Users are able to leave comments on the articles displayed and revisit them later. The comments can be saved to the database as well and associated with their articles. Users can also  delete comments left on articles. All stored comments are visible to every user.

This app uses Mongoose, Cheerio, Handlebars, Express, Express-Handlebars, Axios and MongoDB to allow user to scrape NPR's website, and allow users to save articles and add comments to saved articles.
