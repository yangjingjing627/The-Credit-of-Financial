<template>
    <div>
        <p class="titleTwo">个人信息</p>
        <ul class="wrap">
            <li class="flexA">
                <span>婚姻状况</span>
                <select class="w440 db" v-model="isMarry">
                    <option value="0">请选择</option>
                    <option value="1">未婚</option>
                    <option value="2">已婚</option>
                    <option value="3">离异</option>
                    <option value="4">丧偶</option>
                </select>
            </li>
        </ul>
        <p class="titleTwo">{{isMarry!=2?'亲属联系方式':'配偶联系方式'}}</p>
        <ul class="wrap">
            <li class="flexA">
                <span>姓名</span>
                <input type="text" :placeholder="isMarry!=2?'请输入亲属姓名':'请输入配偶姓名'" maxlength="20" class="w440 db" v-model="consort">
            </li>
            <li class="flexA">
                <span>手机号</span>
                <div class="flexA p0">
                    <input type="text" readonly="readonly" class="w440 db" placeholder="打开通讯录" v-model="mobile1" @click="fGetTelephoneDirectory(1)">
                </div>
            </li>
            <li class="flexA">
                <span>身份证</span>
                <input type="text" :placeholder="isMarry!=2?'请输入亲属身份证号':'请输入配偶身份证号'" maxlength="18" id="idNum"
                       class="w440 db" v-model="walletBank">
            </li>
        </ul>
        <div v-show="isMarry!=2">
            <p class="titleTwo">其他联系人联系方式</p>
            <ul class="wrap">
                <li class="flexA">
                    <span>姓名</span>
                    <input type="text" placeholder="请输入联系人姓名" maxlength="20" class="w440 db">
                </li>
                <li class="flexA">
                    <span>手机号</span>
                    <div class="flexA p0">
                        <input type="text" placeholder="打开通讯录" readonly="readonly" class="w440 db" v-model="mobile2" @click="fGetTelephoneDirectory(2)">
                    </div>
                </li>
            </ul>
        </div>
        <div class="pl40 pt20 red pb40">{{errorInfo}}</div>
        <div class="btn w670" @click="fSubmit">确认信息无误</div>
    </div>
</template>
<style lang="sass" scoped>
    @import '../static/css/common.css';

    .flexA {
        font-size: 30px;
        color: #5f616b;
    }

    .w440 {
        width: 440px;
    }

    .titleTwo {
        margin: 24px 40px;
        font-size: 28px;
        color: #999999;
    }
    select {
        appearance: none;
        border: none;
        padding-right: 30px;
        padding-left: 10px;
        text-align: right;
        background: url("../lucky/images/arr-down.png") right center no-repeat;
        background-size: 16px 12px;

    option {
        min-height: 20px;
        font-size: 50%;
        border: 2px solid red;
    }

    }
</style>
<script src="./familyInfo.js"></script>