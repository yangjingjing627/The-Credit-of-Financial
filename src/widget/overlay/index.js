import oOverlay from './overlay.vue';
import _ from 'lodash';

export default {
    install(Vue,options){
        const sub = Vue.extend(oOverlay);
        const oCache = {};

        function overlay(){
            const args = arguments,
                  toString = Object.prototype.toString;
            let options = {},
                show = true;
            if(toString.call(args[0]) == '[object Object]'){
                options = args[0];
            }
            else if(toString.call(args[0]) == '[object Boolean]'){
                show = args[0];
                options = args[1] || {};
            }
            else if(typeof(args[0]) === 'undefined'){
                show = true;
            }
            else{
                throw new Error('[overlay]: params is not correct');
            }
            const cOverlay = oCache[options.id] || (oCache[options.id] = new sub);
            if(!cOverlay.$el){
                const vm = cOverlay.$mount();
                document.querySelector(options.parent || 'body').appendChild(vm.$el);
            }
            if(!options.hasOwnProperty('show')){
                options.show = show;
            }
            _.assign(cOverlay,options);
        }

        Vue.overlay = Vue.prototype.$overlay = overlay;
        Vue.clearOverlay = Vue.prototype.$clearOverlay = function(){
            Object.keys(oCache).forEach(item => {
                oCache[item].show = false;
            })
        }
    }
}