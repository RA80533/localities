/**
 * TODO Write summary
 * 
 * TODO Write description
 */

import express from "express";
import vhost   from "vhost";

const api = require("./routes.js").api;
const www = require("./routes.js").www;

/**
 * TODO Write summary
 */
export const runtime = (function () {
	var controller = express();
	
	controller.use(vhost("api.localhost", api));
	controller.use(vhost("www.localhost", www));
	
	// Route requests along the default path to the WWW route
	controller.use(vhost("localhost", www));
	
	return controller;
})();
