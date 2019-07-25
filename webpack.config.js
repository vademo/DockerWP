
/* === dont forget to import scss to main.js file === */
/* ===> import './main.scss'; <=== */

var path = require("path");

var LiveReloadPlugin = require('webpack-livereload-plugin');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: '../style/[chunkhash].style.css'
});
module.exports = {
    entry:[ './project/wp-content/themes/salient-child/scripts/index.js',  './project/wp-content/themes/salient-child/sass/main.scss'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[chunkhash].bundle.js',
        path: path.resolve('./project/wp-content/themes/salient-child/', 'dist')

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use:[
                        {
                            loader: "css-loader" // translates CSS into CommonJS

                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS

                        }

                    ]

                })
            }

        ]

    },
    plugins: [
        new LiveReloadPlugin({delay: 3000}),
        extractPlugin,
        function() {
            this.plugin("done", function(statsData) {
                const directory = "project/wp-content/themes/salient-child/dist/";
                const directoryStyle = "project/wp-content/themes/salient-child/style/";
                var stats = statsData.toJson();
                if (!stats.errors.length) {
                    fs.writeFile("project/wp-content/themes/salient-child/scriptversion.php", '<?php $script_name="'+stats.assetsByChunkName.main[0]+'"; $style_name="'+stats.chunks[0].hash+'.style.css";', function(){
                        return true;
                    });
                }
                fs.readdir(directory, (err, files) => {
                    if (err) throw err;
                    for (const file of files) {
                        if(file != stats.chunks[0].hash+'.bundle.js' && file != stats.chunks[0].hash+'.bundle.js.map' ){
                            fs.unlink(path.join(directory, file), err => {
                                if (err) throw err;
                            });
                        }
                    }
                });
                fs.readdir(directoryStyle, (err, files) => {
                    if (err) throw err;
                    for (const file of files) {
                        if(file != stats.chunks[0].hash+'.style.css' && file != stats.chunks[0].hash+'.style.css.map'){
                            fs.unlink(path.join(directoryStyle, file), err => {
                                if (err) throw err;
                            });
                        }
                    }
                });
            })
        },
    ]
};
