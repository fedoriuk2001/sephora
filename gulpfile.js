const gulp = require("gulp");
const { parallel, series } = require("gulp");

const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create(); //https://browsersync.io/docs/gulp#page-top
const nunjucksRender = require("gulp-nunjucks-render");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const embedSvg = require("gulp-embed-svg");
const data = require("gulp-data");
const noop = require("gulp-noop");
const newer = require("gulp-newer");
const size = require("gulp-size");
const postcss = require("gulp-postcss");
var deploy = require("gulp-gh-pages");
var gcmq = require("gulp-group-css-media-queries");
var rename = require("gulp-rename");
const replace = require("gulp-replace");
var customFileExtract = require("./gulp-custom-file-extract");

const dir = {
  src: "./",
  build: "dist/",
};

const BASE_URL = "/sephora";

// const getDataForFile = require('./mockData')

// /*
// TOP LEVEL FUNCTIONS
//     gulp.task = Define tasks
//     gulp.src = Point to files to use
//     gulp.dest = Points to the folder to output
//     gulp.watch = Watch files and folders for changes
// */

function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}

function requireUncachedProd(module) {
  func = requireUncached(module);
  return (file) => {
    return {
      ...func(file),
      rootPath: BASE_URL,
    };
  };
}

// Optimise Images
function imageMin(cb) {
  gulp.src("img/**").pipe(imagemin()).pipe(gulp.dest("dist/img"));
  cb();
}

// Copy all HTML files to Dist
// function copyHTML(cb) {
//   gulp.src("src/*.html")
//     .pipe(gulp.dest("dist"));
//   cb();
// }

function copyFonts(cb) {
  gulp.src("./fonts/**/*.*").pipe(gulp.dest("dist/fonts"));
  cb();
}

function copyJs(cb) {
  gulp.src("./js/vendor/*.*").pipe(gulp.dest("dist/js/vendor"));
  cb();
}

// Minify HTML
// function minifyHTML(cb) {
//   gulp.src("src/*.html")
//     .pipe(gulp.dest("dist"))
//     .pipe(
//       htmlmin({
//         collapseWhitespace: true
//       })
//     )
//     .pipe(gulp.dest("dist"));
//   cb();
// }

// Scripts
function js(cb) {
  gulp
    .src("./js/*js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
  cb();
}

// Compile Sass
/**************** CSS task ****************/
const cssConfig = {
  src: dir.src + "scss/app.scss",
  watch: dir.src + "scss/**/*",
  build: dir.build + "css/",
  sassOpts: {
    // sourceMap       : devBuild,
    // imagePath       : '/images/',
    precision: 5,
    // errLogToConsole : true,
    // outputStyle: "compressed",
  },

  postCSS: [
    // require('usedcss')({
    //   html: ['./dist/copy.html']
    // }),
    require("postcss-assets")({
      loadPaths: ["images/"],
      basePath: dir.build,
    }),
    require("autoprefixer")({
      browsers: ["> 1%"],
    }),
    require("cssnano"),
  ],
};

function css(cb) {
  gulp
    .src(cssConfig.src)
    .pipe(sass(cssConfig.sassOpts).on("error", sass.logError))
    .pipe(gcmq())
    // .pipe(customFileExtract({ layout: true }))
    .pipe(postcss(cssConfig.postCSS))
    .pipe(replace("/images/", `./img/`))
    .pipe(replace("/fonts/", `../fonts/`))
    .pipe(size({ showFiles: true }))
    .pipe(rename("pre.css"))
    .pipe(gulp.dest("dist/css"))
    // Stream changes to all browsers
    .pipe(browserSync.stream());

  gulp
    .src(cssConfig.src)
    .pipe(sass(cssConfig.sassOpts).on("error", sass.logError))
    .pipe(gcmq())
    .pipe(customFileExtract({ layout: false }))
    .pipe(postcss(cssConfig.postCSS))
    .pipe(replace("/images/", `./img/`))
    .pipe(replace("/fonts/", `../fonts/`))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest("dist/css"))
    // Stream changes to all browsers
    .pipe(browserSync.stream());

  cb();
}

// Process Nunjucks
function nunjucks(cb) {
  gulp
    .src("./index.html")
    .pipe(data(requireUncached("./mockData")))
    .pipe(
      nunjucksRender({
        path: ["src/includes/", "."], // String or Array
      })
    )
    .on("error", (...args) => console.log("sasha args", args))
    .pipe(
      embedSvg({
        root: ".",
        selectors: ".inline-svg",
        xmlMode: false,
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest("dist"));
  cb();
}

function nunjucksMinify(cb) {
  gulp
    .src("./index.html")
    .pipe(data(requireUncached("./mockData")))
    .pipe(
      nunjucksRender({
        path: ["src/includes/", "."], // String or Array
      })
    )
    .on("error", (...args) => console.log("sasha args", args))
    .pipe(replace("/css/", `./css/`))
    .pipe(replace("/js/", `./js/`))
    .pipe(replace("/images/", `./img/`))
    .pipe(replace('"/img/', `"./img/`))
    .pipe(
      embedSvg({
        root: ".",
        selectors: ".inline-svg",
        xmlMode: false,
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest("dist"));
  cb();
}

// Watch Files
function watch_files() {
  browserSync.init({
    port: 3015,
    server: {
      baseDir: "dist/",
    },
  });
  gulp.watch("scss/**/*.scss", css);
  gulp.watch("img/**/*.*", imageMin);
  gulp.watch("js/*.js", js).on("change", browserSync.reload);
  gulp.watch("./*.html", nunjucks).on("change", browserSync.reload);
  gulp.watch("./mockData/index.js", nunjucks).on("change", browserSync.reload);
  gulp
    .watch(["src/includes/**/*.html"], nunjucks)
    .on("change", browserSync.reload);
}

// Default 'gulp' command with start local server and watch files for changes.
exports.default = series(
  nunjucks,
  css,
  js,
  copyFonts,
  copyJs,
  imageMin,
  watch_files
);

// 'gulp build' will build all assets but not run on a local server.
exports.build = parallel(nunjucksMinify, css, js, copyFonts, copyJs, imageMin);
