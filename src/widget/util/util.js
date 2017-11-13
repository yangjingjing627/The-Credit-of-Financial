export function datetime (date) {
    var now = +new Date;
    var text='';
    var distance = now - date;
    if(distance <= 86400*1000 ){
        text = "大约" + Math.round((now - date)/3600000)+ "小时以前";
    }else if(distance < 86400000*30){
        text = Math.round((now - date)/86400000)+ "天以前";
    }else if(distance < 86400000*30*12){
        text = Math.round((now - date)/86400000/30)+ "个月以前";
    }else{
        text = "一年以前";
    }
    return text;
}

export function fmtDate(_date, fmt) {
    fmt = fmt || 'yyyy-MM-dd hh:mm';
    var date = new Date(_date)
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export function fFormatUtcDate(sUtcDateString){
    return sUtcDateString.replace('T',' ').replace('Z','').replace(/-/g,'/');
}

export function fConvertTimeToDate(time){
    var d = new Date(time);
    return d.toLocaleDateString();
}

export function fConvertTimeToMonthDay(time){
    var aDate = fConvertTimeToDate(time).split('/');
    if(aDate.length > 2){
        return aDate[1] + '月' + aDate[2] + '日';
    }
    else{
        return '';
    }
}

/**
 * 取url参数
 * @example ?id=12345
 * @return 12345
 */
export function queryString(key) {
    var reg = new RegExp('(?:^|&)' + key + '=([^&]+)(?=&|$)'),
    qs = location.search || location.hash;
    qs = qs.slice(qs.indexOf('?') + 1);
    return (key = qs.match(reg)) == null ? null : key[1];
};

export function fClearObject(obj){
    for(var p in obj){
        var item = obj[p];
        if(item === null || typeof(item) === undefined || (Object.prototype.toString.call(item) === '[object Number]' && isNaN(item))){
            delete obj[p];
        }
    }
    return obj;
}

export function fFormatError(err){
    if(err.data){
        if(err.data.msg){
            err = err.data.msg;
        }
        else if(typeof(err.data) == 'string'){
            err = err.data;
        }
        else{
            err = JSON.stringify(err.data);
        }
    }
    else if(err.message){
        err = 'message:' + err.message + '\r\nstack:' + err.stack;
    }
    else if(typeof(err) === 'string'){
        err = err || '';
    }
    else{
        err = JSON.stringify(err)
    }
    return err;
}

export function fNotify(vue,msg){
    if(!msg){
        throw new Error('need vue instance param');
        return;
    }
    vue.$toast(msg,{
        duration:2000,
        className:['custom-toast'],
        transition:'fade'
    });
}

export function fNotifyError(vue,err){
    if(!err){
        throw new Error('need vue instance param');
        return;
    }
    fNotify(vue,fFormatError(err));
}

export function fToQueryString(obj,aExclude){
    aExclude = aExclude || [];
    const qs = Object.keys(obj).reduce((pre,cur,index) => {
        return pre + (aExclude.indexOf(cur) > -1 ? '' : (cur + '=' + obj[cur] + '&'));
    },'')
    return qs.slice(0,-1);
}

// 格式化日期
export function dateFormat(value){
    if(value){
        return value.substring(0,10);    
    }
    return '';
}

// 千分位金额
export function toThousands(s, n){
    if(s){
        n = n >= 0 && n <= 20 ? n : 2;
        s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
        var l = s.split('.') [0].split('').reverse(),
            r = s.split('.') [1];
        var  t = '';
        for (var i = 0; i < l.length; i++)
        {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
        }
        if(n==0){
            return t.split('').reverse().join(''); 
        }else{
            return t.split('').reverse().join('') + '.' + r;
        }
    }
    return '0.00';
};

// 时间戳转日期
export function formatDateTime(inputTime) {
    if(inputTime){
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;    
        var d = date.getDate();    
        d = d < 10 ? ('0' + d) : d;    
        var h = date.getHours();  
        h = h < 10 ? ('0' + h) : h;  
        var minute = date.getMinutes();  
        var second = date.getSeconds();  
        minute = minute < 10 ? ('0' + minute) : minute;    
        second = second < 10 ? ('0' + second) : second;   
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
    } 
}; 