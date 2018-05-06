"use strict";

const gulp = require("gulp");

gulp.task("build:javascript", function () {
	var babel  = require("rollup-plugin-babel");
	var rollup = require("rollup");
	
	return rollup.rollup({
		input: "src/main/javascript/main.js",
		plugins: [
			require("rollup-plugin-node-resolve")(),
			require("rollup-plugin-commonjs")(),
			babel({
				exclude: "node_modules/**"
			})
		]
	}).then(function (bundle) {
		return bundle.write({
			file: "public/bundle.iife.js",
			format: "iife"
		});
	});
});
