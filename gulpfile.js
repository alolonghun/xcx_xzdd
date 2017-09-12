let path = require('path');
let gulp = require('gulp');
let del = require('del');
let ugjs = require('gulp-uglify');
let watch = require('gulp-watch');
let named = require('vinyl-named');
let postcss = require('gulp-postcss');
let webpackStream = require('webpack-stream');
let webpack = require('webpack');
let watchPath = require('gulp-watch-path');
let chalk = require('chalk');
let rename = require('gulp-rename');
let ifElse = require('gulp-if-else');
let base64 = require('gulp-base64');
let autoprefixer = require('autoprefixer');
let precss = require('precss');
let cssnano = require('cssnano');
let sass = require('gulp-sass');
let less = require('gulp-less');
let runSequence = require('run-sequence');
let replace = require('gulp-replace');
let notify = require('gulp-notify');
let plumber = require('gulp-plumber');
let isBuild = false;
let ES5DEV = true;

let webpackConfig = {
    resolve: {
        root: path.join(__dirname, 'node_modules'),
        extensions: ['', '.js', '.scss', '.css'],
    },
    output: {
        filename: '[name].js',
    },
    module: {
        preLoaders: [
            // { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
        ],
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        ],
    },
    plugins: [],
    babel: { // 配置babel
        'presets': ['es2015', 'stage-2'],
        plugins: ['transform-runtime'],
    },
};

let processes = [
    autoprefixer({ browsers: ['last 2 version', 'safari 5', 'opera 12.1', 'ios 6', 'android 4'] }),
    precss,
    cssnano,
];

let src = {
    images: './src/**/*.{png,jpg,jpeg,svg}',
    js: './src/**/*.js',
    sass: './src/**/*.{scss,less,sass}',
    wxss: './src/**/*.wxss',
    wxml: './src/**/*.wxml',
    json: './src/**/*.json',
    views: './src/**/*.{html,wxml}',
};
let dist = './dist/';
gulp.task('clean', () => {
    del([
        'dist/**/*',
    ]);
});
gulp.task('dev', () => {
    webpackConfig.plugins.push(new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'production',
    }));
    build(false, () => {
        gulp.start('views', 'sass', 'wxss', 'images', 'js', 'json');
    });
});
gulp.task('dev:es5', () => {
    build(true, () => {
        gulp.start('views', 'sass', 'wxss', 'images', 'js:es5', 'json');
    });
});

gulp.task('build', () => {
    isBuild = true;
    webpackConfig.plugins.push(new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'production',
    }));
    build(false, () => {
        setTimeout(() => {
            console.log();
            console.log(chalk.green('	Build success!'));
        }, 0);
    });
});
gulp.task('build:es5', () => {
    isBuild = true;
    ES5DEV = false;
    build(true, () => {
        setTimeout(() => {
            console.log();
            console.log(chalk.green('	Build success!'));
        }, 0);
    });
});

gulp.task('views', () => {
    watch([src.views], (e) => {
        views();
    });
});
gulp.task('json', () => {
    watch([src.json], () => {
        json();
    });
});

gulp.task('sass', () => {
    watch([src.sass], (event) => {
        let paths = watchPath(event, src.sass, dist);

        if (paths.srcPath.indexOf('.scss') > -1 || paths.srcPath.indexOf('.sass') > -1) {
            return compileSass(src.sass, 'dist');
        }

        compileLess(src.sass, 'dist');
    });
});
gulp.task('wxss', () => {
    watch([src.wxss], (event) => {
        let paths = watchPath(event, src.wxss, dist);
        compileWxss(paths.srcPath, paths.srcDir.replace('src', 'dist')); // 编译 .wxss
    });
});
gulp.task('images', () => {
    watch([src.images], () => {
        images();
    });
});

gulp.task('js', () => {
    watch([src.js], (event) => {
        let paths = watchPath(event, src.js, dist);
        compileJS(paths.srcPath);
    });
});
gulp.task('js:es5', () => {
    watch([src.js], (event) => {
        let paths = watchPath(event, src.js, dist);
        compileJSes5(paths.srcPath, paths.srcDir.replace('src', 'dist'));
    });
});

gulp.task('sass:build', () => {
    return compileSass(src.sass, dist);
});
gulp.task('wxss:build', () => {
    return compileWxss(src.wxss, dist);
});
gulp.task('js:build', () => {
    return compileJS([src.js]);
});
gulp.task('js:es5:build', () => {
    return compileJSes5([src.js], dist);
});

function compileJS(path) {
    return gulp.src(path)
        .pipe(named((file) => {
            let path = JSON.parse(JSON.stringify(file)).history[0];
            let sp = path.indexOf('\\') > -1 ? 'src\\' : 'src/';
            let target = path.split(sp)[1];
            return target.substring(0, target.length - 3);
        }))
        .pipe(webpackStream(webpackConfig))
        .on('error', function(err) {
            this.end();
        })
        .pipe(ifElse(isBuild === true, ugjs))
        .pipe(gulp.dest(dist));
}

function compileJSes5(path, dist) {
    return gulp.src(path)
        .pipe(replace('NODE_ENV', ES5DEV ? 'dev' : 'production'))
        .pipe(ifElse(isBuild === true, ugjs))
        .pipe(gulp.dest(dist));
}

function compileWxss(src, dist) {
    return gulp.src(src)
        // .pipe(base64({
        //     extensions: ['png', /\.jpg#datauri$/i],
        //     maxImageSize: 10 * 1024, // bytes,
        // }))
        .pipe(postcss(processes))
        .pipe(gulp.dest(dist));
}

function compileSass(src, dist) {
    return gulp.src(src)
        .pipe(sass().on('error', sass.logError))
        // .pipe(base64({
        //     extensions: ['png', /\.jpg#datauri$/i],
        //     maxImageSize: 10 * 1024, // bytes,
        // }))
        .pipe(ifElse(isBuild === true, () => {
            return postcss(processes);
        }))
        .pipe(rename({
            extname: '.wxss',
        }))
        .pipe(gulp.dest(dist));
}

function compileLess(src, dist) {
    return gulp.src(src)
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
        .pipe(less())
        // .pipe(base64({
        //     extensions: ['png', /\.jpg#datauri$/i],
        //     maxImageSize: 10 * 1024, // bytes,
        // }))
        .pipe(ifElse(isBuild === true, () => {
            return postcss(processes);
        }))
        .pipe(rename({
            extname: '.wxss',
        }))
        .pipe(gulp.dest(dist));
}

function images() {
    gulp.src(src.images)
        .pipe(gulp.dest(dist));
}

function views() {
    gulp.src(src.views)
        .pipe(rename({
            extname: '.wxml',
        }))
        .pipe(gulp.dest(dist));
}

function json() {
    gulp.src(src.json)
        .pipe(gulp.dest(dist));
}

function build(ises5, cb) {
    let jsbuild = ises5 ? 'js:es5:build' : 'js:build';
    runSequence('clean', jsbuild, 'sass:build', 'wxss:build', () => {
        views();
        images();
        json();
        cb && cb();
    });
}
