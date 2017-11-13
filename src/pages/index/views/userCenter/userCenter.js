import Vue from 'vue';
import api from "apiConfig/apiConfig";
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'v-userCenter',
    created() {
        this.getUserInfo()
    },
    data() {
        return {
            mobilePhone: "",
            tradeMsg: '设置交易密码',
            tradePath: 'setTradePsw'
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token',
            user: 'user'
        })
    },
    methods: {
        ...mapActions({
            fGetUser: 'fGetUser'
        }),
        // 用户信息
        getUserInfo(){
            const self = this;
            this.fGetUser(this.gToken).then(data => {
                self.mobilePhone = data.mobilePhone;
                if (data.authStatus >= 30) {
                    self.tradeMsg = "修改交易密码";
                    self.tradePath = "modifyTradePsw";
                }
            }).catch(err => {
                fNotifyError(this, err);
            });
        },
    },
    components: {},
    filters: {
        formatTel(tel){
            return tel.substr(0, 3) + "****" + tel.substr(7, 4)
        }
    }
}