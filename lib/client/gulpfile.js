"use strict";

const gulp = require("gulp");

gulp.task("build:css", function () {
	var rename  = require("gulp-rename");
	var postcss = require("gulp-postcss");
	
	return gulp.src("src/main/css/styles.css")
		.pipe(postcss([
			require("postcss-import")(),
			require("autoprefixer")()
		]))
		.pipe(rename({
			basename: "bundle"
		}))
		.pipe(gulp.dest("public"));
});

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
