<template>
    <div class="bindBank mt20">
        <div class="wrap bg-white">
            <div class="flexA">
                <div>
                    <span class="title">持卡人</span>
                    <input type="text" class="f28" readonly="readonly" v-model="userList.realName"/>
                </div>
            </div>
            <div class="flexA">
                <div>
                    <span class="title">身份证</span>
                    <input type="text" class="f28" readonly="readonly" v-model="userList.idCardNumber"/>
                </div>
            </div>
            <div class="flexA">
                <div>
                    <span class="title icon_bank"></span>
                    <span class="f28 bankName" :bankCode="bankCode" @click="fActiveSection(true)">{{bankName}}</span>
                    <!-- <input type="text" class="f28" placeholder="请输入银行卡号" v-model="bankName"/> -->
                    <!-- 银行列表 -->
                    <div class="bankListWrap" v-show="section">
                        <div class="bList">
                            <!-- <div class="hd">
                                <h2 class="mTitle">请选择银行</h2>
                            </div> -->
                            <ul class="bd">
                                <li v-for="list in bankL">
                                    <a href="javascript:;" :value="list.bankCode"
                                       @click="bankNameF(list.bankCode,list.bankName,list.amountLimit,list.countLimit)">{{list.bankName}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <i class="arrows tr"></i>
            </div>
            <div class="flexA">
                <div>
                    <span class="title">卡号</span>
                    <input type="text" maxlength="22" class="f28" placeholder="请输入银行卡号" v-model="bankCard"/>
                </div>
            </div>
            <div class="flexA">
                <div>
                    <span class="title">手机号</span>
                    <input type="text" maxlength="11" class="f28" placeholder="请输入银行预留的手机号码" v-model="mobilePhone"/>
                </div>
            </div>
            <div class="flexA">
                <div>
                    <span class="title">验证码</span>
                    <input type="number" placeholder="请输入验证码" maxlength="6" v-model="smsCode">
                </div>
                <div class="getCodeBtn" v-if="code">{{time}}s重新获取</div>
                <div class="getCodeBtn" v-else @click="fGetCode">获取验证码</div>
            </div>
        </div>

        <!-- 错误提示 -->
        <div class="errormsg tc pt20">{{errormsg}}</div>

        <div class="content">
            <div class="mt200">
                <label class="g9">
                    <input name="checkbox" type="checkbox" class="checkbox" checked/>
                    <span>我已阅读并同意<a href="javascript:;" class="blue">《代扣协议》</a></span>
                </label>
            </div>
            <div class="btn mt30" @click="bindBankFn">确认绑定</div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .title {
        font-size: 30px;
        color: #333;
        width: 140px;
        display: inline-block;
    }

    .icon_bank {
        background: url(../static/images/icon_bank.png) no-repeat left 6px;
        width: 140px;
        height: 40px;
        background-size: 42px 34px;
    }

    .checkbox {
        width: 24px;
        height: 24px;
        background: #fff;
        border: 1px solid #eee;
        position: relative;
        top: 5px;
        margin-right: 15px;
    }

    .checkbox:checked {
        background: #fff url(images/icon_checked.png) no-repeat center;
        background-size: 22px 19px;
    }

    .cInput {
        width: 400px;
        font-style: normal;
        border: none;
        height: 50px;
    }

    .bankListWrap {
        background: rgba(#000, 0.7);
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        z-index: 99;
    }

    .bankListWrap .mTitle {
        font-size: 30px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border-bottom: 1px solid #eee;
    }

    .bankListWrap .bList {
        background: #fff;
        width: 100%;
        height: 700px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 999;
    }

    .bankListWrap ul{
        height: 670px;
        overflow-y: auto;
    }
    .bankListWrap ul li{
        border-bottom: 1px solid #eee;
    }
    .bankListWrap ul li a {
        font-size: 30px;
        height: 110px;
        line-height: 110px;
        display: block;
        text-align: center;
    }
    .bankListWrap ul li:last-child{
        border-bottom:0;
    }

    .bankListWrap ul li a:active,.bankListWrap ul li a:visited {
        background: #f3f3f3;
    }

    .bankName{
        width: 490px;
        display: inline-block;
        padding-left: 14px;
    }
</style>
<script src="./bindBank.js"></script>