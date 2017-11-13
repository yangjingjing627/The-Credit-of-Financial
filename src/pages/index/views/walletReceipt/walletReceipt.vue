<template>
    <div class="walletReceipt tc bg-white mt20">
        <!-- <button @click="fGenerateQrCode" class="btn">生成收款码</button> -->
        <div class="hd">
            <div class="title">
                <span class="icon_wallet"></span>
                <div class="line"></div>
            </div>
            <h2 class="hash f30">{{userResult.walletAddress}}</h2>
        </div>
        <div class="bd">
            <h3 class="wallet">钱包扫一扫，向我付款</h3>
            <div class="qrCode" v-show="qrCode.length > 0">
                <qriously :value="qrCode" :size="300"/>
            </div>

            <router-link to="setAmount" class="setAmount" v-if="isSet==0">设置金额</router-link>

            <div v-if="isSet==1">
                <h2 class="red">{{amount}}</h2>
                <div class="setAmount" @click="clearAmount(0)">清除金额</div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .walletReceipt {
        height: calc(100% - 90px);
    }

    .walletReceipt .hd {
        padding-top: 78px;
    }

    .walletReceipt .hd .title {
        position: relative;
        margin: 0 28px 28px 28px;
    }

    .walletReceipt .hd .title .icon_wallet {
        background: #f2f2f2 url(./images/icon_wallet.png) no-repeat center;
        background-size: 82px 60px;
        width: 134px;
        height: 134px;
        display: inline-block;
        border-radius: 50%;
        position: relative;
        z-index: 2;
    }

    .walletReceipt .hd .title .line {
        position: absolute;
        z-index: 1;
        top: 46px;
        width: 100%;
        height: 20px;
        border-bottom: 1px solid #eee;
    }

    .walletReceipt .bd {
        padding-top: 100px;
    }

    .walletReceipt .bd .wallet {
        width: 290px;
        margin: 0 auto;
        padding: 18px 0;
        color: #3c3c3c;
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
    }

    .walletReceipt .bd .qrCode {
        padding: 60px 0 15px 0;
    }

    .setAmount {
        color: #30A4FF;
        font-size: 28px;
    }
</style>
<script src="./walletReceipt.js"></script>