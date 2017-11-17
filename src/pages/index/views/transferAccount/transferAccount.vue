<template>
    <div class="mt20">
        <!--第一步输入信息  -->
        <div v-show="step1">
            <div class="wrap bg-white">
                <div class="flexA">
                    <h5 class="title-a f30 g3">转入钱包</h5>
                    <div class="con-a f30 w480">
                        <input type="text" class="input tr qrcode_icon" placeholder="" value="hbdhsbdshds" v-model="walletAddress"/>
                    </div>
                </div>
                <div class="flexA">
                    <h5 class="title-a f30 g3">转入金额</h5>
                    <div class="con-a f30 w480">
                        <input type="text" class="input tr" placeholder="" v-model="amount"/>
                    </div>
                </div>
                <div class="flexA">
                    <h5 class="title-a f30 g3">备注</h5>
                    <div class="con-a f30 w480">
                        <input type="text" class="input tr" placeholder="" v-model="log"/>
                    </div>
                </div>
            </div>

            <div class="errormsg pt40 tc">{{errormsg}}</div>
            <div class="mt100 content">
                <div class="btn box-shadow" @click="nextStep2">下一步</div>
            </div>
        </div>

        <!--支付详情  -->
        <div class="pop" v-show="step2">
            <div class="payDetail">
                <div class="title tc">
                    <h2 class="f28">支付详情</h2>
                    <span class="closePop" @click="close"></span>
                </div>
                <div class="wrap">
                    <div class="flexA f28">
                        <h5 class="title-a g3">转账金额：</h5>
                        <div class="con-a w480">{{amount}}</div>
                    </div>
                    <div class="flexA">
                        <h5 class="title-a g3">转入钱包：</h5>
                        <div class="con-a w480">{{walletAddress}}</div>
                    </div>
                    <div class="flexA">
                        <h5 class="title-a g3">付款钱包：</h5>
                        <div class="con-a w480">{{userResult.walletAddress}}</div>
                    </div>
                    <div class="flexA">
                        <h5 class="title-a g3">备注：</h5>
                        <div class="con-a w480">{{log}}</div>
                    </div>
                </div>
                <div class="content">
                    <div class="btn box-shadow" @click="nextStep3">确认</div>
                </div>
            </div>
        </div>

        <!--输入银行数字安全密码  -->
        <div class="pop" v-show="step3">
            <div class="bankPwd">
                <div class="title tc bbe">
                    <h2 class="f28">输入银行数字安全密码</h2>
                    <span class="icon_arrow" @click="goLastStep"></span>
                </div>
                <div class="bd">
                    <ul class="fix">
                        <li v-for="n in 6" :class="{'active' : n <= pwd.length}">
                            <span></span>
                        </li>
                    </ul>
                </div>
                <div class="forget">
                    <router-link :to="{path:'forgotTradePsw',query:{plan:'transferAccount'}}" class="blue">忘记交易密码？</router-link>
                </div>
                <!--键盘  -->
                <ul class="keyboard fix tc">
                    <li class="keyItem" @click="numStack('1')">
                        <p>1</p>
                    </li>
                    <li class="keyItem colCenter" @click="numStack('2')">
                        <p>2</p>
                        <p class="enLetter">ABC</p>
                    </li>
                    <li class="keyItem" @click="numStack('3')">
                        <p>3</p>
                        <p class="enLetter">DEF</p>
                    </li>
                    <li class="keyItem" @click="numStack('4')">
                        <p>4</p>
                        <p class="enLetter">GHI</p>
                    </li>
                    <li class="keyItem colCenter" @click="numStack('5')">
                        <p>5</p>
                        <p class="enLetter">JKL</p>
                    </li>
                    <li class="keyItem" @click="numStack('6')">
                        <p>6</p>
                        <p class="enLetter">MNO</p>
                    </li>
                    <li class="keyItem" @click="numStack('7')">
                        <p>7</p>
                        <p class="enLetter">PQRS</p>
                    </li>
                    <li class="keyItem colCenter" @click="numStack('8')">
                        <p>8</p>
                        <p class="enLetter">TUV</p>
                    </li>
                    <li class="keyItem" @click="numStack('9')">
                        <p>9</p>
                        <p class="enLetter">WXYZ</p>
                    </li>
                    <li class="keyItem grayBg" @click="numStack('.')">
                        <p class="keyDot">.</p>
                    </li>
                    <li class="keyItem colCenter" @click="numStack('0')">
                        <p class="keyZero">0</p>
                    </li>
                    <li class="keyItem grayBg" @click="numStack('deleteNum')">
                        <span class="keydel"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .input {
      width: 100%;
    }
    .pop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .icon_arrow {
        width: 95px;
        height: 90px;
        position: absolute;
        top: 0;
        left: 0;
        background: url(../../widget/images/icon_arrow_left.png) no-repeat center;
        background-size: 22px 40px;
    }

    .bankPwd .bd {
        border: 1px solid #bdbdbd;
        width: 633px;
        margin: 50px auto 30px auto;
        overflow: hidden;
    }

    .bankPwd li {
        width: 105px;
        height: 24px;
        padding: 40px 0 52px 0;
        float: left;
        border-right: 1px solid #efefef;
    }

    .bankPwd li.active span {
        width: 16px;
        height: 16px;
        border-radius: 16px;
        background-color: #000;
        display: block;
        margin: 0 auto;

    }

    .bankPwd li:last-child {
        border-right: 0;
    }

    .bankPwd, .payDetail {
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: #fff;
        z-index: 9999;
    }

    .title {
        height: 100px;
        line-height: 100px;
    }

    .payDetail .wrap {
        margin-top: 0;
    }

    .content {
        padding: 100px 0;
    }

    .closePop {
        position: absolute;
        left: 20px;
        top: 0px;
        display: block;
        width: 40px;
        height: 40px;
        padding: 40px;
    }

    .closePop:before, .closePop:after {
        position: absolute;
        top: 28px;
        left: 50%;
        display: block;
        content: ' ';
        width: 3px;
        height: 40px;
        background-color: #aaa;
    }

    .closePop:before {
        transform: rotate(45deg);
    }

    .closePop:after {
        transform: rotate(-45deg);
    }

    /*键盘  */
    .keyboard {
        border-top: 1px solid #e8e8e8;
    }

    .keyboard .keyItem {
        float: left;
        padding-top: 16px;
        height: 96px;
        width: 33%;
        border-bottom: 1px solid #8c8c8c;
        color: #000;
        line-height: 36px;
        font-size: 40px;
    }

    .keyboard .colCenter {
        width: 34%;
        border-width: 0 1px 1px;
        border-style: solid;
        border-color: #8c8c8c;
    }

    [data-dpr="1"] .keyboard .colCenter {
        border-width: 0 1px 1px !important;
    }

    .keyboard .keyItem .enLetter {
        color: #030303;
        font-size: 22px;
    }

    .keyboard .grayBg {
        background-color: #d2d5da;
    }

    .keyboard .keyItem:active {
        background-color: #d2d5da;
    }

    .keyboard .grayBg:active {
        background-color: #fff;
    }

    .keyboard .keydel {
        display: inline-block;
        margin-top: 14px;
        width: 46px;
        height: 34px;
        background: url(./images/icon_keydel.png) no-repeat;
        background-size: 100% 100%;
    }

    .keyboard .keyZero {
        padding-top: 16px;
    }

    .keyboard .keyDot {
        width: 8px;
        height: 8px;
        background-color: #000;
        border-radius: 8px;
        margin: 30px auto;
        text-indent: -1000px;
    }
    .forget{margin:0 0 25px 530px;}
    .qrcode_icon {
        padding-right: 40px;
        box-sizing: border-box;
        background: url(./images/icon_sys.png) no-repeat right center;
        background-size: 36px 27px;
    }

</style>
<script src="./transferAccount.js"></script>
