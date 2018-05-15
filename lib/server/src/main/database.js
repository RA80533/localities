/**
 * TODO Write summary
 * 
 * TODO Write description
 */

var knex = require("knex")({
	client: "sqlite3",
	connection: {
		filename: require("./main.js").program.args[1]
	}
});

var bookshelf = require("bookshelf")(knex);
