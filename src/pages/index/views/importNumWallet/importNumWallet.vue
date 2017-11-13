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
                <li class="bbe">
                    <span class="left bankIcon"></span>
                    <input type="text" name="" v-model='bank' readonly="readonly">
                </li>
                <li class="bbe">
                    <span class="left">卡号</span>
                    <input type="text" name="" v-model='cardNumber' readonly="readonly">
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
                <div class="btn" :class="nickname?'':'opacity'" @click="importWallet">
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
        width: 236px;
    }

    .btn {
        margin-top: 104px;
    }

    .bankIcon {
        height: 100%;
        background: url('../static/images/icon_bank.png') left center no-repeat;
        background-size: 42px 34px;
    }
</style>
<script src="./importNumWallet.js"></script>