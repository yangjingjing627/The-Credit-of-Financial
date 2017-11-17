<template>
    <div class="joinWrap vueTpl mt20 rel">
        <form action="#" class="projectBidForm" method="post" @submit.prevent="">
            <div class="joinItem">
                <div class="itemR"><span class="red fw300">{{qbm | toThousands}}<b class="f28 g6 fw300">(QBM)</b></span>
                </div>
                <span class="itemTitle">剩余可投金额：</span>
            </div>
            <div class="joinItem joinItem_1 mt10">
                <span class="itemTitle">输入金额：</span>
                <div class="amountInfo">
                    <p class="f24 g9 pt5"><span v-text="proList.startInvestAmount"></span>元起投，以<span
                            v-text="proList.increaseInvestAmount"></span>元的整数倍递增</p>
                    <div class="inputMoney">
                        <input type="text" name="amount" v-model="amount" class="input f50"/>
                        <span class="subBtn" @click="subMoney"></span>
                        <span class="addBtn" @click="addMoney"></span>
                    </div>
                    <div class="balance fix mt20 f28">
                        <div class="itemR">
                            <a href="javascript:;" class="gf bg-blue f26 border-radius" @click="allPut">余额全投</a>
                        </div>
                        <span class="g9 f24">您的账户余额：</span>
                        <span class="red">{{userList.usableAmount | toThousands}}</span>元
                    </div>
                </div>
            </div>
            <div class="errormsg pt10 tc">{{errormsg}}</div>
            <div class="isAgree">
                <label>
                    <input type="checkbox" name="agree" checked="checked" datatype="verifyChecked" nullmsg="您尚未同意协议"
                           class="protocol jsInputCheck">我已阅读并同意
                    <a href="#" data-name="withhold" class="agreementLink red">《区块链金融理财产品购买协议》</a>
                </label>
            </div>
            <div class="joinPlan content">
                <div class="btn" @click="validateBeforeSubmit">确认购买</div>
            </div>
        </form>
        <!--密码弹框  -->
        <div class="buyDialog" v-show="show">
            <div class="bd flexBox">
                <div class="pswTitle tc">
                    <h2>输入银行数字安全密码</h2>
                    <span class="icon_close" @click="close"></span>
                </div>

                <p class="pt50 pb20 g6 f24 l1">本次投标</p>
                <p class="f40 l1 red"><i class="f24 top10">￥</i>{{amount}}</p>
                <input type="password" maxlength="6" class="pswInput" v-model="pwd" placeholder="请输入">
                <div class="btn myBtn" @click="verifyPwd">确认</div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    /*弹框样式开始*/
    .buyDialog {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .buyDialog .bd {
        background: #fff;
        position: absolute;
        bottom: 0;
        width: 560px;
        height: 480px;
        top: 50%;
        left: 50%;
        margin: -240px 0 0 -280px;
        border-radius: 12px;
    }

    .pswTitle {
        width: 100%;
        height: 100px;
        line-height: 100px;
        border-bottom: 1px solid #ddd;
    }

    .pswTitle h2 {
        font-size: 32px;
    }

    .myBtn {
        margin-top: 49px;
        font-size: 36px;
        width: 375px;
        height: 66px;
        border-radius: 66px;
    }

    .top10 {
        vertical-align: 6px
    }

    .pswInput {
        width: 360px;
        height: 60px;
        padding: 0;
        border-bottom: 1px solid #999;
        text-align: center;
        margin-top: 25px;
        line-height: 60px;
    }

    /*弹框样式结束*/
    .joinItem {
        padding: 35px 40px;
        font-size: 30px;
        color: #4b4d56;
        overflow: hidden;
        min-height: 97px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background-color: #fff;
    }

    .joinItem .itemR {
        float: right;
    }

    .amountInfo {
        padding-bottom: 20px;
    }

    .amountInfo .inputMoney {
        position: relative;
        margin-top: 40px;
        padding: 0 80px;
        height: 98px;
        border-radius: 50px;
        border: 1px solid #eee;
    }

    .amountInfo .inputMoney .subBtn, .amountInfo .inputMoney .addBtn {
        position: absolute;
        border: 1px solid #ddd;
        width: 84px;
        height: 84px;
        background: #F9F9F9;
        border-radius: 50%;
        cursor: pointer;
    }

    .amountInfo .inputMoney .subBtn {
        top: 5px;
        left: 5px;
    }

    .subBtn:before {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        display: block;
        content: ' ';
        width: 30px;
        height: 4px;
        background-color: #ff7070;
    }

    .amountInfo .inputMoney .addBtn {
        right: 5px;
        top: 5px;
    }

    .addBtn:before, .addBtn:after {
        display: block;
        content: ' ';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        background-color: #ff7070;
    }

    .addBtn:after {
        width: 4px;
        height: 30px;
    }

    .addBtn:before {
        width: 30px;
        height: 4px;
    }

    .amountInfo .inputMoney .input {
        padding: 0 10px;
        height: 100%;
        width: 100%;
        text-align: center;
        color: #4b4d56;
        border-bottom: 1px solid #ddd;
    }

    .isAgree {
        color: #777;
        padding: 0 0 0px 40px;
    }

    .protocol {
        width: 24px;
        height: 24px;
        margin-right: 14px;
        border: 1px solid #eee;
        background-color: #fff;
        vertical-align: middle;
        position: relative;
        top: -3px;
    }

    .protocol:checked {
        background: #fff url("./images/icon_checkbox.png") no-repeat center;
        background-size: 22px 19px;
    }

    /*关闭图标  */
    .icon_close {
        position: absolute;
        right: 10px;
        top: 0px;
        display: block;
        width: 40px;
        height: 40px;
        padding: 40px;
    }

    .icon_close:before, .icon_close:after {
        position: absolute;
        top: 28px;
        left: 50%;
        display: block;
        content: ' ';
        width: 3px;
        height: 40px;
        background-color: #aaa;
    }

    .icon_close:before {
        transform: rotate(45deg);
    }

    .icon_close:after {
        transform: rotate(-45deg);
    }
    .border-radius {
      display: block;
      width: 160px;
      height: 60px;
      border-radius: 100px;
      line-height: 60px;
      text-align: center;
      font-weight: 300;
    }
    .joinItem_1 {
      padding-bottom: 0;
    }
    .content {
      margin-top: 160px;
    }
</style>
<script src="./buyNow.js"></script>
