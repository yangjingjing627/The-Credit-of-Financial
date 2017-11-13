var path = require('path');
var proxy = require('./proxy');

var sBase = './src/';
module.exports = {
    sBase: sBase,
    sDist: '/dist',
    sDest: './dist',
    entry: {
        index: sBase + 'pages/index/index.js'
    },
    dev: {
        proxy: proxy,
        env: '',
        port: 8086,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
    },
    pre: {
        
    },
    prod: {
        path: {
            script: '/static/scripts/',
            style: '/static/style/'
        }
    },
    designWidth:750,
    baseSize:16,
    enableRem:true,
    // postcss-plugin-px2rem 的配置，详细描述参考：https://github.com/ant-tool/postcss-plugin-px2rem
    // 要修改源码index.js的propBlackList配置，使用===代替indexOf
    px2remOptions: {
        rootValue: 750 / 16,
        unitPrecision: 5,
        propWhiteList: [],
        propBlackList: ['border-bottom','border-top','border-left','border-right','border','filter'],
        selectorBlackList: ['ignore'],
        ignoreIdentifier: false,
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
    },
    px2rem:{
        remUnit:750 / 16,
        threeVersion:false,
        remVersion:true,
        baseDpr:2,
        remPrecision:6,
        dprList:[2]
    }
}