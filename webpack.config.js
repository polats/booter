const path = require('path');


/* ---------------
 * Main config
 * We will place here all the common settings
 * ---------------*/
var config = {
    mode: 'production',
    entry: 
    {
        dist: './src/index.ts'
    },    
    resolve: {
        extensions: ['.ts', '.js']
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                  configFile: 'tsconfig.json'
                }
            }
        ],
    }
}

var configDist = Object.assign({}, config, {
    output: {
        library: 'booter',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: 'booter.js',
        path: path.resolve(__dirname, 'dist'),
    }
});


var configDocs = Object.assign({}, config, {
    output: {
        library: 'booter',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: 'booter.js',
        path: path.resolve(__dirname, 'docs/lib'),
    }
});


module.exports = [configDist, configDocs];