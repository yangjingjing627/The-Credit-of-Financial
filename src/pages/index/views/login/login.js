import Vue from 'vue';
import '../static/css/common.css';
import api from 'apiConfig/apiConfig';
import {mapActions} from 'vuex';
import {queryString} from 'widget/util/util';

export default {
    name: 'v-login',
    created() {

    },
    data() {
        return {
            phone: "",
            logPsw: "",
            toggle: false,
            flag: false,
            errorMsg: ''
        }
    },
    watch: {},
    computed: {},
    methods: {
        ...mapActions({
            fSetToken: 'fSetToken'
        }),
        checkPsw(){
            this.logPsw = this.logPsw.replace(/[\u4E00-\u9FA5 ]/g, '');
        },
        beforsubmit(){
            const reg = /^1[34578]\d{9}$/;
            if (!(this.phone && this.logPsw)) {
                this.errorMsg = "";
                this.flag = false;
            } else if (!reg.test(this.phone)) {
                this.errorMsg = "手机号输入格式不正确";
                this.flag = false;
            } else {
                this.flag = true;
            }
        },
        submit(){
            this.beforsubmit();
            if (!this.flag) {
                return false;
            } else {
                const self = this;
                this.$http({
                    method: 'post',
                    url: api.login,
                    body: {
                        "mobilePhone": this.phone,
                        "password": this.logPsw
                    }
                }).then(function (res) {
                    //赋值操作，例如
                    if (res.body.status == "20000551") {
                        const token = res.body.result.token;
                        localStorage.setItem("token", token);
                        self.fSetToken({token: token});
                        let url = queryString("url");
                        if (url) {
                            self.$router.push({path: decodeURIComponent(url)})
                        } else {
                            self.$router.push({path: "wallet"})
                        }
                    }
                }).catch((res) => {
                    //error handle
                    console.log(res)
                })
            }
        }
    },
    components: {},
    filters: {}
}