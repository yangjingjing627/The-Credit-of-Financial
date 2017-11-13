
    var u = navigator.userAgent;
    window.combineUrl = function(url){
        return location.origin + url;
    }
    window.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
    window.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 

    window.ajaxHost = location.origin; //location.href.substr(0, location.href.length - (location.pathname + location.search).length);

    // 初始化桥
    window.jsbridge = function(callback) {
        if (window.WebViewJavascriptBridge) {
            return callback(WebViewJavascriptBridge);
        } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady', function() {
                    callback(WebViewJavascriptBridge)
                },
                false
            );
        }
        if (window.isIOS) {
            setTimeout(function() {
                if (window.WVJBCallbacks) {
                    return window.WVJBCallbacks.push(callback);
                }
            }, 500)
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function() {
                document.documentElement.removeChild(WVJBIframe)
            }, 0)
        }
    }

    if (!window.isIOS) {
        jsbridge(function(bridge) {
            bridge.init(function(message, responseCallback) {
                console.log('JS got a message', message);
                var data = {};
                responseCallback(data);
            });
        })
    }

    /**
     * @param  {option对象}
     * method: 调用的方法
     * data: 传递的参数
     * callback: 回掉方法
     * @return {[type]}
     */
    function bridgeCallHandler(option) {
        // alert(option.method)
        jsbridge(function(bridge) {
            bridge.callHandler(
                option.method,
                option.data || {},
                function(responseData) {
                    if (option.callback) {
                        option.callback(responseData)
                    }
                }
            );
        })
    }

    window.bridgeCallHandler = bridgeCallHandler;

    //原生调js
    window.bridgeRegisterHandler = function(option) {
        jsbridge(function(bridge) {
            bridge.registerHandler(
                option.method,
                function(data, responseCallback) {
                    if (option.callback) {
                        option.callback(data);
                    }
                    responseCallback(option.data || {});
                }
            );
        })
    }


    /**
     * 显示分享按钮
     */
    window.showShareBtn = function(data) {
        bridgeCallHandler({
            method: "hdb_showShareBtn",
            data: data,
            callback: function(responseData) {
                var res = $.parseJSON(responseData);
                option.callback(res.state);
            }
        })
    }

    /**
     * 弹出对话框
     * @param  {option 对象参数}
     *  title:''        标题
        msg:''          显示文案内容
        state:''        状态值[0:标识Error，1:标识Info] 
        btns:''         ["确定", "取消"] //数组，表示按钮显示文本，及个数
        callback:function(state){}  回掉函数 参数是 点击按钮的索引值 0 | 1 |..
     */
    window.showDialog = function(option) {
        bridgeCallHandler({
            method: "hdb_showDialog",
            data: {
                title: option.title, //显示标题 
                msg: option.msg, //显示文案内容
                state: option.state || 1, //状态值[0:标识Error，1:标识Info] 
                btns: option.btns || ["确定", "取消"] //数组，表示按钮显示文本，及个数
            },
            callback: function(responseData) {
                var res = $.parseJSON(responseData);
                option.callback(res.state);
            }
        })
    }

    /**
     * 调用原生返回键
     * @param  {[type]} option [description]
     * @return {[type]}        [description]
     */
    window.hdbBack = function(option) {
        bridgeCallHandler({
            method: "hdb_back",
            data: {},
            callback: function(responseData) {
                if (option.callback) {
                    option.callback(responseData);
                }
            }
        })
    }

    /**
     * 登录
     * @param  {url 回掉地址 选填}
     * @param  {isNative 是否掉原生页面}
     */
    window.hdbLogin = function(url, isNative) {
        var url = $("input[name=backurl]").val() || url || "/";
        if ($("input[name=backurl]").val()) {
            isNative = false;
        }
        if (is_new_interaction) {
            bridgeCallHandler({
                method: "hdb_login",
                data: {
                    'backurl': !!isNative ? url : combineUrl(url),
                    'isNative': !!isNative
                },
                callback: function(responseData) {
                    console.log("send get responseData from app, data = " + responseData)
                }
            })
        } else {
            if (url.indexOf('?') != -1) {
                url += "&needtoken=true";
            } else {
                url += "?needtoken=true";
            }
            return ajaxHost + "?needapp=login&backurl=" + ajaxHost + url;
        }
    }

    /**
     * 注册
     * @param  {url 回掉地址 选填}
     * @param  {isNative 是否掉原生页面}
     */
    window.hdbRegister = function(url, isNative) {
        var url = $("input[name=backurl]").val() || url || "/";
        if ($("input[name=backurl]").val()) {
            isNative = false;
        }
        bridgeCallHandler({
            method: "hdb_register",
            data: {
                'backurl': !!isNative ? url : combineUrl(url),
                'isNative': !!isNative
            },
            callback: function(responseData) {
                console.log("send get responseData from app, data = " + responseData)
            }
        })
        // jsbridge(function(bridge) {
        //     bridge.callHandler(
        //         'register', {
        //             'backurl': !!isNative ? url : combineUrl(url),
        //             'isNative': !!isNative
        //         }, function(responseData) {
        //             console.log("send get responseData from app, data = " + responseData)
        //         }
        //     );
        // })
    }

    /**
     * 跳转到某个页面
     * @param  {url 回掉地址 选填}
     * @param  {isNative 是否掉原生页面}
     */
    window.hdbBackUrl = function(url, isNative) {
        //'index' ---- 首页
        //'finance' ---- 理财页
        //'my'   -----我的
        if (isNative) {
            bridgeCallHandler({
                method: "hdb_backUrl",
                data: {
                    'url': url
                },
                callback: function(responseData) {
                    console.log("hdbBackUrl:" + url);
                }
            })
            // jsbridge(function(bridge) {
            //     bridge.callHandler(
            //         'backUrl', {
            //             'url': url
            //         }, function(responseData) {
            //             console.log("hdbBackUrl:" + url);
            //         }
            //     );
            // })
        } else {
            location.href = url;
        }
    }
   

    /**
     * 分享
     * @param  {option 分享对象}
     *  title:''        标题
        desc:''       描述
        imgurl:''      分享出去的图片地址
        shareurl:''   分享出去后点击的
        callback:function(isSuccess){}  回掉函数 参数是否分享成功
     */
    window.hdbShare = function(option) {
        if (is_new_interaction) {
            bridgeCallHandler({
                method: "share",
                data: {
                    title: option.title, // 标题
                    desc: option.desc, //描述
                    imgurl: option.imgurl, //分享出去的图片地址
                    shareurl: option.shareurl //分享出去后点击的
                },
                callback: function(responseData) {
                    var res = $.parseJSON(responseData);
                    // res.isSuccess
                    option.callback(!!res.state);
                }
            })
        } else {
            var url = window.ajaxHost + "?needapp=share";
            url += "&title=" + option.title;
            url += "&desc=" + option.desc;
            url += "&imgurl=" + option.imgurl;
            url += "&shareurl=" + option.shareurl;
            return url;
        }
    }
    

    /**
     * 传入的option对象格式
     * {
     *    method:[String],
     *    data:[Object],
     *    callback:[Function]
     * }
     */
    window.callNativePage = function(option) {
        bridgeCallHandler({
            method: 'callNativePage',
            data: option.data,
            callback: function(responseData) {
                console.log('方法回调',responseData);
                if (option.callback) {
                    option.callback(responseData);
                }
            }
        })
    }

    /**
     * 传入的option对象格式
     * 隐藏二级页面分享按钮
     * {
     *    method:[String],
     *    data:[Object],
     *    callback:[Function]
     * }
     */
    window.qbjrShareHide = function(option) {
        bridgeCallHandler({
            method: 'qbjrShareHide',
            data: option.data,
            callback: function(responseData) {
                if (option.callback) {
                    option.callback(responseData);
                }
            }
        })
    }