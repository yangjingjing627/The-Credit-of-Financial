var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var merge = require('webpack-merge');
var WebpackChunkHash = require('webpack-chunk-hash');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');

var oEntry = baseWebapckConfig.entry,
    aEntry = Object.keys(oEntry);

var aPlugin = [
    new webpack.optimize.CommonsChunkPlugin({
        names: ['common','vendor'],
        minChunks: 2
    }),
    new ExtractTextPlugin(config.prod.path.style + '[name].[contenthash:8].css',{
        allChunks: true
    }),
    new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV: JSON.stringify('production')
        },
        __DEV__: JSON.stringify(JSON.parse('false'))
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new LodashModuleReplacementPlugin(),
    new AssetsPlugin({
      filename: config.sDest + '/map.json',
      prettyPrint: true,
      includeManifest: false
    }),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }),
    // new webpack.optimize.OccurenceOrderPlugin(true),    
    // new WebpackChunkHash({algorithm: 'md5'}),
    // DedupePlugin disabled. It breaks module IDs across builds (even when using recordsPath option)
    //new webpack.optimize.DedupePlugin() 
];

//html webpack
aEntry.forEach(function(item) {
    aPlugin.push(new HtmlWebpackPlugin({
        filename: item + '.html',
        template: config.sBase + 'pages/' + item + '/' + item + '.ejs',
        chunks: [item, 'vendor', 'common'],
        inject: 'body',
        title: item + 'Page',
        minify: {
            removeComments: false,
            collapseWhitespace: false,
            removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
    }));
});

module.exports = merge(baseWebapckConfig, {
    entry: {
        vendor: ['vue', 'vuex', 'vue-router', 'vuex-router-sync','vue-resource']
    },
    output: {
        path: config.sDest,
        filename: config.prod.path.script + '[name].[chunkhash:8].js',
        chunkFilename: config.prod.path.script + "[name].[chunkhash:8].js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style','css!postcss')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!postcss!sass')},
            {
                test: /\.(svg)(\?.*)?$/,
                loaders: [
                    'url?limit=2048&name=/static/images/[name].[ext]'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loaders: [
                    'url?limit=2048&name=/static/images/[name].[ext]',
                    'image-webpack'
                ]
            }
        ]
    },
    imageWebpackLoader: {
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: "65-90",
            speed: 4
        },
        svgo:{
            plugins: [
                {
                removeViewBox: false
                },
                {
                removeEmptyAttrs: false
                }
            ]
        }
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('style','css!postcss'),
            sass: ExtractTextPlugin.extract('css!postcss!sass')
        }
    },
    plugins: aPlugin,
    devtool: 'cheap-module-source-map'
});