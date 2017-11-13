import {types} from './mutation-types';
import Vue from 'vue';
import api from 'apiConfig/apiConfig';

export function fSetToken({commit}, payload) {
    commit(types['setToken'], payload);
}

export function fSetRightClick({commit}, payload) {
    commit(types['setRightClick'], payload);
}

export function fSetWalletAddress({commit}, payload) {
    commit(types['setWalletAddress'], payload);
}

export function fSetAmount({commit}, payload) {
    commit(types['setAmount'], payload);
}

export function fGetUser({commit}, payload) {
    commit(types['getUser.start']);
    return Vue.http.get(api.userInfo + payload)
        .then((res) => {
            const data = res.body.result;
            commit(types['getUser.ok'], data);
            return Promise.resolve(data);
        }).catch(function (err) {
            commit(types['getUser.error'], err);
            return Promise.reject(err)
        });
}


