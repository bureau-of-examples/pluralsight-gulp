var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');
var gulpPrint = require('gulp-print');
var gulpIf = require('gulp-if');
var args = require('yargs').argv;

/* jshint ignore:start */
var abc = 111
/* jshint ignore:end */

gulp.task('vet', function(){
    log('Running jshint and jscs...');
    return gulp.src(['./src/**/*.js', './*.js'])
        .pipe(gulpIf(args.verbose, gulpPrint()))
        .pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(jshint.reporter('fail'));
});


///////////////////////
function log(msg){
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