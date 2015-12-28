

module.exports = function(){
    var clientPath = './src/client';
    var clientAppPath = clientPath + '/app';

    var gulpConfig = {
        //all js files
        allJs:['./src/**/*.js', './*.js'],

        //less files
        less: [clientPath + '/styles/styles.less'],

        //css temp dir
        temp: './.tmp',

        getDefaultWiredepOptions:  getDefaultWiredepOptions,
        index: clientPath + '/index.html',
        js: [
            clientAppPath + '/**/*.module.js',
            clientAppPath + '/**/*.js',
            '!' + clientAppPath + '/**/*.spec.js'
        ],
        client: clientPath,

        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..' //relative to index.html
        }

    };

    return gulpConfig;

    function getDefaultWiredepOptions(){
        return {
            bowerJson: gulpConfig.bower.json,
            directory: gulpConfig.bower.directory,
            ignorePath: gulpConfig.bower.ignorePath
        };
    }
};