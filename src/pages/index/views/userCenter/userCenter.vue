<template>
    <div>
        <!-- <div class="bg-gradient h330"> -->
        <div class="bg-white">
            <!-- <div class="decoration"></div> -->
            <div class="smile"></div>
            <p class="f40 g3">{{mobilePhone | formatTel}}</p>
        </div>
        <ul class="mt20">
            <router-link to="realNameAuth">
                <li>
                    <span class="iconW"></span>
                    <span class="f32 g3">实名认证</span>
                    <!-- <i class="circleL"></i> -->
                    <!-- <i></i> -->
                    <span class="r arrows"></span>
                </li>
            </router-link>
            <router-link to="modifyLogPsw">
                <li>
                    <span class="iconW iconW2"></span>
                    <span class="f32 g3">修改登录密码</span>
                    <!-- <i class="circleL"></i> -->
                    <!-- <i></i> -->
                    <span class="r arrows"></span>
                </li>
            </router-link>
            <router-link :to="tradePath">
                <li>
                    <span class="iconW iconW2"></span>
                    <span class="f32 g3">{{tradeMsg}}</span>
                    <!-- <i class="circleL"></i> -->
                    <!-- <i></i> -->
                    <span class="r arrows"></span>
                </li>
            </router-link>
            <router-link to="feedback">
                <li>
                    <span class="iconW iconW3"></span>
                    <span class="f32 g3">意见反馈</span>
                    <span class="r arrows"></span>
                </li>
            </router-link>
        </ul>
    </div>
</template>
<style lang="sass" scoped>
    @import "../static/css/common.css";

    .bg-white {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 52px 55px 67px;
      border-top: 1px solid #eee;
      p {
        flex: 1;
        padding-left: 28px;
      }
    }

    .h330 {
        height: 330px;
        padding-top: 72px;
    }

    .smile {
        margin: 0 auto;
        width: 136px;
        height: 136px;
        border-radius: 50%;
        background: url("./images/user_icon.png") center no-repeat;
        background-size: 113px 113px;
        box-shadow: 0 4px 9px #D6D6D6;
    }

    .f30 {
        padding-top: 20px;
        text-align: center;
        color: #fff;
    }

    ul {
        // margin: 21px auto 0;
        box-shadow: 0px 2px 16px 0px rgba(111, 31, 33, 0.1);
        border-radius: 6px;
        // width: 690px;
        padding: 0 40px;
        background: #fff;
    }

    li {
        position: relative;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        padding-right: 11px;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        over-flow: hidden;
        &:last-child {
        border-bottom: 0;
      }
    }

    .iconW {
        display: inline-block;
        width: 45px;
        height: 34px;
        background: url("./images/nameauth_icon.png") left center no-repeat;
        background-size: 28px 27px;
        vertical-align: -8px;
    }

    .iconW2 {
      background: url("./images/psw_icon.png") left center no-repeat;
      background-size: 24px 30px;
        // background-position: 0 -40px;
        // vertical-align: -8px;
    }

    .iconW3 {
      background: url("./images/feedback.png") left center no-repeat;
      background-size: 24px 26px;
        // background-position: 0 -100px;
        // vertical-align: -6px;
    }

    // i {
    //     position: absolute;
    //     right: -32px;
    //     bottom: -10px;
    //     width: 20px;
    //     height: 20px;
    //     border-radius: 50%;
    //     background: #f9f9f9;
    // }

    // .circleL {
    //     left: -38px;
    // }

    .r {
        margin-top: 20px;
    }
    .arrows {
      background-position: right center;
    }
</style>
<script src="./userCenter.js"></script>
