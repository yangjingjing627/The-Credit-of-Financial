import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import cookies from 'js-cookie';
// import VeeValidate from 'vee-validate';
import 'static/css/quick-layout.css';
import 'static/css/site.css';
import 'static/css/variables.scss';
import './index.scss';
import router from './router.js';
//import FastClick from 'fastclick';
import App from './app.vue';
import cHeader from './widget/cHeader.vue';
import {types} from 'index/vuex/mutation-types'
import toast from 'widget/toast';
import loading from 'widget/loading';
import overlay from 'widget/overlay';
import {Alert,Confirm,Box} from 'widget/modal/index.js';
import VueQriously from 'widget/vue-qriously';
import 'widget/util/jsbridge';  // 桥接
/*
* 引入mint-ui
*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component('c-cHeader',cHeader);
Vue.use(VueRouter);
Vue.use(toast);
Vue.use(loading);
Vue.use(overlay);
Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Box);
// Vue.use(VeeValidate);
Vue.use(VueQriously);
/*
* 引入mint-ui
*/
Vue.use(MintUI)

// window.addEventListener('load', () => {
//   FastClick.attach(document.body)
// });

// console
// if(__DEV__){
    // const eruda = require('eruda');
    // eruda.init();
// }

//ajax 全局处理
Vue.http.interceptors.push((request, next)  => {
    request.timeout = 1800000;
    if(!request.data || !request.data.noloading){
        Vue.loading(true);
    }
    next((res) => {
        if(!request.data || !request.data.noloading){
            Vue.loading(false);
        }
        if(res.status >= 500){
            // redirectTo500(router);
            Vue.toast('network error',{
                duration:2000
            })
        }
        else if(res.status == 200){
            const data = res.body;
            if(data){
                const status = data.status;
                // token失效
                if(status=="40100551"){
                    if(!request.data || !request.data.noToken){
                        let path=location.hash;
                        path=path.substring(2);
                        let url="login?url=" + encodeURIComponent(path)
                        if(path == 'home'){
                            router.push({'path':'home'});
                        }else{
                            router.push({'path':url});
                        }
                    }
                }
                else{
                    if((status != '20000551')&&(res.body.message!="没有贷款申请!")){
                        if(data.message){
                            Vue.toast(data.message,{
                                duration:2000
                            })
                        }else{
                            Vue.toast("网络异常，请稍后再试",{
                                duration:2000
                            })
                        }
                    }
                }
            }
        }
    });
});

sync(store, router);

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
