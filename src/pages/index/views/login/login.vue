<template>
    <div class="bgw fix">
        <div class="main">

        <router-link to='wallet' class="icon-close"></router-link>
        <div class="banner">
            <h1 class="logo_dw"></h1>
            <h2>乾元金融</h2>
        </div>
        <ul class="loginW">
            <li class="bbe h106">
                <span class="l telIcon"></span>
                <input type="tel" placeholder="请输入手机号" maxlength="11" class="f32 l" v-model="phone"
                       @focus="errorMsg=''">
            </li>
            <li class="bbe">
                <span class="l pswIcon"></span>
                <input type="text" placeholder="请输入登录密码" maxlength="22" class="f32 l" :class="toggle?'':'logPsw'"
                       v-model="logPsw" @input='checkPsw'>
                <span class="eyeOff" :class="toggle?'eyeOn':''" @click="toggle=!toggle"></span>
            </li>
            <li>
              <router-link to="forgotLogPsw" class="w49L">忘记密码?</router-link>
            </li>
            <li class="errormsg">{{'&nbsp'+errorMsg}}</li>
        </ul>
        <div class="content">
            <div class="btn" @click="submit" :class="phone&&logPsw?'':'disabled'">登录</div>
        </div>
      </div>

        <div class="pt42">
            新用户?<router-link to="register" class="w49R">立即注册</router-link>
        </div>
    </div>
</template>
<style lang="sass" scoped>
  @import 'src/static/css/variables.scss';
    .bgw {
        height: 100%;
        width: 100%;
        background: #fff;
        display: flex;
        flex-direction: column;
    }
    .main {
      flex: 1;
    }

    .icon-close {
        background: url('../static/images/delete.png') no-repeat center;
        background-size: 29px 29px;
        width: 59px;
        height: 59px;
        display: inline-block;
        position: absolute;
        top: 19px;
        left: 25px;
    }

    .banner {
        width: 100%;
        height: 493px;
        background-color: #fff;
    }

    .banner .logo_dw {
        background: url("./images/logo_digitalWallet.png")  no-repeat center bottom;
        width: 307px;
        height: 89px;
        background-size: 147px;
        margin: 0 auto;
        padding-top: 300px;
    }

    .banner h2 {
      margin-top: 26px;
      text-align: center;
    }

    .loginW {
        padding: 0 40px;
        background: #fff;
    }

    .bbe {
        height: 100px;
        overflow: hidden;
    }

    .h106 {
        height: 106px;
    }

    .telIcon {
        margin-top: 22px;
        width: 70px;
        height: 60px;
        background: url("./../static/images/tel_icon.png") no-repeat center;
        background-size: 24px 30px;
    }
    .pswIcon {
      margin-top: 22px;
      width: 70px;
      height: 60px;
      background: url("./../static/images/pwd_icon.png") no-repeat center;
      background-size: 24px 30px;
    }

    .f32 {
        width: 80%;
        height: 100%;
    }

    .logPsw {
        -webkit-text-security: disc;
    }

    .pt42 {
        height: 72px;
        width: 100%;
        font-size: 28px;
        text-align: center;
        padding-bottom: 44px;
        box-sizing: border-box;
        a {
          color: $primary;
        }
    }

    .w49L {
        float: right;
        font-size: 28px;
        color: $link-color;
        margin-bottom: 90px;
    }

    .w49R {
        border-left: 1px solid #e3e3e3;
        padding-left: 32px;
        width: 49%;
        font-size: 30px;
        color: #777;
    }
</style>
<script src="./login.js"></script>
