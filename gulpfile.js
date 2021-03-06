"use strict";

var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var clean = require("gulp-clean");
var del = require("del");
var pug = require("gulp-pug");

var src = "./app/";
var target = "./webroot/";

//compile
gulp.task("sass", function () {
  return gulp
    .src([src + "scss/*", "!" + src + "scss/components"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(target + "css/"))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});
gulp.task("fonts", () =>
  gulp.src(src + "fonts/*").pipe(gulp.dest(target + "fonts/"))
);
gulp.task("scripts", function () {
  return gulp
    .src(src + "js/*")
    .pipe(gulp.dest(target + "js/"))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});

gulp.task("images", function () {
  return gulp
    .src(src + "images/**")
    .pipe(gulp.dest(target + "images/"))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});

gulp.task("pages", function () {
  return gulp
    .src(src + "*.html")
    .pipe(gulp.dest(target))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});

gulp.task("clean", function (cb) {
  // return del.sync([target+'/**/*', '!'+target+'/images', '!'+target+'/images/**/*', '!'+target+'index.php']);
  return del([target + "**/*"], cb());
});

gulp.task("watch", function () {
  browserSync.init({
    server: target
  });
  gulp.watch(src + "scss/**/*.scss", gulp.series("sass"));
  gulp.watch(src + "js/*.js", gulp.series("scripts"));
  gulp.watch(src + "images/*", gulp.series("images"));
  gulp.watch(src + "fonts/*", gulp.series("fonts"));
  gulp.watch(src + "**/*.pug", gulp.series("views"));
});

gulp.task("views", function buildHTML() {
  return gulp
    .src(src + "views/*.pug")
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(gulp.dest(target))
    .pipe(
      browserSync.reload({
        // Reloading with Browser Sync
        stream: true
      })
    );
});

//compile and watch
gulp.task(
  "dev",
  gulp.series(
    gulp.parallel("clean", "sass", "scripts", "images", "views", "fonts"),
    "watch"
  ),
  function () { }
);

// default function
gulp.task("default", function () { });
