<template>
    <div>
        <ul class="wrap">
            <li class="flexA">
                <span class="f30 g6">交易密码</span>
                <input type="tel" class="w440 db" v-model="psw1" placeholder="请输入6位数字" maxlength="6">
            </li>
            <li class="flexA">
                <span class="f30 g6">确认交易密码</span>
                <input type="tel" placeholder="请再次输入6位数字" maxlength="6" class="w440 db" v-model="psw2">
            </li>
        </ul>
        <p class="f24 g9">密码为6位数字，不允许有空格</p>
        <div class="content">
            <div class="btn" :class="psw1&&psw2?'':'opacity'" @click="setTradePsw">提交</div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .flexA {
        font-size: 30px;
    }

    .w440 {
        width: 440px;
    }

    .f24 {
        padding: 20px 0 170px 40px;
        line-height: 1;
    }

    .confirm {
        -webkit-text-security: disc
    }

    ::-webkit-input-placeholder {
        color: #ccc
    }

    input[type=tel] {
        -webkit-text-security: disc
    }
</style>
<script src="./setTradePsw.js"></script>
