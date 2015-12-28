var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulpconfig')();
var del = require('del');
var wiredep = require('wiredep').stream; //this is not a gulp plugin so need to get the stream
var port = process.env.PORT || config.defaultPort;

var $ = require('gulp-load-plugins')({lazy: true});

/* jshint ignore:start */
var abc = 111
/* jshint ignore:end */

gulp.task('vet', function(){
    log('Running jshint and jscs...');
    return gulp.src(config.allJs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('styles', ['clean-styles'], function(){
    log('Compiling Less to CSS...');
    return gulp.src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        //.on('error', logError)
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function(done){
    var toBeRemoved = config.temp + '/**/*.css';
    clean(toBeRemoved, done);
});

gulp.task('watch-styles', function(){
    gulp.watch([config.less], ['styles']);
});

gulp.task('wiredep', function(){
    log('Wire up the bower css js and our app js into the html');
    return gulp.src(config.index)
        .pipe(wiredep(config.getDefaultWiredepOptions()))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function(){
    log('Wire up the app css into the html and call wiredep');
    return gulp.src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client));
});

gulp.task('serve-dev', ['inject'], function(){
    var isDev = true;

    var nodeOptions = {
        script: config.mainJs,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.serverFiles]
    };
    return $.nodemon(nodeOptions)
        .on('restart', function(ev){
            log('*** nodemon restarted');
            log('files changed on restart:\n' + ev);
        })
        .on('start', function(){
            log('*** nodemon started');
        })
        .on('crash', function(){
            log('*** nodemon crashed: script crashed for some reason');
        })
        .on('exit', function(){
            log('*** nodemon exited cleanly');
        });
});

///////////////////////
function log(msg){
    var util = $.util;
    if(typeof(msg) === 'object'){
        for(var item in msg){
            if(msg.hasOwnProperty(item)){
                util.log(util.colors.blue(msg[item]));
            }
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}

function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del.sync(path);
    done();
}

//use gulp-plumber instead
//function logError(error) {
//    log('*** Start of Error ***');
//    log(error);
//    log('*** End of Error ***');
//    this.emit('end');
//}