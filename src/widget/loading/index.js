import oLoading from './loading.vue';
import _ from 'lodash';

export default {
    install(Vue,options){
        const sub = Vue.extend(oLoading);
        const oCache = {};

        function loading(bShow=true,options = {}){
            const cLoading = oCache[options.id] || (oCache[options.id] = new sub);
            if(!cLoading.$el){
                const vm = cLoading.$mount();
                document.querySelector(options.parent || 'body').appendChild(vm.$el);
            }
            cLoading.bShow = bShow;
            _.assign(cLoading,options);
        }

        Vue.loading = Vue.prototype.$loading = loading;
        Vue.clearLoading = Vue.prototype.$clearLoading = function(){
            Object.keys(oCache).forEach(item => {
                oCache[item].bShow = false;
            })
        }
    }
}