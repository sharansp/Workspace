var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
gulp.task("default", function (argument) {
	// body...
	console.log("gulp gulp");
});


gulp.task("compile:js", function (argument) {
	var bundle = browserify("./src/js/main.js").bundle();
	return bundle.pipe(source("main.js")).pipe(gulp.dest("./public/assets/js"));
	console.log("compiled");
});

gulp.task("watch", function (argument) {
	//gulp.watch(["./src/js/main.js"],["compile:js"])
	//multiple js file watch glob!
	gulp.watch(["./src/js/**/*.js"],["compile:js"])
	console.log("gulp watch done");
});







