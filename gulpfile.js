"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
const sourcemaps = require("gulp-sourcemaps");
const gulpIf = require("gulp-if");
const del = require("del");
const browserSync = require("browser-sync").create();
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const rollup = require("gulp-rollup");
const minify = require("gulp-minify");
const remember = require("gulp-remember");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const webp = require("gulp-webp");
const htmlmin = require("gulp-htmlmin");

let isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV == "development";

gulp.task("less", () => {
  return (
    gulp
      .src("frontend/styles/*.less", { since: gulp.lastRun("less") })
      .pipe(
        plumber({
          errorHandler: notify.onError(function(err) {
            return {
              title: "less",
              message: err.message
            };
          })
        })
      )
      .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(remember())
      .pipe(less())
      .pipe(concat("styles.css"))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      //.pipe(cssmin())
      .pipe(gulp.dest("public/styles"))
  );
});

gulp.task("js", () => {
  return gulp
    .src("frontend/scripts/**/*.js")
    .pipe(
      plumber({
        errorHandler: notify.onError(err => {
          return {
            title: "js",
            message: err.message,
            err: err
          };
        })
      })
    )
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(
      rollup({
        input: "./frontend/scripts/main.js",
        output: {
          format: "iife"
        }
      })
    )
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(minify())
    .pipe(gulp.dest("./public/js"));
});

gulp.task("getData", () => {
  return gulp
    .src("frontend/scripts/src/downloadData.js")
    .pipe(minify())
    .pipe(gulp.dest("public/js"));
});

gulp.task("retina", () => {
  return gulp
    .src("frontend/scripts/src/retina.min.js")
    .pipe(gulp.dest("public/js"));
});

gulp.task("clean", () => {
  return del(["public/styles", "public/js"]);
});

gulp.task("copy", () => {
  return gulp
    .src("frontend/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("public"));
});

gulp.task("watch", () => {
  gulp.watch("frontend/**/*.less", gulp.series("less"));
  gulp.watch("frontend/*.html", gulp.series("copy"));
  gulp.watch("frontend/scripts/**/*.js", gulp.series("js"));
  gulp.watch("frontend/scripts/src/downloadData.js", gulp.series("getData"));
});

gulp.task(
  "build",
  gulp.series("clean", "getData", gulp.parallel("less", "copy", "js", "retina"))
);

gulp.task("serve", () => {
  browserSync.init({
    server: "public"
  });

  browserSync.watch("public/**/*.*").on("change", browserSync.reload);
});

// gulp.task('imgMin', gulp.series('images', 'webp'));

gulp.task("dev", gulp.series("build", gulp.parallel("watch", "serve")));
