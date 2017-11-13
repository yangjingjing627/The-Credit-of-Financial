<template>
    <div class="wrapper">
        <div class="main">
            <div class="head">
                <input type="text" name="search" class="inpSearch" placeholder="搜索"/>
                <router-link to="notice" class="icon_notice"></router-link>
            </div>
            <div class="nav">
                <ul class="fix">
                    <li>
                        <div @click="fScanQRCode">
                            <span class="icon icon_richScan"></span>
                            <span class="mtitle">扫一扫</span>
                        </div>
                    </li>
                    <li>
                        <router-link to="transferAccount">
                            <span class="icon icon_transfer"></span>
                            <span class="mtitle">转账</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="walletReceipt">
                            <span class="icon icon_walletReceipt"></span>
                            <span class="mtitle">收款</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="sidebar">
            <ul class="fix">
                <li>
                    <router-link to="lucky">
                        <span class="icon icon_borrow"></span>
                        <h3 class="mtitle">商户借款</h3>
                    </router-link>
                </li>
                <li>
                    <router-link to="project">
                        <span class="icon icon_manage"></span>
                        <h3 class="mtitle">精选理财</h3>
                    </router-link>
                </li>
                <li>
                    <span class="icon icon_creditCard"></span>
                    <h3 class="mtitle">信用卡优惠</h3>
                </li>
                <li>
                    <span class="icon icon_live"></span>
                    <h3 class="mtitle">钱包生活</h3>
                </li>
                <li>
                    <span class="icon icon_steward"></span>
                    <h3 class="mtitle">钱包管家</h3>
                </li>
                <li>
                    <span class="icon icon_taxi"></span>
                    <h3 class="mtitle">健康出行</h3>
                </li>
                <li>
                    <span class="icon icon_carport"></span>
                    <h3 class="mtitle">车位管家</h3>
                </li>
                <li>
                    <span class="icon icon_more"></span>
                    <h3 class="mtitle">更多</h3>
                </li>
            </ul>
        </div>

        <div class="home_banner">
            <div class="banner_bg"></div>
        </div>

        <!-- 招财贷 申请动态 -->
        <div class="bidDynamic bg-white mt20" v-if="bynamic">
            <div class="bd fix">
                <span class="icon icon_dynamic l"></span>
                <div class="l">
                    <h3 class="mtitle">招财贷 我的申请动态</h3>
                    <p class="label c9">{{time}}</p>
                </div>
                <div class="r">
                    <span class="status_audit">{{status}}</span>
                </div>
            </div>
            <div class="ft">
                <router-link :to="url" class="tc more">查看更多</router-link>
            </div>
        </div>

        <!-- 招财贷 昨日收益 -->
        <!-- <div class="bidDynamic bg-white mt20">
            <div class="bd fix">
                <span class="icon icon_earnings l"></span>
                <div class="l">
                    <h3 class="mtitle">招财贷 我的昨日收益</h3>
                    <p class="label c9">9:00</p>
                    <div class="money_con">
                        <span class="icon_money">￥</span><span class="money">+12.99</span>
                    </div>
                    <p class="label">8-11好贷宝收益</p>
                </div>
            </div>
            <div class="ft">
                <router-link to="bidDetail" class="tc more">查看更多</router-link>
            </div>
        </div> -->
    </div>
</template>
<style lang="sass" scoped>
    .main {
        background: url(images/bg_head.png) no-repeat;
        height: 387px;
        width: 100%;
        background-size: 100%;
        padding: 50px 20px 50px 30px;
    }

    .inpSearch {
        background: #fff url(./../static/images/icon_search.png) no-repeat 30px center;
        background-size: 26px 26px;
        border-radius: 100px;
        width: 618px;
        height: 56px;
        line-height: 56px;
        font-size: 28px;
        padding-left: 75px;
        margin-right: 12px;
    }

    .icon_notice {
        background: url(images/icon_notice.png) no-repeat center;
        width: 56px;
        height: 58px;
        background-size: 100%;
        display: inline-block;
        position: relative;
        top: 14px;
    }

    ::-webkit-input-placeholder { /* WebKit browsers */
        color: #ccc;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #ccc;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #ccc;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color: #ccc;
    }

    .nav {
        background: #fff;
        box-shadow: 0 1px 22px 0 rgba(207, 114, 84, 0.32);
        border-radius: 10px;
        margin: 40px auto 0 auto;
        padding: 0 30px;
    }

    .nav li {
        float: left;
        margin: 28px 50px;
    }

    .nav li a {
        display: block;
    }

    .nav li .mtitle {
        font-size: 26px;
        line-height: 38px;
        text-align: center;
        display: block;
    }
    
    .nav li .icon {
        width: 110px;
        height: 110px;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .nav li .icon_richScan {
        background-image: url(images/icon_richScan.png);
    }

    .nav li .icon_transfer {
        background-image: url(images/icon_transfer.png);
    }

    .nav li .icon_walletReceipt {
        background-image: url(images/icon_walletReceipt.png);
    }

    .sidebar {
        background: #fff;
        padding: 20px 0 20px 0;
        margin-bottom: 20px;
    }

    .sidebar li {
        float: left;
        width: 187px;
        height: 155px;
        box-sizing: border-box;
        text-align: center;
    }

    .sidebar li a {
        display: block;
    }

    .sidebar li .mtitle {
        font-size: 26px;
    }
    

    .sidebar li:nth-child(4), .sidebar li:nth-child(8) {
        border-right: 0;
    }

    .sidebar li .icon {
        background: url(images/icon_link.png) no-repeat;
        background-size: 390px 166px;
        width: 60px;
        height: 70px;
        margin: 20px 0 0 0;
    }
    .sidebar li .icon_borrow{
        background-position-x: -8px;
    }
    .sidebar li .icon_manage {
        background-position-x: -112px;
    }

    .sidebar li .icon_creditCard {
        background-position: -212px 4px;
    }

    .sidebar li .icon_live {
        background-position-x: -314px;
    }

    .sidebar li .icon_steward {
        background-position: -8px -80px;
    }

    .sidebar li .icon_taxi {
        background-position: -120px -82px;
    }

    .sidebar li .icon_carport {
        background-position: -214px -76px;
    }

    .sidebar li .icon_more {
        background-position: -320px -78px;
    }

    .home_banner {
        background:#fff;
        width: 100%;
        padding:20px 0;
    }
    .banner_bg{
        background:#fff url(images/home_banner.png) no-repeat center;
        background-size: 710px 260px;
        width: 100%;
        height: 260px;
    }

    .bidDynamic {
        padding: 0 30px;
    }

    .bidDynamic .bd {
        padding: 24px 0;
        border-bottom: 1px solid #eee;
    }

    .bidDynamic .bd .icon_dynamic {
        background: url(images/icon_dynamic.png) no-repeat;
    }

    .bidDynamic .bd .icon_earnings {
        background: url(images/icon_earnings.png) no-repeat;
    }

    .bidDynamic .bd .icon {
        background-size: 100%;
        width: 50px;
        height: 50px;
        display: inline-block;
        margin-right: 22px;
    }

    .bidDynamic .bd .mtitle {
        font-size: 26px;
        line-height: 38px;
    }

    .bidDynamic .bd .label {
        padding: 12px 0;
        color: #999;
    }

    .bidDynamic .bd .status_audit {
        background: #FBAB4A;
        border-radius: 2px;
        font-size: 20px;
        color: #FFFFFF;
        line-height: 30px;
        width: 80px;
        height: 30px;
        display: inline-block;
        text-align: center;
    }

    .bidDynamic .bd .icon_money {
        background: #ffb94c;
        width: 26px;
        height: 26px;
        display: inline-block;
        background-size: 100%;
        border-radius: 100%;
        margin-right: 20px;
        color: #fff;
        text-align: center;
        line-height: 28px;
        position: relative;
        top: -8px;
    }

    .bidDynamic .bd .money {
        font-size: 54px;
        line-height: 48px;
        letter-spacing: -0.58px;
    }

    .bidDynamic .ft .more {
        font-size: 28px;
        color: #666666;
        padding: 20px 0;
        display: block;
    }
</style>
<script src="./home.js"></script>