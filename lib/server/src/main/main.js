#! /usr/bin/env node

/**
 * TODO Write summary
 * 
 * TODO Write description
 */

// Distribute command-line arguments to whomever needs them
export var program = require("commander");

program
	.usage("<path> [options]")
	.option("-d, --database <path>", "set the database file to use")
	.parse(process.argv);

program.on("--help", function () {
	console.log('');
});

/**
 * TODO Write summary
 * 
 * TODO Write description
 */
(function main() {
	// Start the server
	require("./middleware.js").runtime.listen(8080, function () {
		console.log(`Express listening on port ${this.address().port}`);
	});
	
	// TODO Write description
})();
