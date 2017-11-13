<template>
    <div>
        <div class="bg-gradient h330">
            <div class="decoration"></div>
            <div class="smile"></div>
            <p class="f30">{{mobilePhone | formatTel}}</p>
        </div>
        <ul>
            <router-link to="realNameAuth">
                <li>
                    <span class="iconW"></span>
                    <span>实名认证</span>
                    <i class="circleL"></i>
                    <i></i>
                    <span class="r arrows"></span>
                </li>
            </router-link>
            <router-link to="modifyLogPsw">
                <li>
                    <span class="iconW iconW2"></span>
                    <span>修改登录密码</span>
                    <i class="circleL"></i>
                    <i></i>
                    <span class="r arrows"></span>
                </li>
            </router-link>
            <router-link :to="tradePath">
                <li>
                    <span class="iconW iconW2"></span>
                    <span>{{tradeMsg}}</span>
                    <i class="circleL"></i>
                    <i></i>
                    <span class="r arrows"></span>
                </li>
            </router-link>
            <router-link to="feedback">
                <li>
                    <span class="iconW iconW3"></span>
                    <span>意见反馈</span>
                    <span class="r arrows"></span>
                </li>
            </router-link>
        </ul>
    </div>
</template>
<style lang="sass" scoped>
    @import "../static/css/common.css";

    .h330 {
        height: 330px;
        padding-top: 72px;
    }

    .smile {
        margin: 0 auto;
        width: 136px;
        height: 136px;
        background: url("./../wallet/images/smile.png") 0 -138px no-repeat;
        background-size: 136px 274px;
    }

    .f30 {
        padding-top: 20px;
        text-align: center;
        color: #fff;
    }

    ul {
        margin: 21px auto 0;
        box-shadow: 0px 2px 16px 0px rgba(111, 31, 33, 0.1);
        border-radius: 6px;
        width: 690px;
        padding: 0 22px 0 28px;
        background: #fff;
    }

    li {
        position: relative;
        border-bottom: 1px dashed #eee;
        box-sizing: border-box;
        padding-right: 11px;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        over-flow: hidden
    }

    .iconW {
        display: inline-block;
        width: 45px;
        height: 34px;
        background: url("./../wallet/images/iconA.png") 0 0 no-repeat;
        background-size: 122px 483px;
        vertical-align: -12px;
    }

    .iconW2 {
        background-position: 0 -40px;
        vertical-align: -8px;
    }

    .iconW3 {
        background-position: 0 -100px;
        vertical-align: -6px;
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

    .r {
        margin-top: 40px;
    }
</style>
<script src="./userCenter.js"></script>
