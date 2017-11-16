<template>
    <div>
        <ul class="wrap">
            <li class="flexA">
                <span class="f30 g3">原登录密码</span>
                <input type="password" class="w440 db" v-model="psw1" placeholder="请输入原登录密码">
            </li>
            <li class="flexA">
                <span class="f30 g3">新登录密码</span>
                <input type="password" placeholder="请设置6-20位登录密码" maxlength="20" class="w440 db" v-model="psw2">
            </li>
            <li class="flexA">
                <span class="f30 g3">确认新密码</span>
                <input type="password" placeholder="请再次输入新登录密码" maxlength="20" class="w440 db" :class="{confirm:flag}"
                       v-model="psw3">
            </li>
        </ul>
        <p class="f24 g9">密码为6-20位数字、字母或字符组合，不允许有空格</p>
        <div class="content">
            <div class="btn" :class="psw1&&psw2&&psw3?'':'opacity'" @click="modifyLogPsw">提交</div>
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
        padding: 20px 0 149px 40px;
        line-height: 1;
    }

    .confirm {
        -webkit-text-security: disc
    }

    ::-webkit-input-placeholder {
        color: #ccc
    }
</style>
<script src="./modifyLogPsw.js"></script>
