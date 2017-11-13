var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var aPlugin = [
    new OpenBrowserPlugin({ url: 'http://localhost:' + config.dev.port }),
    //for dev show static images
    new CopyWebpackPlugin([{ from: 'src/static', to: 'static' }]),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        __DEV__: JSON.stringify(JSON.parse('true'))
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

var oEntry = baseWebapckConfig.entry,
    aEntry = Object.keys(oEntry);

aEntry.forEach(function(item){
    aPlugin.push(new HtmlWebpackPlugin({
        filename: item + '.html',
        template: config.sBase + 'pages/' + item + '/' + item + '.ejs',
        chunks: [item],
        inject: 'body',
        title: item + ' Page'
    }));
});

module.exports = merge(baseWebapckConfig,{
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css?importLoaders=1!postcss'},
            {test: /\.scss$/, loader:'style!css?importLoaders=2!postcss!sass'},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url?limit=10000&name=/static/images/[name].[ext]'
            }
        ]
    },
    vue: {
        loaders: {
            css: "style!css?importLoaders=1!postcss",
            sass: "style!css?importLoaders=2!postcss!sass"
        }
    },
    plugins: aPlugin,
    devtool: 'cheap-source-map',
    devServer: {
        contentBase:        config.sDist,
        host:               '0.0.0.0',
        port:               config.dev.port,
        hot:                true,
        historyApiFallback: true,
        inline:             true,
        progress:           true,
        colors:             true,
        proxy: config.dev.proxy  
    }
});
