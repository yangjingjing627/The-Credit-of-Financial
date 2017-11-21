<template>
    <div class="wrapper">
        <div>
            <div v-show="loading" class="placeholder">
                <div class="ph ph-banner"></div>
            </div>
            <div v-show="!loading">
                <div class="bg-gradient_1 f34 pt310" v-if="!token">
                    <div class="dec"></div>
                    <div class="login-con arrow_r">
                      <router-link class="f40 g3" to="login">立即登录</router-link>
                      <div class="tl f28 g9">马上登录开启财富管理</div>
                    </div>
                </div>
                <div class="flexBox bg-gradient pt163 pb20" :class="{finished:authStatus==50}" v-else>
                    <div class="decoration"></div>
                    <div class="abs pl30 pr20">
                        <router-link to="/userCenter" class="iconW my"></router-link>
                        <router-link to="/settings" class="iconW set r"></router-link>
                    </div>
                    <div v-if="authStatus<40" @click="isRealName" class="wallet">
                        <div class="smile"></div>
                        <p class="f30 gf tc pt20">导入数字钱包账户</p>
                    </div>
                    <div v-if="authStatus==50" class="wallet">
                        <div class="smile"></div>
                        <router-link to="walletReceipt" class="flexBox">
                            <div class="f30 gf tc pt20">{{realName}}的钱包</div>
                            <div class="f24">{{walletAddress}}<span class="iconW ewm"></span></div>
                        </router-link>
                    </div>
                    <div v-if="authStatus==40" class="wallet">
                        <p class="f34 gf tc pt40">数字钱包账户申请中</p>
                    </div>
                    <div v-if="authStatus==60" class="wallet">
                        <p class="f34 gf tc pt40">数字钱包账户申请失败</p>
                    </div>
                </div>
            </div>

            <div class="asset rel flexBox" v-show="authStatus==50&&token">
                <div class="f26 g9"><span class="iconW iconW8"></span>总资产（元）</div>
                <p class="f48 red">{{balance|toThousands}}</p>
                <p class="line1"></p>
                <ul class="flexA assetB bd-none">
                    <li class="flexBox w49">
                        <div class="f26 g9">可用余额（元）</div>
                        <div class="f28 g3">{{balance|toThousands}}</div>
                        <router-link to="purchase" class="buyBtn db">申 购</router-link>
                    </li>
                    <li class="line2"></li>
                    <div class="w49 db">
                        <li class="flexBox">
                            <div class="f26 g9">冻结金额（元）</div>
                            <div class="f28 g3">{{frozenAmount|toThousands}}</div>
                            <div class="buyBtn bg-blue db" :class="{gray_disabled : isDisabled}" @click="fRedeem">赎 回
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
            <ul class="listW">
                <div @click="isLoginToken('billDetail')">
                    <li>
                        <span class="iconW iconW4"></span>
                        <span>账单</span>
                        <i class="circleL"></i>
                        <i></i>
                        <span class="r arrows"></span>
                    </li>
                </div>
                <div @click="isLoginToken('bank')">
                    <li>
                        <span class="iconW iconW5"></span>
                        <span>银行卡</span>
                        <i class="circleL"></i>
                        <i></i>
                        <span class="r arrows"></span>
                    </li>
                </div>
                <div @click="isLoginToken('walletFinance')">
                    <li>
                        <span class="iconW iconW6"></span>
                        <span>我的理财</span>
                        <i class="circleL"></i>
                        <i></i>
                        <span class="r arrows"></span>
                    </li>
                </div>
                <div @click="isLoginToken('myBorrowMoney')">
                    <li>
                        <span class="iconW iconW7"></span>
                        <span>我的借款</span>
                        <span class="r arrows"></span>
                    </li>
                </div>
            </ul>
        </div>
        <div class='dialogBg' v-show="flag">
            <div class="dialog flexBox">
                <div class="image"></div>
                <p class="f42 pt37 l1">您还未登录</p>
                <p class="f30 l1 pt20">(请先登录/注册再进行此操作)</p>
                <router-link to="login" class="btn myBtn">登录</router-link>
                <router-link to="register" class="db f28 blue pt46 l1 pb1 bb">还未注册?</router-link>
            </div>
        </div>

        <div class='dialogBg' v-show="flag1">
            <div class="dialog1 flexBox">
                <div class="warnIcon"></div>
                <p class="f28 g6 pt30 pb50">{{msg}}</p>
                <router-link :to="where" class="realNameBtn gf bg-red ml20">确定</router-link>
                <div class="f28 g6" @click="fCloseDialog">取消</div>
            </div>
        </div>
        <!-- 尚未绑定银行卡 -->
        <div class='dialogBg' v-show="flag2">
            <div class="dialog1 flexBox">
                <div class="warnIcon2"></div>
                <p class="f28 g6 pt30 pb50">{{msg1}}</p>
                <router-link :to="where" class="realNameBtn gf bg-red ml20">确定</router-link>
                <div class="f28 g6" @click="fCloseDialog">取消</div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import "../static/css/common.css";
    /*占位*/
    .ph-banner {
        height: 327px;
        width: 100%;
    }

    .ph-list {
        margin-top: 20px;
    }

    .ph-item {
        width: 100%;
        height: 90px;
        margin-top: 10px;
    }

    /*已登录状态样式开始*/
    .iconW {
        display: inline-block;
        width: 45px;
        height: 34px;
        vertical-align: -8px;
        background-origin:content-box;
    }

    .bg-gradient {
        // height: 466px;
        height: 300px;
    }

    .pt163 {
        padding-top: 163px;
    }

    .abs {
        top: 37px;
        width: 100%;
        overflow: hidden
    }

    .my {
        padding:10px;
        box-sizing:content-box;
        background-position: -80px -50px;
    }

    .set {
         padding:10px;
        box-sizing:content-box;
        background-position: -80px 0px;
        text-align: right
    }

    .wallet {
        position: absolute;
        left: 0;
        right: 0;
    }

    .smile {
        margin: 0 auto;
        width: 136px;
        height: 136px;
        background: #fff url("./images/smile.png") 0 0 no-repeat;
        background-size: 136px 274px;
        border-radius: 50%;
    }

    .listW {
        // box-shadow: 0px 2px 16px 0px rgba(111, 31, 33, 0.1);
        border-radius: 6px;
        padding: 0 22px 0 28px;
        background: #fff;
        margin-top: 20px;
    }

    .listW li {
        position: relative;
        border-bottom: 1px dashed #eee;
        box-sizing: border-box;
        padding-right: 11px;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        color: #333;
        font-weight: 300;
    }

    i {
        position: absolute;
        right: -32px;
        bottom: -10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #f9f9f9;
    }

    .circleL {
        left: -38px;
    }

    .arrows {
        margin-top: 28px;
        // width: 14px;
        // height: 18px;
        background-size: 10px 20px;
    }

    /*已登录状态样式开始*/

    /*总资产样式开始*/
    .finished {
        padding-top: 124px;
    }

    .finished .smile {
        background-position: 0px -138px;
    }

    .finished .f24 {
        padding-left: 60px;
        text-align: center;
        color: #fff
    }

    .ewm {
        background-position: -80px -162px;
        margin-left: 28px;
    }

    .asset {
        margin: -66px auto 0;
        box-shadow: 0 0 10px 0 rgba(111, 31, 33, 0.08);
        border-radius: 10px;
        padding-top: 34px;
        width: 690px;
        height: 400px;
        background: #fff;
    }

    .iconW8 {
        background-position: -80px -112px;
    }

    .line1 {
        position: relative;
        margin-top: 20px;
        width: 100%;
        height: 1px;
        background: #eee;
    }

    .line1:before, .line1:after {
        position: absolute;
        content: '';
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: -20px;
        background: #f9f9f9;
    }

    .line1:before {
        left: -20px;
    }

    .line1:after {
        right: -20px;
    }

    .assetB {
        padding: 34px 52px 0 62px;
        width: 100%;
    }

    .line2 {
        width: 1px;
        height: 146px;
        background: #eee
    }

    .f48 {
        font-size: 48px;
    }

    .w49 {
        width: 49%;
    }

    .buyBtn {
        width: 200px;
        height: 60px;
        background: #FA5559;
        margin-top: 10px;
        border-radius: 100px;
        font-size: 30px;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }

    .bg-blue {
        background: #60CAFA;
    }

    /*总资产样式结束*/
    /*未登录状态样式开始*/
    .pt310 {
        padding-top: 310px;
    }

    .loginBtn {
        position: absolute;
        top: 160px;
        left: 240px;
        width: 278px;
        height: 98px;
        border-radius: 100px;
        background: #fff;
        color: #FF5A56;
        line-height: 98px;
        text-align: center
    }

    /*未登录状态样式结束*/

    .iconW4 {
      background: url("./images/bill_icon.png")  center no-repeat;
      background-size: 28px 30px;
    }

    .iconW5 {
      background: url("./images/card_icon.png")  center no-repeat;
      background-size: 28px 30px;
    }

    .iconW6 {
      background: url("./images/finance_icon.png")  center no-repeat;
      background-size: 28px 30px;
    }

    .iconW7 {
      background: url("./images/borrow_icon.png")  center no-repeat;
      background-size: 28px 30px;
    }

    /*未登录弹框样式开始*/
    .wrapper {
        width: 100%;
        height: 100%;
        padding: 0;
    }

    .dialogBg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 9999;
    }

    .dialog {
        margin: 304px auto 0;
        width: 557px;
        height: 578px;
        border-radius: 10px;
        background: #fff;
        color: #5f616b;
        font-family: "黑体";
    }

    .image {
        margin-top: -120px;
        border-radius: 50%;
        width: 288px;
        height: 288px;
        background: #fff url("./images/dialogImage.png") center no-repeat;
        background-size: 254px 254px
    }

    .myBtn {
        margin-top: 102px;
        border-radius: 66px;
        width: 375px;
        height: 66px;
        font-size: 36px;
    }

    .pt37 {
        padding-top: 37px;
    }

    .pt46 {
        padding-top: 46px;
    }

    .bb {
        border-bottom: 1px solid #0094ff
    }

    /*未登录弹框样式结束*/
    /*未实名弹框样式开始*/
    .dialog1 {
        margin: 452px auto 0;
        padding-top: 53px;
        width: 574px;
        height: 644px;
        background: #FFFFFF;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.21);
        border-radius: 8px;
        margin-top: 313px;
    }

    .pb50 {
        padding-bottom: 50px;
    }

    .warnIcon {
        width: 329px;
        height: 219px;
        background: url("./images/dialog.png") center no-repeat;
        background-size: 329px 219px;
    }
    .warnIcon2 {
        width: 329px;
        height: 219px;
        background: url("./images/dialog2.png") center no-repeat;
        background-size: 329px 219px;
    }

    .realNameBtn {
        display: block;
        width: 480px;
        margin: 20px 47px 34px;
        height: 98px;
        line-height: 98px;
        border-radius: 100px;
        font-size: 28px;
        text-align: center;
        box-shadow: 0px 22px 23px 0px rgba(250, 85, 89, 0.18);
    }

    .bdc {
        border: 1px solid #ccc;
    }

    .bg-red {
        background: #FA5559;
    }

    /*未实名弹框样式结束*/
    .bg-gradient_1 {
      display: flex;
      background: #fff;
      padding: 100px 40px 100px;
    }
    .dec {
      width: 113px;
      height: 113px;
      background: url("./images/man_icon.png") center no-repeat;
      background-size: 100%;
    }
    .login-con {
      flex: 1;
      padding-left: 28px;
      box-sizing: border-box;
    }
</style>
<script src="./wallet.js"></script>
