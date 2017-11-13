import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource';
import user from './modules/user';
import * as getters from './getters'
import * as actions from './actions';

Vue.use(Vuex)
Vue.use(VueResource);

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        user
    }
})
