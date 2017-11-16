<template>
    <div>
        <ul class="wrap">
            <li class="flexA">
                <span class="f32 g6">原交易密码</span>
                <input type="password" class="w440 db" v-model="psw1" placeholder="请输入原交易密码" maxlength="6">
            </li>
        </ul>
        <ul class="wrap">
            <li class="flexA">
                <span class="f32 g6">新交易密码</span>
                <input type="password" placeholder="6位的交易密码" maxlength="6" class="w440 db" v-model="psw2">
            </li>
            <li class="flexA">
                <span class="f32 g6">确认新密码</span>
                <!-- <div class="flexA w440 p0"> -->
                <input type="text" placeholder="请再次输入交易密码" maxlength="6" class="w440 db" :class="{confirm:flag}" v-model="psw3">
                    <!-- <div class="eyeOff" :class="{eyeOn:!flag}" @click="toggle"></div> -->
                <!-- </div> -->
            </li>
        </ul>
        <p class="f24 g9 pt20 pl40">密码为6位数字，不允许有空格</p>
        <div class="content">
            <div class="btn" :class="psw1&&psw2&&psw3?'':'opacity'" @click="modifyLogPsw">提交</div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .flexA {
        font-size: 30px;
        color: #5f616b;
    }

    .w440 {
        width: 440px;
    }

    .f22 {
        padding: 20px 0 88px 40px;
        color: #5f616b;
        line-height: 1;
    }

    .confirm {
        -webkit-text-security: disc
    }

    .eyeOff {
        margin: 0;
    }
    .content {
      margin-top: 147px;
    }
</style>
<script src="./modifyTradePsw.js"></script>
