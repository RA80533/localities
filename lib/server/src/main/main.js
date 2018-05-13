#! /usr/bin/env node

/**
 * TODO Write summary
 * 
 * TODO Write description
 */

// var runtime = express();

var runtime = require("./routes.js");

runtime.use(vhost("api.localhost", api));
runtime.use(vhost("www.localhost", www));

// Route requests along the default path to the WWW route
runtime.use(vhost("localhost", www));

// Start the server
runtime.listen(8080, function () {
	console.log(`Express listening on port ${this.address().port}`);
});
