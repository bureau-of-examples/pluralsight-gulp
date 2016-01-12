

module.exports = function(){
    var clientPath = './src/client';
    var clientAppPath = clientPath + '/app';
    var serverPath = './src/server';
    var temp = './.tmp';

    var gulpConfig = {
        //all js files
        allJs:['./src/**/*.js', './*.js'],

        //less files
        less: clientPath + '/styles/styles.less',

        //css temp dir
        temp: temp,

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
        },

        css: temp +  '/styles.css',

        defaultPort: 7203,
        mainJs: './src/server/app.js',
        serverFiles: serverPath,
        browserReloadDelay: 1000,
        build: './build',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: clientPath + '/images/**/*.*',
        html: clientPath + '/**/*.html',
        htmlTemplates: [clientAppPath + '/**/*.html'],
        templateCache: {
            file: 'template.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
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