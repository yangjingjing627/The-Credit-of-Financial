<template>
    <div>
        <div>
            <ul class="wrap">
                <li class="bbe">
                    <span class="left">持卡人</span>
                    <input type="text" v-model="realName" readonly="readonly">
                </li>
                <li class="bbe">
                    <span class="left">身份证号</span>
                    <input type="text" name="" v-model="idCardNumber" readonly="readonly">
                </li>
                <li class="bbe arrow_r">
                    <span class="left bankIcon"></span>
                    <input type="text" name="" v-model='bank' readonly="readonly">
                </li>
                <li class="bbe close">
                    <span class="left">卡号</span>
                    <input type="text" name="" v-model='cardNumber' readonly="readonly">
                    <b @click="clearInput"></b>
                </li>
                <li class="bbe">
                    <span class="left">手机号</span>
                    <input type="text" name="" readonly="readonly" v-model='mobilePhone'>
                </li>
                <li>
                    <span class="left">钱包昵称</span>
                    <input type="text" name="" placeholder="请输入您的钱包账户昵称" v-model='nickname'>
                </li>
            </ul>
            <div class="content">
                <div class="btn fw300" :class="nickname?'':'opacity'" @click="importWallet">
                    确定申请
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    li {
        height: 99px;
        overflow: hidden;
        font-size: 30px;
        margin: 0 40px;
    }

    span {
        float: left;
        line-height: 100px;
    }

    input[type=text], input[type=password] {
        float: left;
        border: none;
        line-height: 99px;
        width: 62%;
        font-size: 28px;
    }

    span.left {
        width: 200px;
        font-size: 32px;
        color: #333;
    }

    .btn {
        margin-top: 104px;
    }

    .bankIcon {
        height: 100%;
        background: url('../static/images/icon_bank.png') left center no-repeat;
        background-size: 42px 34px;
    }
    .close {
      position: relative;
      b {
        position: absolute;
        right: 0;
        top: 35px;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: #CCCCCC url('../static/images/close_icon.png') center no-repeat;
      }
    }
</style>
<script src="./importNumWallet.js"></script>
