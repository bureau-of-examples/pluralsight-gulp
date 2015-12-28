

module.exports = function(){
    var clientPath = './src/client';
    var gulpConfig = {
        //all js files
        allJs:['./src/**/*.js', './*.js'],

        //less files
        less: [clientPath + '/styles/styles.less'],

        //css temp dir
        temp: './.tmp'
    };

    return gulpConfig;
};