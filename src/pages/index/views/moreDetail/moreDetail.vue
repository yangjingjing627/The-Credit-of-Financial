<template>
    <div class="moreDetail mt20">
        <div class="hd">
            <a @click="fActiveSection(0)" href="javascript:;"><span :class="{ active: section == 0 }">项目信息</span></a>
            <a @click="fActiveSection(1)" href="javascript:;"><span :class="{ active: section == 1 }">区块概要</span></a>
        </div>
        <div class="bd">
            <!--项目信息  -->
            <div class="proInfo" v-show="section == 0">
                <dl>
                    <dt>融资方介绍：</dt>
                    <dd v-text="detailResult.borrowerDescription"></dd>
                </dl>
                <dl>
                    <dt>征信信息：</dt>
                    <dd v-text="detailResult.creditInformation"></dd>
                </dl>
                <dl>
                    <dt>担保信息：</dt>
                    <dd v-text="detailResult.guaranteeInformation"></dd>
                </dl>
            </div>
            <!--区块概要  -->
            <div class="divOutline g6 f30" v-show="section == 1">
                <div class="flexA">
                    <h5>区块高度</h5>
                    <div class="w500">{{blockResult.blockNumber}}</div>
                </div>
                <div class="flexA">
                    <h5>交易次数</h5>
                    <div class="w500">{{blockResult.envelopCount}}</div>
                </div>
                <div class="flexA">
                    <h5>区块哈希</h5>
                    <div class="w500">{{blockResult.dataHash}}</div>
                </div>
                <div class="flexA">
                    <h5>上一块哈希</h5>
                    <div class="w500">{{blockResult.previousHash}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .moreDetail {
        background-color: #fff;
    }

    .moreDetail .hd {
        width: 100%;
        border-bottom: 1px solid #eee;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
    }

    .moreDetail .hd a {
        font-size: 30px;
        color: #4b4d56;
        display: block;
        flex: 1;
        text-align: center;
        height: 86px;
        line-height: 86px;
    }

    .moreDetail .hd span.active {
        padding: 0 5px 20px 5px;
        color: #f92b2f;
        border-bottom: 2px solid #f92b2f;
    }

    /*项目信息  */
    .moreDetail .bd dl {
        border-bottom: 1px solid #eee;
        padding: 0 40px 40px 40px;
    }

    .moreDetail .bd dl dt {
        padding: 38px 0;
        font-size: 28px;
        color: #333;
    }

    .moreDetail .bd dl dd {
        color: #777;
        line-height: 46px;
        margin: 0;
    }

    .moreDetail .bd dl .tab {
        background-color: #eee;
        border: 1;
        border-collapse: collapse;
    }

    .moreDetail .bd dl .tab th {
        color: #555;
        height: 70px;
        line-height: 70px;
        background-color: #f6f6f6;
    }

    .moreDetail .bd dl .tab td {
        text-align: center;
        height: 60px;
        line-height: 60px;
        border: 1px solid #eee;
        background-color: #fff;
    }

    .moreDetail .bd dl .tab td .icon_ok {
        width: 25px;
        height: 25px;
        border-radius: 25px;
        background: url(./images/icon_ok.png) no-repeat;
        background-size: 25px 25px;
        display: block;
        margin: 0 auto;
    }

    .divOutline {
        padding-left: 38px;
    }

    .w500 {
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
<script src="./moreDetail.js"></script>