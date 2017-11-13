<template>
    <div>
        <ul class="wrap">
            <li>
                <span class="nameIcon"></span>
                <input type="text" placeholder="请输入真实姓名" v-model="name"
                       @focus="errorMsg=(errorMsg=='身份证格式不正确')?'身份证格式不正确':''" maxlength="20" ref='input1'>
            </li>
            <li>
                <span class="idIcon"></span>
                <input type="text" placeholder="请输入身份证号" v-model="idCard"
                       @focus="errorMsg=(errorMsg=='姓名格式不正确')?'姓名格式不正确':''" maxlength="18" ref="input2">
            </li>
        </ul>
        <p class="errormsg pl40">&nbsp{{errorMsg}}</p>
        <div class="content mt106">
            <div class="btn" :class="name&&idCard?'':'opacity'" @click="submit" v-show="realNameFlag">完成</div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .mt106 {
        margin-top: 106px;
    }

    li {
        border-bottom: 1px solid #efeded;
        height: 95px;
        display: flex;
        display: -webkit-box;
        align-content: start;
        -webkit-box-pack: start;
        align-items: center;
        -webkit-box-align: center;
        font-size: 30px;
        color: #333;
    }

    span {
        display: block;
        width: 88px;
        height: 31px;
        background: url("./images/nameIcon.png") 0 0 no-repeat;
        background-size: 29px 31px;
    }

    .idIcon {
        background: url("./images/idIcon.png") 0 0 no-repeat;
        background-size: 37px 31px;
    }

    input {
        display: block;
        border: none;
        padding: 0;
        font-size: 30px;
        width: 80%
    }
</style>
<script src="./realNameAuth.js"></script>