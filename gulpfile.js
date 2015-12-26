var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulpconfig')();

var $ = require('gulp-load-plugins')({lazy: true});

//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');
//var util = require('gulp-util');
//var gulpPrint = require('gulp-print');
//var gulpIf = require('gulp-if');

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