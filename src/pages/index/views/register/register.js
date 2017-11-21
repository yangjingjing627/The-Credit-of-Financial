import Vue from 'vue';
import "../static/css/common.css";
import api from 'apiConfig/apiConfig';
export default {
    name: 'v-register',
    created() {

    },
    data() {
        return {
            tel: '',
            authCode: '',
            logPsw: '',
            toggle: false,
            step1: true,
            step2: false,
            step3: false,
            errorMsg: '',
            sucIcon1: true,
            sucIcon2: false,
            sucIcon3: false,
            code: false,
            time: 60
        }
    },
    watch: {},
    computed: {},
    methods: {
        ckPsw(){
            this.logPsw = this.logPsw.replace(/[\u4E00-\u9FA5 ]/g, '');
        },
        submit1(){
            if (this.tel) {
                const reg1 = /^1[34578]\d{9}$/;
                if (!reg1.test(this.tel)) {
                    this.errorMsg = "手机号格式不正确"
                } else {
                    this.getCode();

                }
            } else {
                return false;
            }
        },
        watchTel(){
            if (/^1[34578]\d{9}$/.test(this.tel)) {
                this.sucIcon1 = false;
            } else {
                this.sucIcon1 = true;
            }
        },
        watchPsw(){
            const reg = /(?!^.*[\u4E00-\u9FA5].*$)^\S{6,16}$/;
            if (reg.test(this.logPsw)) {
                this.sucIcon3 = false;
            } else {
                this.sucIcon3 = true;
            }
        },
        getCode(){
            const self = this;
            this.$http.get(api.authCode + this.tel).then(function (res) {
                //赋值操作，例如
                if (res.body.status == "20000551") {
                    self.step1 = false;
                    self.step2 = true;
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
                this.sucIcon2 = true
            })
                .catch((res) => {
                    console.log(res)
                })
        },
        submit3(){
            if (this.authCode) {
                if (!/^\d{6}$/.test(this.authCode)) {
                    this.errorMsg = "验证码格式不正确"
                }else{
                    this.step1 = false;
                    this.step2 = false;
                    this.step3 = true;
                    this.sucIcon2 = false
                    this.submit23()
                }
            } else {
                return false;
            }
        },
        submit2(){
          this.sucIcon1 = false;
          this.sucIcon2 = false;
          this.sucIcon3 = true;
          this.step1 = false;
          this.step2 = false;
          this.step3 = true;
        },
        submit23(){
            const self = this;
            this.$http({
                method: 'post',
                url: api.register + "?smsCode=" + this.authCode,
                body: {
                    "mobilePhone": this.tel,
                    "password": this.logPsw,
                }
            }).then(function (res) {
                //赋值操作，例如
                if (res.body.status == "20000551") {
                    self.$router.push({path: "login"})
                }
            })
                .catch((res) => {
                    //error handle
                    console.log(res);
                })
        }
    },
    components: {},
    filters: {}
}
