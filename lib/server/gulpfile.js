"use strict";

const gulp = require("gulp");

gulp.task("build:javascript", function () {
	var babel = require("gulp-babel");
	
	return gulp.src("src/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("bin"));
});
