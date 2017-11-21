import Vue from 'vue';
import footer from 'index/widget/footer/footer.vue';
import api from 'apiConfig/apiConfig';
import {toThousands} from "widget/util/util";
import {mapGetters} from 'vuex';

export default {
    name: 'v-wallet',
    created() {
        this.userInfo();
        this.fIsRedeem();  // 根据钱包余额判断赎回按钮是否可以点击
    },
    data() {
        return {
            realName: "",
            totalAmount: "",//总资产
            usableAmount: "",//可用金额
            frozenAmount: "",//冻结金额
            walletAddress: "",//钱包地址
            routeName: 'wallet',
            authStatus: '',
            token: true,
            flag: false,//未登录弹框show
            flag1: false,//未实名和绑卡弹框show
            flag2: false, //未绑卡弹框show
            loading: true,
            msg: '您尚未实名认证，请先去认证',
            msg1: '您尚未绑定银行卡，请先去绑定',
            where: 'realNameAuth',
            userList: {},
            isDisabled: true,
            balance:''
        }
    },
    watch: {
        $router(to,from){
            if(to.name=='wallet'){
                this.userInfo();
                this.fIsRedeem();
            }
        }
    },
    computed: {
        ...mapGetters({
            gToken: 'token'
        })
    },
    methods: {
        userInfo(){//获取用户信息
            const self = this;
            this.$http.get(api.userInfo + localStorage.getItem("token"), {
                data: {
                    noToken: true
                }
            }).then(
                function (res) {
                    var timer;
                    clearTimeout(timer);
                    self.loading = false;
                    if (res.body.status == "20000551") {
                        self.userList = res.body.result; // 赋值
                        self.authStatus = res.body.result.authStatus;
                        self.realName = res.body.result.realName;
                        self.totalAmount = res.body.result.totalAmount;
                        self.usableAmount = res.body.result.usableAmount;
                        self.frozenAmount = res.body.result.frozenAmount;
                        self.walletAddress = res.body.result.walletAddress;
                        if(res.body.result.authStatus==40){
                           setTimeout(self.userInfo,5000)
                        }
                        if(res.body.result.authStatus==50){
                            self.fDigCashBaLanceCheck(); // 总资产、余额查询
                        }
                    } else if (res.body.status == "40100551") { // token失效
                        self.token = false;
                    } else {
                        self.token = false;
                        self.$toast(res.body.message, {
                            duration: 2000
                        })
                    }
                },
            ).catch(function (res) {
                console.log(res);
            })
        },
        isLoginToken(value){
            if (this.token) {
                if(value == 'bank'){
                    if (this.authStatus == 0) {
                        this.flag1 = true;
                    }else{
                        this.$router.push({path: value});
                    }
                }else{
                    this.$router.push({path: value});
                }
            } else {
                this.flag = true;
            }
        },
        isRealName(){
            var self = this;
            if (this.authStatus == 0) {
                this.flag1 = true;
            } else if (this.userList.bankStatus == 0) {
                this.flag1 = true;
                this.msg = "您尚未绑定银行卡，请先去绑定";
                this.where = "bank";
            } else if (this.orderPasswordStatus == 0) {
                this.flag1 = true;
                this.msg = "您尚未设置交易密码，请先设置";
                this.where = "setTradePsw";
            } else {
                this.$router.push({path: 'importNumWallet'})
            }
        },
        fCloseDialog(){
            this.flag1 = false;
        },
        fIsRedeem(){  // 根据钱包余额判断赎回按钮是否可以点击
            if (this.userList.usableAmount == 0) {
                this.isDisabled = true;
            } else {
                this.isDisabled = false;
            }
        },
        fRedeem(){ // 设置按钮可点击
            if (this.userList.usableAmount != 0) {
                this.$router.push({path: "redeem"})
            }
        },
        fDigCashBaLanceCheck(){  //余额查询
            var self = this;
            this.$http.get(api.digCashBaLanceCheck + this.gToken)
                .then((res) => {
                    if (res.body.status == '20000551') {
                        self.balance = res.body.message;
                    }
                }).catch(function (res) {
                console.log(res)
            })
        }
    },
    components: {
        'c-footer': footer
    },
    filters: {
        toThousands
    }
}
