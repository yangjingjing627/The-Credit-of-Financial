import Vue from 'vue';
import "../static/css/common.css";
import api from "apiConfig/apiConfig";
import {mapGetters} from 'vuex';
export default {
    name: 'v-forgotTradePsw',
    created() {
    },
    data() {
        return {
            tel: '',
            authCode: '',
            time: 60,
            newPsw: '',
            code: false,
            flag: true,
            show: true,
            errormsg:''
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
        })
    },
    methods: {
        getCode(){
            if(this.tel == ''){
                this.errormsg = '请输入手机号';
            } else if (!/^1[34578]\d{9}$/.test(this.tel)) {
                this.errormsg = '手机号格式错误';
            } else {
                this.errormsg = '';
                const self = this;
                this.$http.get(api.forgetTradePswSmSCode + this.gToken + '&mobilePhone=' + this.tel).then(function (res) {
                    //赋值操作，例如
                    if (res.body.status == "20000551") {
                        self.flag = false;
                        self.code = true;
                        const timer = setInterval(function () {
                            if (self.time <= 0) {
                                self.code = false;
                                self.time = 60;
                                clearInterval(timer);
                            } else {
                                self.time -= 1;
                            }
                        }, 1000);
                    } else {
                        self.$toast(res.body.message || "未知错误", {
                            duration: 2000
                        })
                    }
                })
                    .catch((res) => {
                        console.log(res)
                    })
            }
        },
        submit(){
            if (!(this.tel && this.authCode)) {
                return false;
            } else if (!/^1[34578]\d{9}$/.test(this.tel)) {
                this.$toast("手机号错误", {
                    duration: 2000,
                    callback: function () {
                        return false;
                    }
                })
            } else if (!/^\d{6}$/) {
                this.$toast("验证码错误", {
                    duration: 2000,
                    callback: function () {
                        return false;
                    }
                })
            } else {
                this.show = false;
            }
        },
        savePsw(){
            const reg = /^\d{6}$/;
            const self = this;
            if (!this.newPsw) {
                return false;
            } else if (!reg.test(this.newPsw)) {
                this.$toast("密码格式不正确", {
                    duration: 2000,
                })
            } else {
                this.$http.put(api.forgetTradePsw + this.gToken + "&smsCode=" + this.authCode,
                    {
                        "orderPassword": this.newPsw
                    }).then(function (res) {
                    if (res.body.status == "20000551") {
                        var url = this.$route.query.plan;
                        self.$toast("密码设置成功", {
                            duration: 2000,
                            callback: function () {
                                self.$router.push({path: url})
                            }
                        })
                    } else {
                        self.$toast(res.body.message || "未知错误", {
                            duration: 2000
                        })
                    }
                }).catch(function (res) {
                    console.log(res)
                })
            }
        }
    },
    components: {},
    filters: {}
}