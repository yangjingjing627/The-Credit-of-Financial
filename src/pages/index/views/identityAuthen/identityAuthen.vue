<template>
    <div class="pb40">
        <div class="topWar" v-if='showTip'>
            <div class=""><i></i></div>
            <p>请提交正确的身份证,提交后不可修改</p>
            <div @click="showTip=false"><b></b></div>
        </div>
        <ul class="wrap mt0">
            <li class="flexA border0">
                <p class="f28 g6">添加身份证正面</p>
            </li>
            <li class="tc">
                <!-- <img src="file://storage/emulated/0/Font_1505470984202.png" @click="imgClick($event)" class="fImg" /> -->
                <div class="upload1" @click="fScanIdCard('face')">
                    <img :src="imgSrcFront" v-if="showFront"/>
                </div>
                <p class="margin30 g9 f24">点击上传照片</p>
                <!-- <p class="right_blue" @click="fScanIdCard('face')">点击重新上传照片</p> -->
            </li>
        </ul>

        <ul class="wrap mt0">
            <li class="flexA">
                <span class="w160 f30 g3">姓名</span>
                <input type="text" placeholder="" class="w440" v-model="name" maxlength="10">
                <span class="editIcon"></span>
            </li>
            <li class="flexA">
                <span class="w160 f30 g3">身份证号</span>
                <input type="text" placeholder="" maxlength="20" class="w440" v-model="idCard">
            </li>
        </ul>
        <ul class="wrap">
            <li class="flexA border0">
                <span class="f28 g6">添加身份证背面</span>
            </li>
            <li class="tc">
                <div class="upload2" @click="fScanIdCard('reverse')">
                    <img :src="imgSrcBack" v-if="showBack"/>
                </div>
                <p class="margin30 g9 f24">点击上传照片</p>
                <!-- <p class="right_blue" @click="fScanIdCard('reverse')">点击重新上传照片</p> -->
            </li>
        </ul>
        <ul class="wrap mt0">
            <li class="flexA">
                <span class="w160 f28 g3">有效期</span>
                <input type="text" class="w440" v-model="effectiveTime">
            </li>
        </ul>
        <div class="btn w670 mt30" :class="name&&idCard&&effectiveTime&&frontPicture&&backPicture?'':'disabled'" @click="sureInfo">确认信息无误</div>
    </div>
</template>
<script src="./identityAuthen.js"></script>
<style lang="sass" scoped>
    .fImg {
        border: 2px solid #333;
        width: 200px;
        height: 100px;
    }

    .flexA {
        font-size: 30px;
        color: #5f616b;
    }

    .border0 {
        border-bottom: 0;
        margin-bottom: 20px;
    }

    .w160 {
        width: 160px;
        display: inline-block;
    }

    .w440 {
        width: 440px;
    }

    .editIcon {
        display: inline-block;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: url("./images/edit.png") no-repeat center;
        background-size: 34px 29px;
    }

    .topWar {
        width: 100%;
        color: #A8541D;
        background: #FFEABA;
        height: 70px;
        display: flex;

    div {
        margin-left: 15px;
        width: 70px;
        height: 70px;
        position: relative;

    i, b {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        color: #FA5559;
        background: #fff;
    }
      i {
          background: url(./images/sigh.png) no-repeat center;
          background-size: 30px 30px;
      }
      b {
          background: url(./images/Path.png) no-repeat center;
          background-size: 30px 30px;
      }

    }
    }
    .topWar p {
        flex: 1;
        line-height: 70px;
        font-weight: lighter;
    }

    .margin30 {
        margin: 30px 0;
    }

    .right_blue {
        text-align: right;
        margin: 0 20px 40px 0;
        color: #30A4FF;
        font-size: 26px;
    }

    .upload1, .upload2 {
        font-size: 0; /* 为了去掉‘未选择任何文件’这几个字，也可以随便弄到哪里*/
        margin: 0 auto;
    }

    /* 注意不是直接input > input[type=button] 哦*/
    .upload1, .upload2 {
        font-size: 0;
        width: 329px;
        height: 209px;
        color: #333;
        border: 0;
        /* padding: 40px 100px; */
        border-radius: 5px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .1), 0 0 10px rgba(0, 0, 0, .12);
    }

    .upload1 img, .upload2 img {
        width: 329px;
        height: 209px;
    }

    .upload1 {
        background: url("./images/add-icon.png") no-repeat center, url("./images/author-face.png") no-repeat center;
        background-size: 105px, contain;
    }

    .upload2 {
        background: url("./images/add-icon.png") no-repeat center, url("./images/author-back.png") no-repeat center;
        background-size: 105px, contain;
    }

    .testBtn {
        background: -webkit-linear-gradient(#FF5940 0%, #FF5C9E 100%);
        width: 300px;
        height: 80px;
        border-radius: 16px;
        margin: 100px;
        box-shadow: 0px 20px 40px #c00;
    }

</style>
