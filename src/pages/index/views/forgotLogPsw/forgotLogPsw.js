import Vue from 'vue';
import "../static/css/common.css";
import api from "apiConfig/apiConfig"
export default {
    name: 'v-forgotLogPsw',
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
            show: true
        }
    },
    watch: {},
    computed: {},
    methods: {
        getCode(){
            if (!/^1[34578]\d{9}$/.test(this.tel)) {
                this.$toast("手机号错误", {
                    duration: 2000
                })
            } else {
                const self = this;
                this.$http.get(api.getAuthCode + this.tel).then(function (res) {
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
            } else if (!/^\d{6}$/ || this.flag) {
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
            const reg = /(?!^.*[\u4E00-\u9FA5].*$)^\S{6,16}$/;
            const self = this;
            if (!this.newPsw) {
                return false;
            } else if (!reg.test(this.newPsw)) {
                this.$toast("密码格式不正确", {
                    duration: 2000,
                })
            } else {
                this.$http.put(api.forgetLogPsw + this.authCode,
                    {
                        "mobilePhone": this.tel,
                        "password": this.newPsw
                    }).then(function (res) {
                    if (res.body.status == "20000551") {
                        self.$toast("密码设置成功", {
                            duration: 2000,
                            callback: function () {
                                self.$router.push({path: 'login'})
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