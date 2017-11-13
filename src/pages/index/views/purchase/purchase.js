import Vue from 'vue';
import api from 'apiConfig/apiConfig';
import {mapGetters, mapActions} from 'vuex';
import {fNotifyError} from 'widget/util/util';
import {JSEncrypt} from 'widget/util/jsencrypt'; // 签名
import md5 from 'js-md5';

export default {
    name: 'v-purchase',
    created() {
        this.isAuthStatusFn();
    },
    data() {
        return {
            amount: '',
            isDisabled: true,
            userList: {},
            banks: {},
            errormsg: '',
            password: '',
            show: false,
            flag: false
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
        }),
        imgSrc(){
            var banks = this.banks;
            if (!banks || !banks.bankCode) {
                return '';
            }
            return require('../static/images/bank/icon_' + banks.bankCode + '.png');
        },
        bankCard(){
            var bankCard = this.banks.bankCard;
            if (!bankCard) {
                return '';
            }
            return bankCard.substring(12, 16);
        },
        countLimit(){
            if(!this.banks.countLimit && !this.banks.amountLimit){
                return '';
            }else{
                return this.banks.countLimit * this.banks.amountLimit;
            }
        }
    },
    methods: {
        ...mapActions({
            fGetUser: 'fGetUser'
        }),
        isAuthStatusFn() {
            this.fGetUser(this.gToken).then(data => {
                // 从用户信息里取出已绑定的银行卡
                this.userList = data;
                this.banks = data.banks[0];
            }).catch(err => {
                fNotifyError(this, err);
            });
        },
        confirmPurchase(){ // 确认申购
            // 数字签名
            // var encrypt = new JSEncrypt();
            // encrypt.setPublicKey(this.userList.publicKey); //  私钥
            // console.log(encrypt.encrypt(this.amount));

            if (this.flag) {
                if (this.flag) {
                    if(isNaN(this.amount) || /^\./.test(this.amount) || /^0/.test(this.amount)){
                        this.errormsg = '请输入正确的金额';
                    } else if(/(\.\d{3,})$/.test(this.amount)){
                        this.errormsg = '请输入2位小数点以内的金额';
                    } else {
                        this.errormsg = '';
                        this.show = true;
                    }
                }
            }
        },
        purchaseSubmit(){  // 提交接口
            const self = this;
            this.$http({
                url: api.purchase + this.gToken,
                method: 'post',
                body: {
                    bankCode: this.banks.bankCode,
                    amount: this.amount,
                    walletAddress: this.userList.walletAddress
                }
            }).then(function (res) {
                self.show = false;
                self.password = '';
                self.amount = '';
                if (res.body.status == '20000551') {
                    self.$toast(res.body.message, {
                        duration: 2000
                    });
                }
            }).catch(function (res) {
                console.log(res);
            })
        },
        verifyPwd(){  // 确认交易密码
            var _pwd = /^([^\u4e00-\u9fa5\s]{6}$)/;
            if (this.password == '') {
                this.$toast('请输入交易密码', {
                    duration: 2000
                });
            } else if (!_pwd.test(this.password)) {
                this.$toast('请输入正确交易密码', {
                    duration: 2000
                });
            } else {
                // 密码接口提交
                const self = this;
                this.password = md5(md5(this.password));
                this.$http.get(api.checkPassWord + this.gToken + '&orderPassword=' + this.password)
                    .then(function (res) {
                        if (res.body.status == '20000551') {
                            self.purchaseSubmit(); // 密码正确，提交赎回表单
                        } else {
                            this.password = '';
                            self.$toast(res.body.message, {
                                duration: 2000
                            });
                        }
                    }).catch(function (res) {
                    console.log(res);
                })
            }
        },
        checkAmount(amount){  // 确认按钮是否可点击
            if (amount != '') {
                this.isDisabled = false;
                this.flag = true;
            } else {
                this.isDisabled = true;
                this.flag = false;
            }
        },
        close: function () {
            this.show = false;
        }
    },
    components: {},
    filters: {}
}