"use strict";

const gulp = require("gulp");

gulp.task("build:javascript", function () {
	var babel = require("gulp-babel");
	
	return gulp.src("src/main/**.js")
		.pipe(babel())
		.pipe(gulp.dest("bin"));
});
