import Vue from 'vue';
// import { Validator } from 'vee-validate';
import api from 'apiConfig/apiConfig';
import {queryString, toThousands} from 'widget/util/util';
import {mapGetters} from 'vuex';

export default {
    name: 'v-buyNow',
    created() {
        // this.fCallDialog();
        this.getProList();
        this.getUserInfo();
    },
    data() {
        return {
            amount: 0,
            proList: {},
            userList: {},
            errormsg: '',
            show: false,
            pwd: ''
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            token: 'token'
        }),
        qbm(){
            var src = this.proList;
            if (src) {
                return src.amount - src.enterAmount;
            }
            else {
                return ''
            }
        }
    },
    methods: {
        // 项目详情
        getProList: function () {
            this.$http.get(api.projectDetail + '/' + queryString('id'))
                .then((response) => {
                    if (response.body.result) {
                        this.proList = response.body.result;
                    }
                }).catch(function (response) {
                console.log(response)
            })
        },
        // 用户信息
        getUserInfo: function () {
            this.$http.get(api.userInfo + this.token)
                .then((response) => {
                    if (response.body.result) {
                        this.userList = response.body.result;
                    }
                }).catch(function (response) {
                console.log(response)
            })
        },
        // 验证用户密码
        verifyPwd: function () {
            var self = this;
            this.$http({
                method: 'post',
                url: api.verifyPwd,
                body: {
                    "userId": this.userList.id,
                    "password": this.pwd
                }
            }).then((response) => {
                if (response.body.status == '20000551') {
                    if (response.body.result == true) { // 密码正确
                        this.buyNow(); // 投标
                    }
                } else {
                    // 密码错误
                    // this.show=false; // 密码弹框
                    self.pwd = '';
                    self.$toast(response.body.message, {
                        duration: 2000
                    })
                }
            }).catch(function (response) {
                console.log(response)
            })
        },
        buyNow(){
            var self = this;
            this.$http({
                method: 'post',
                url: api.buyNow + this.token,
                body: {
                    "loanId": this.proList.id,
                    "amount": this.amount
                }
            }).then(function (res) {
                if (res.body.status == "20000551") {
                    self.$router.push({path: "bidSuccess"})
                } else {
                    self.$toast(res.body.message || "未知错误", {
                        duration: 2000
                    })
                }
            })
                .catch((res) => {
                    console.log(res);
                })
        },
        validateBeforeSubmit(){  // 确认购买
            if (this.amount == 0 || /^0/.test(this.amount) || isNaN(this.amount)) {
                this.errormsg = '请输入正确金额';
            } else if (/^\./.test(this.amount) || this.amount * 1 % 100 !== 0) {
                this.errormsg = '请输入100元以上整数金额';
            } else if (this.amount < this.proList.startInvestAmount) {
                this.errormsg = '投标金额不能小于起投金额';
            } else if (this.amount > this.userList.usableAmount) {
                this.errormsg = '账户余额不足';
            } else {
                // this.$overlay(true,{zIndex:1});
                this.show = true;
            }
        },
        addMoney: function () {  // 加
            //计算系数，向下取整 {（当前输入金额+递增金额-起投金额）/递增金额，0}
            if (this.proList.increaseInvestAmount && this.proList.startInvestAmount) {
                var money = Number(this.amount);
                var coefficient = Math.floor((money + (this.proList.increaseInvestAmount) - (this.proList.startInvestAmount)) / (this.proList.increaseInvestAmount));
                coefficient = coefficient < 0
                    ? 0
                    : coefficient;
                this.amount = (this.proList.startInvestAmount) + (this.proList.increaseInvestAmount) * coefficient;
            }
        },
        subMoney: function () {  // 减
            if (this.proList.increaseInvestAmount && this.proList.startInvestAmount) {
                //计算系数，向上取整 MAX[roundup{(当前输入金额-递增金额-起投金额)/递增金额，1）},0]
                var money = Number(this.amount);
                var coefficient = Math.ceil((money - (this.proList.increaseInvestAmount) - (this.proList.startInvestAmount)) / (this.proList.increaseInvestAmount));
                coefficient = coefficient < 0
                    ? 0
                    : coefficient;
                this.amount = (this.proList.startInvestAmount) + (this.proList.increaseInvestAmount) * coefficient;
            }
        },
        allPut: function (event) {  // 余额全投
            // 剩余金额小于起投金额，那最后一笔把起投金额填进去
            // 剩余可投金额小于起投金额，把剩余金额填进去
            if (this.userList.usableAmount) {
                // 出借金额
                var _amout = (this.proList.amount) - (this.proList.enterAmount);
                // 账户余额
                var _usableAmount = this.userList.usableAmount;
                // 投标时账户余额处理为100的整倍数
                _amout = Math.floor(_amout / 100) * 100;
                _usableAmount = Math.floor(_usableAmount / 100) * 100;
                console.log(_usableAmount);
                // 账户余额不能大于出借金额
                if (_usableAmount > _amout) {
                    this.amount = _amout;
                } else {
                    // 赋值给投入金额文本框
                    this.amount = _usableAmount;
                }
            }
        },
        close: function () {
            // this.$overlay(false);
            this.show = false;
        }
    },
    components: {},
    filters: {
        toThousands // 千分位
    }
}

