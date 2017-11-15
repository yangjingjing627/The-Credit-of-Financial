<template>
    <div>
        <div class="topWar" v-if='showTip'>
            <div class=""><i>!</i></div>
            <p>请确保放款和还款的资金安全,请提供本人所有的数字钱包账户信息</p>
            <div @click="showTip=false"><b></b></div>
        </div>
        <ul class="wrap">
            <li class="flexA">
                <span class="title_1">钱包所有者</span>
                <input type="text" placeholder="" class="w440 db" v-model="walletOwner">
            </li>
            <li class="flexA">
                <span class="title_1">钱包创建行</span>
                <input type="text" placeholder="" maxlength="20" class="w440 db arrow_b" v-model="walletBank">
            </li>
            <li class="flexA">
                <span class="title_1">钱包地址</span>
                <input type="text" placeholder="" maxlength="20" class="w440 db" v-model="walletAddr">
            </li>
        </ul>
        <ul class="wrap">
            <li class="flexA">
                <span class="title_1">银行预留手机号</span>
                <input type="tel" placeholder="" maxlength="11" class="w440 db" v-model="tel" @focus="errorMsg=='手机号格式错误'?errorMsg='':''">
            </li>
            <li class="flexA">
                <span class="title_1">短信验证码</span>
                <div class="w440 p0 rel">
                    <input type="text" placeholder="" v-model="verifyCode" maxlength="6" @focus="errorMsg=='验证码错误'?errorMsg='':''">
                    <div class="getCodeBtn abs right0 top-10" v-if="code"><i class="blue">{{time}}s</i>重新获取</div>
                    <div class="getCodeBtn abs right0 top-10" v-else @click="getCode">获取验证码</div>
                </div>
            </li>
        </ul>
        <div class="red pl40 pt20">{{errorMsg}}</div>
        <div class="btn w670 mt60" :class="tel&&verifyCode?'':'disabled'" @click="sureBankInfo">确认信息无误</div>
    </div>
</template>
<style lang="sass" scoped>
    .flexA {
        font-size: 30px;
        color: #5f616b;
    }

    .w440 {
        width: 440px;
    }

    .right0 {
        right: 0px;
    }

    .top-10 {
        top: -10px;
    }

    .topWar {
        width: 100%;
        color: #fff;
        background: #FA5559;
        height: 106px;
        display: flex;

    div {
        width: 106px;
        height: 106px;
        position: relative;

    i, b {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    i {
        text-align: center;
        line-height: 30px;
        color: #FA5559;
        background: #fff;
    }

    b {
        background: #fff url(./images/Path.png) no-repeat center;
        background-size: 18px 18px;
    }

    }
    }
    .topWar p {
        flex: 1;
        padding-top: .2rem;
        font-weight: lighter;
    }
</style>

<script>
    import Vue from 'vue';
    import '../static/css/common.css';
    import api from "apiConfig/apiConfig";
    import {mapGetters, mapActions} from 'vuex';
    import {fNotifyError} from 'widget/util/util';
    export default {
        created() {
            this.getUserInfo();
        },
        data(){
            return {
                walletOwner: '',//钱包所有者
                walletBank: '',//钱包创建行
                walletAddr: '',//钱包地址
                tel: '',//手机号
                verifyCode: '',//验证码
                showTip: true,//顶部提示框
                time: 60,
                code: false,
                errorMsg:''
            }
        },
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
                    this.walletOwner = data.realName;
                    this.walletBank = data.banks[0].bankName;
                    this.walletAddr = data.walletAddress;
                }).catch(err => {
                    fNotifyError(this, err);
                });
            },
            getCode(){//获取动态码
                this.errorMsg='验证码错误'?this.errorMsg='':'';
                if (!/^1[34578]\d{9}$/.test(this.tel)) {
                    this.errorMsg="手机号格式错误"
                } else {
                    const self = this;
                    this.$http.get(api.getCode2 + this.gToken+ "&mobilePhone=" + this.tel).then(function (res) {
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
                    })
                        .catch((res) => {
                            console.log(res)
                        })
                }
            },
            sureBankInfo(){//确认银行信息
                if (!(this.tel && this.verifyCode)) {
                    return false
                } else if(!/^1[34578]\d{9}$/.test(this.tel)){
                    this.errorMsg="手机号格式错误";
                    return false;
                }else if(this.verifyCode.length<6){
                    this.errorMsg="验证码错误";
                    return false;
                }else{
                   this.$http.get(api.checkCode2+this.gToken+"&mobilePhone="+this.tel+"&smsCode="+this.verifyCode).then(res=>{
                       if(res.body.status==20000551){
                        localStorage.setItem("mobileNo", this.tel);
                         this.$router.push({path: 'familyInfo'})
                       }else{
                          this.$toast(res.body.message,{
                              duration:2000
                          })
                       }
                   }).catch(res=>{
                       console.log(res)
                   })
                }
            }
        }
    }
</script>
