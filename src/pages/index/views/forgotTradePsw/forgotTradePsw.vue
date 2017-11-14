<template>
    <div>
        <div class="step1" v-show="show">
            <ul class="wrap f32 g6">
                <li class="flexA">
                    <div>
                        <span class="iconW"></span>
                        <input type="tel" placeholder="请输入手机号" maxlength="11" v-model="tel">
                    </div>
                    <div class="getCodeBtn" v-if="code"><i class="blue">{{time}}s</i>重新获取</div>
                    <div class="getCodeBtn" v-else @click="getCode">获取验证码</div>
                </li>
                <li class="flexA">
                    <div>
                        <span class="iconW codeIc"></span>
                        <input type="text" placeholder="请输入验证码" maxlength="6" v-model="authCode">
                    </div>
                </li>
            </ul>
            <div class="tc errormsg">{{errormsg}}</div>
            <div class="content mt100">
                <div class="btn" :class="tel&&authCode?'':'opacity'" @click="submit">下一步</div>
            </div>
        </div>
        <div class="step2" v-show="!show">
            <div class="wrap f30 mb0">
                <span class="pr30">新交易密码</span>
                <input type="password" maxlength="6" placeholder="" v-model="newPsw">
            </div>
            <p class="f22">密码为6位数字，不允许有空格</p>
            <div class="content">
                <input type="button" value="完成" class="btn" :class="newPsw?'':'opacity'" @click="savePsw">
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    // .wrap {
    //     margin-bottom: 124px;
    //     line-height: 100px;
    // }

    .codeIc {
        background-position: 0 -54px
    }

    input {
        vertical-align: middle
    }

    .mb0 {
        margin-bottom: 0;
    }

    .f22 {
        color: #5f616b;
        padding: 20px 0 60px 40px;
    }

    .btn {
        line-height: 88px;
    }
</style>
<script src="./forgotTradePsw.js"></script>s
