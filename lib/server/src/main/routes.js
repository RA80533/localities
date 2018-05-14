/**
 * TODO Write summary
 * 
 * TODO Write description
 */

import express   from "express";
import pathUtils from "path";

// Obtain the command-line arguments
const program = require("./main.js").program;

// Resolve the path to the static directory
var staticDir = pathUtils.resolve(__dirname, program.args[0]);

/**
 * TODO Write summary
 */
export const api = (function () {
	var router = express.Router();
	
	router.route("/users")
		/**
		 * TODO Write summary
		 * 
		 * TODO Write description
		 * 
		 * @param req TODO Write description
		 * @param res TODO Write description
		 */
		.post(function (req, res) {
			// TODO Finish function
		});
	
	return router;
})();

/**
 * TODO Write summary
 */
export const www = (function () {
	var router = express.Router();
	
	// TODO Write description
	router.use(express.static(staticDir));
	
	/**
	 * TODO Write summary
	 * 
	 * TODO Write description
	 * 
	 * @param req
	 * @param res
	 */
	router.get('*', function (req, res) {
		// Don't wildcard route any would-be files
		if (req.path.includes('.') === true) {
			res.status(404).send();
			
			return;
		}
		
		// TODO Render `index.html`
		
		// Route leftovers to the SPA
		res.sendFile(`${staticDir}/index.html`);
	});
	
	return router;
})();
