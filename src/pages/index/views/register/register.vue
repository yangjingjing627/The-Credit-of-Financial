<template>
    <div class="bg">
        <ul>
            <li class="l"  v-bind:class="{ registing: step1 }">
                <div class="step1_icon step_icon" v-if="sucIcon1">1</div>
                <div class="step1_icon suc" v-else></div>
                <div class="f24">填写手机号</div>
            </li>
            <li class="step2W" v-bind:class="{ registing: step2 }">
                <div class="step2_icon step_icon" v-if="sucIcon2">2</div>
                <div class="step2_icon suc" v-else></div>
                <div class="f24">获取验证码</div>
            </li>
            <li class="r" v-bind:class="{ registing: step3 }">
                <div class="step3_icon step_icon" v-if="sucIcon3">3</div>
                <div class="step3_icon suc" v-else></div>
                <div class="f24">设置登录密码</div>
            </li>
        </ul>
        <div v-show="step1">
            <div class="step">
                <input type="tel" class="tel inputCode" maxlength="11" v-model="tel" @keyup="watchTel"
                       @focus="errorMsg=''">
                <span class="delate" @click="tel=''"></span>
            </div>
            <p class="errormsg">&nbsp{{errorMsg}}</p>
            <div class="content">
                <div class="btn" :class="tel?'':'opacity'" @click="submit1">下一步</div>
            </div>
        </div>
        <div v-show="step2">
            <div class="step">
                <input type="text" maxlength="6" placeholder="请输入6位验证码" class="authCode inputCode" v-model="authCode"
                       @focus="errorMsg=''">
                <span class="codeBtn" v-if="code"><i class="blue">{{time}}s</i>重新获取</span>
                <input type="text" class="codeBtn blue" value="获取验证码" v-else @click="getCode" readonly="readonly">
            </div>
            <p class="errormsg">&nbsp{{errorMsg}}</p>
            <div class="content">
                <div class="btn" :class="authCode?'':'opacity'" @click="submit2">下一步</div>
            </div>
        </div>
        <div v-show="step3">
            <div class="step">
                <input type="text" class="logPsw inputCode" maxlength="16" placeholder="设置登录密码" v-model="logPsw"
                       :class="toggle?'':'security'" @keyup="watchPsw">
                <span class="eyeOff" :class="toggle?'eyeOn':''" @click="toggle=!toggle"></span>
                <span class="tip">6-16位数字、字母、符号，不允许有空格</span>
            </div>
            <p class="errormsg">&nbsp{{errorMsg}}</p>
            <div class="content">
                <input type="button" value="完成" class="btn" :class="sucIcon3?'opacity':''" :disabled="sucIcon3"
                       @click="submit3">
            </div>
        </div>

    </div>
</template>
<style lang="sass" scoped>
  @import 'src/static/css/variables.scss';
    .btn {
        line-height: 88px
    }

    .bg {
        width: 100%;
        height: 100%;
        background: #fff;
    }

    ul {
        box-sizing: border-box;
        padding: 110px 132px 0 134px;
        overflow: hidden;
    }

    .step2W {
        float: left;
        margin-left: 47px;
        width: 146px
    }

    .step_icon {
        border: $border;
        border-radius: 50%;
        width: 33px;
        height: 33px;
        text-align: center;
        line-height: 33px;
        font-size: 24px;
        color: #868896;
        font-weight: 300;
        background-color: $bg-color;
    }

    .step1_icon {
        margin-left: 41px;
        position: relative;
    }

    .step1_icon:after, .step2_icon:after {
        position: absolute;
        top: 16px;
        left: 42px;
        content: "";
        width: 120px;
        height: 0;
        border-top: 3px dotted #a0a0a0;
        opacity: 0.6;
    }

    .step2_icon {
        margin-left: 50px;
        position: relative
    }

    div.step2_icon:after {
        width: 130px;
    }

    .step3_icon {
        margin-left: 54px;
    }

    .f24 {
        padding: 36px 0 127px;
        line-height: 1;
        font-size: 24px;
        color: $first-header;
    }

    .step {
        position: relative;
        margin: 0 auto;
        border-bottom: 1px solid #acacac;
        width: 600px;
        overflowe: hidden;
    }

    .inputCode {
        padding: 6px 0 6px 10px;
        border: none;
        font-size: 32px;
        color: #282828;
        line-height: 1;
    }

    .delate {
        float: right;
        margin: 6px 10px 0 0;
        width: 31px;
        height: 31px;
        background: url("./images/delate.png") center no-repeat;
        background-size: contain;
    }

    .active {
        border-color: #ffd02e;
        background: #ffd02e;
        color: #fff;
    }

    .right {
        border: none;
        width: 34px;
        height: 34px;
        background: url("./images/suc.png") center no-repeat;
        background-size: contain;
    }

    ::-webkit-input-placeholder {
        color: #bebebe;
    }

    .security {
        -webkit-text-security: disc;
    }

    .eyeOff {
        margin: 8px 12px 0 0;
    }

    .tip {
        position: absolute;
        left: 0;
        bottom: -51px;
        width: 100%;
        font-size: 22px;
        color: #777;
        text-align: center;
        line-height: 1;
    }

    .codeBtn {
        float: right;
        margin-top: 6px;
        border-left: 1px solid #ddd;
        width: 156px;
        height: 34px;
        text-align: center;
        color: #bebebe;
    }

    .blue {
        color: #0094ff
    }

    .content {
        padding-top: 100px;
    }

    .errormsg {
        padding-left: 80px;
    }

    .suc {
        border: none;
        width: 34px;
        height: 34px;
        background: url("./images/suc.png") center no-repeat;
        background-size: 100%;
    }
    .registing {
      .step_icon {
        background-color: $primary;
        color: #fff;
      }
      .f24 {
        color: $primary;
      }
    }
</style>
<script src="./register.js"></script>
