<template>
    <div>
        <div class="wrap">
            <div class="flexA flexA_140">
                <div class="fix">
					<span class="icon_bank l">
						<img :src="imgSrc" width="100%"/>
					</span>
                    <div class="l">
                        <h5 class="f30">{{banks.bankName}}（尾号{{bankCard}}）</h5>
                        <p class="f24 g9">可赎回金额 <span class="red">{{balance}}</span> 元</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <div class="flexA">
                <div>
                    <span class="f30 pr30">赎回金额</span>
                    <input type="text" placeholder="请输入赎回金额" name="amount" v-model="amount" @keyup="checkAmount(amount)"
                           class="f28"/>
                </div>
                <div class="allRedeem blue f28 pr10" @click="allRedeem">全部赎回</div>
            </div>
        </div>
        <div class="content fix">
            <span class="r g9 pt20 pr20">手续费：<i class="red">0.00</i>元</span>
        </div>

        <!-- 错误提示 -->
        <div class="errormsg tc">{{errormsg}}</div>

        <div class="content mt100">
            <div class="btn" :class="{disabled : isDisabled}" @click="confirmRedeem">确认赎回</div>
        </div>

        <!--密码弹框  -->
        <div class="dealPwdDialog" v-if="show">
            <div class="bd flexBox">
                <div class="pswTitle tc">
                    <h2>输入银行数字安全密码</h2>
                    <span class="closePop" @click="close"></span>
                </div>
                <p class="pt50 pb20 g3">本次赎回</p>
                <p class="f50 l1 red">{{amount}}元</p>
                <input type="password" maxlength="6" class="pswInput" v-model="password" placeholder="请输入密码">
                <div class="forget"><router-link :to="{path:'forgotTradePsw',query:{plan:'redeem'}}" class="blue">忘记交易密码？</router-link></div>
                <div class="btn myBtn" @click="verifyPwd">确认</div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import '../static/css/dealPwdDialog.css'; /*密码弹框 */
    .icon_bank img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        display: inline-block;
        margin-right: 36px;
        border: 12px solid #f9f9f9;
    }
</style>
<script src="./redeem.js"></script>