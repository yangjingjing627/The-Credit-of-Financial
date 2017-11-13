import {types} from '../mutation-types'
import _ from 'lodash';

const state = {
    user:{},
    token:'',
    rightClick:'',
    amount:'',
    walletAddress:''
}
const mutations = {
    [types['setToken']](state, payload) {
        state.token = payload.token;
    },
    [types['setRightClick']](state, payload) {
        state.rightClick = payload.rightClick;
    },
    [types['setWalletAddress']](state, payload) {
        state.walletAddress = payload.walletAddress;
    },
    [types['setAmount']](state, payload) {
        state.amount = payload.amount;
    },
    [types['getUser.start']](state,payload) {
        
    },
    [types['getUser.ok']](state,payload) {
        state.user = payload;
    },
    [types['getUser.error']](state,payload) {
        
    }
}

export default {
    state,
    mutations
}
