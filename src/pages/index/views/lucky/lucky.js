import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import api from "apiConfig/apiConfig";
import {toThousands,fNotifyError,fmtDate} from "widget/util/util";
export default {
    name: 'v-luck',
    created() {
        this.getUserInfo();
        // this.getQualification();
    },
    data(){
        return {
            luckyFlag: false,//借款试算弹框
            editFlag: true,
            luckyUserInfo: '',//用户信息
            applyStatus: '',//申请借款状态
            goLucky: true,//招大小财页面切换借款页面
            lucyDate: '',
            purpose: 0,//借款用途
            amount: 0,//借款金额
            time: 1,//借款时间
            flag1: false,
            msg: '您尚未实名认证，请先去认证',
            where: 'realNameAuth',
            repayList:'',
            isConfirm:1  // 1 - 显示确认取消按钮，0 - 显示确认按钮
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
        // 用户信息
        getUserInfo(){//查询用户信息
            const self = this;
            this.fGetUser(this.gToken).then(data => {
                self.luckyUserInfo = data;
            }).catch(err => {
                fNotifyError(this, err);
            });
        },
        getApplyStatus(){//判断借款状态
            const self = this;
            this.$http.get(api.xdcore + this.gToken).then(res => {
                if (res.body.status == '40000551') {  // 未借款
                    self.goLucky = false;
                    self.getQualification();
                } else {
                    self.$router.push({path: 'borrowMoney?applyStatus=' + res.body.result.status+"&applicationId="+res.body.result.applicationId})
                }
            }).catch(res=>{
                console.log(res)
            })
        },
        viewUserInfo(){ //用户状态判断
            if (this.luckyUserInfo.authStatus < 10) {
                this.flag1 = true;
            } else if (this.luckyUserInfo.bankStatus == 0) {
                this.flag1 = true;
                this.msg = '您尚未绑定银行卡，请先去绑定';
                this.where = 'bank';
            } else if (this.luckyUserInfo.orderPasswordStatus == 0) {
                this.flag1 = true;
                this.msg = "您尚未设置交易密码，请先去设置";
                this.where = "setTradePsw";
            } else if (this.luckyUserInfo.authStatus == 10) {
                this.flag1 = true;
                this.msg = "您尚未申请数字钱包账户<br/>请先去申请";
                this.where = "importNumWallet";
            } else if (this.luckyUserInfo.authStatus == 40) {
                this.flag1 = true;
                this.msg = "数字钱包账户申请中，请稍等";
                this.where = "wallet";
            }  else if (this.luckyUserInfo.authStatus == 60) {
                this.flag1 = true;
                this.isConfirm = 0; // 显示一个确认按钮
                this.msg = "数字钱包账户申请失败<br/>请联系您的申请银行";
                this.where = "lucky";
            } else {
                this.getApplyStatus()
            }
        },
        fCloseDialog(){//关闭弹窗
            this.flag1 = false;
        },
        editAmount(){//申请金额编辑按钮
            this.editFlag = false;
            this.amount = 0;
            this.$refs.input1.style.backgroundSize = '1% 100%';
            this.$refs.input3.setAttribute("autofouce",'autofouce');
        },
        getQualification(){//获取借款资质
            var self = this;
            this.$http.get(api.qualification + this.gToken).then(function (res) {
                self.lucyDate = res.body.result;
                self.amount=self.lucyDate.mixAmount;
            }).catch(function (res) {
                console.log(res)
            })
        },
        applyFor(){//我要申请按钮点击事件
            if(this.amount>0){
                if (this.amount > this.lucyDate.maxAmout || this.amount < this.lucyDate.mixAmount) {
                    this.$toast("您所输入的借款金额无效")
                } else if(this.purpose<1){
                    this.$toast("请选择借款用途")
                }else {
                    var borrowInfo = {
                        'applyAmount': this.amount,
                        'period': this.time,
                        'loanPurpose': this.purpose
                    }
                    borrowInfo=JSON.stringify(borrowInfo);
                   localStorage.setItem("borrowInfo",borrowInfo);
                    this.$router.push({path: 'identityAuthen'})
                }
            }
        },
        changeVal(ele, val, max, min, even) {//进度条样式控制
            if (ele == 'input1') {
                this.$refs.input1.style.backgroundSize = (val > min) ? (val - min) / (max - min) * 100 + '% 100%' : '1% 100%';
            } else {
                this.$refs.input2.style.backgroundSize = (val > min) ? (val - min) / (max - min) * 100 + '% 100%' : '1% 100%';
            }
        },
        trial(){//计算器点击事件，借款试算
            this.luckyFlag=true;
            this.$http.get(api.trial +this.gToken,{params:{"loanAmount":this.amount,"loanTermType":this.time}}).then(res=>{
                if(res.body.status==20000551){
                    this.repayList=res.body.result.repayments;
                }
            })
        }
    },
    components: {},
    filters: {
        toThousands,
        fmtDate
    }
}
