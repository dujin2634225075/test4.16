let gulp = require("gulp");
let sass = require("gulp-sass");
let server = require("gulp-webserver");
gulp.task("devcss", () => {
    return gulp.src("./src/sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
})
gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(server({
            port: 8081,
            open: true,
            livereload: true
        }))
})
gulp.task("watch", () => {
    return gulp.watch("./src/sass/**/*.scss", gulp.series("devcss"))
})
gulp.task("default", gulp.series("devcss", "server", "watch"))