<template>
    <div class="walletReceipt tc bg-white mt20">
        <div class="hd">
            <div class="title" v-if="isSet==0">
                <span class="icon_wallet icon_wallet_ahead"></span>
                <div class="line line_ahead"></div>
            </div>
            <div class="title" v-if="isSet==1">
                <span class="icon_wallet icon_wallet_back"></span>
                <div class="line line_back"></div>
            </div>
            <h2 class="hash f28 g9b">dfghjfghj{{userResult.walletAddress}}</h2>
            <h2 class="g3 f32 pt30" v-if="amount">¥<span class="f64">{{amount}}</span></h2>
        </div>
        <div class="bd">
            <div class="qrCode" v-show="qrCode.length > 0">
                <qriously :value="qrCode" :size="352"/>
            </div>
            <h3 class="wallet g6 f28">钱包扫一扫，向我付款</h3>

            <router-link to="setAmount" class="f28 g_link fw300" v-if="isSet==0">设置金额</router-link>

            <div v-if="isSet==1">
                <div class="f28 g_link fw300" @click="clearAmount(0)">清除金额</div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .walletReceipt {
        height: calc(100% - 20px);
    }

    .walletReceipt .hd {
        padding-top: 88px;
    }

    .walletReceipt .hd .title {
        position: relative;
        margin: 0 28px 28px 28px;
    }

    .icon_wallet {
        background: #f2f2f2 url(./images/icon_wallet.png) no-repeat center;
        background-size: 82px 60px;
        width: 134px;
        height: 134px;
        display: inline-block;
        border-radius: 50%;
        position: relative;
        z-index: 2;
    }

    .icon_wallet_ahead {
        background: #f2f2f2 url(./images/icon_wallet.png) no-repeat center;
        background-size: 30px 22.7px;
        width: 62px;
        height: 62px;
        display: inline-block;
        border-radius: 50%;
        position: relative;
        z-index: 2;
    }
    .icon_wallet_back {
        background: #f2f2f2 url(./images/icon_wallet.png) no-repeat center;
        background-size: 82px 60px;
        width: 134px;
        height: 134px;
        display: inline-block;
        border-radius: 50%;
        position: relative;
        z-index: 2;
    }

    .line_back {
        position: absolute;
        z-index: 1;
        top: 46px;
        width: 100%;
        height: 20px;
        border-bottom: 1px solid #eee;
    }
      .line_ahead {
          position: absolute;
          z-index: 1;
          top: 16px;
          width: 100%;
          height: 20px;
          border-bottom: 1px solid #eee;
      }

    .walletReceipt .bd {
        // padding-top: 100px;
    }

    .walletReceipt .bd .wallet {
        width: 290px;
        margin: 0 auto;
        padding: 18px 0;
        color: #3c3c3c;
        // border-top: 1px solid #999;
        // border-bottom: 1px solid #999;
    }

    .walletReceipt .bd .qrCode {
        padding: 60px 0 15px 0;
        // width: 352px;
        // height: 352px;
        // padding-top: 60px;
        // margin: 0 auto;
    }
    .g9b {
      color: #9B9B9B;
    }

</style>
<script src="./walletReceipt.js"></script>
