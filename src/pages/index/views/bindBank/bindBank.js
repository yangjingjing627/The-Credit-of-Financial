import Vue from 'vue';
import api from 'apiConfig/apiConfig';
import {mapGetters, mapActions} from 'vuex';

var _phone = /^0{0,1}(13|14|15|17|18)[0-9]{9}$/;

export default {
    name: 'v-bindBank',
    created() {
        this.isAuthStatusFn(); // 用户信息
        this.bankListFn(); // 绑卡列表
    },
    data() {
        return {
            userList: {},
            bankName: '请选择银行',
            bankCode: '',
            bankCard: '',
            mobilePhone: '',
            smsCode: '',
            bankL: {},
            section: false,
            errormsg: '',
            amountLimit: '',
            countLimit: '',
            time: 60,
            code: false
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
        })
    },
    methods: {
        ...mapActions({
            fGetUser: 'fGetUser'
        }),
        isAuthStatusFn() {
            this.fGetUser(this.gToken).then(data => {
                // 从用户信息里取出持卡人和身份证
                this.userList = data;
            }).catch(err => {
                // fNotifyError(this,err);
            });
        },
        fActiveSection(type){
            this.section = type;
            // 禁止屏幕滑动
            // document.body.addEventListener('touchmove', function (event) {
            //     event.preventDefault();
            // }, false); 
        },
        bankListFn(){
            this.$http.get(api.bankList)
                .then((res) => {
                    this.bankL = res.body.result;
                })
            // var list = document.getElementById('slider');
            // list.addEventListener("touchmove", _touch, false);
            // function _touch(event){
            // 	console.log(1);
            // }
        },
        fGetCode(){  // 获取验证码
            if (!_phone.test(this.mobilePhone)) {
                this.errormsg = '请输入正确的手机号码';
            }else{
                const self = this;
                this.$http.get(api.bindBankCode + this.gToken + '&mobilePhone=' + this.mobilePhone)
                    .then(function (res) {
                        //赋值操作，例如
                        if (res.body.status == "20000551") {
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
                    }).catch((res) => {
                    console.log(res)
                })
            }
        },
        bindBankFn(){ // 绑卡
            var _card = /^\d{15,19}$/;
            var _smsCode = /^\d{6}$/;

            if(this.bankName == '' || this.bankName == '请选择银行'){
                this.errormsg = '请选择银行';
            } else if (!_card.test(this.bankCard)) {
                this.errormsg = '请输入15-19位银行卡号';
            } else if (!_phone.test(this.mobilePhone)) {
                this.errormsg = '请输入正确的手机号码';
            } else if (!_smsCode.test(this.smsCode)) {
                this.errormsg = '请输入正确的验证码';
            } else {
                this.errormsg = '';
                var _url = api.bindBank + this.gToken + '&smsCode=' + this.smsCode;
                this.$http({
                    method: 'post',
                    url: _url,
                    body: {
                        "bankCode": this.bankCode, // 银行code
                        "bankName": this.bankName, // 银行名称
                        "bankCard": this.bankCard, //卡号
                        "reservedPhone": this.mobilePhone, //手机号
                        "amountLimit": this.amountLimit, // 单笔限额
                        "countLimit": this.countLimit // 每日限购
                    }
                }).then(function (res) {
                    if (res.body.status == "20000551") {
                        this.$router.push({path: "bank"});
                    } else {
                        this.$toast(res.body.message || "未知错误", {
                            duration: 2000
                        })
                    }
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        bankNameF(bankCode, bankName, amountLimit, countLimit){  // 选中银行
            this.bankName = bankName;
            this.bankCode = bankCode;
            this.amountLimit = amountLimit;
            this.countLimit = countLimit;
            this.section = false;
        }
    },
    components: {},
    filters: {}
}