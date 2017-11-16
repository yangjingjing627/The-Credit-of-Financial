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
                        <p class="f24 g9">单笔限额{{banks.amountLimit}}元 | 每日限购{{countLimit}}元</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <div class="flexA">
                <h5 class="f32 g3">申购金额</h5>
                <div class="w520">
                    <input type="text" placeholder="建议申购100元以上金额" name="amount" class="f28 w440" v-model="amount"
                           @keyup="checkAmount(amount)"/>
                </div>
            </div>
        </div>

        <div class="errormsg tc pt20">{{errormsg}}</div>

        <div class="content mt180">
            <div class="btn fw300" :class="{disabled : isDisabled}" @click="confirmPurchase">确认申购</div>
        </div>

        <!--密码弹框  -->
        <div class="dealPwdDialog" v-if="show">
            <div class="bd flexBox">
                <div class="pswTitle tc">
                    <h2>输入银行数字安全密码</h2>
                    <span class="closePop" @click="close"></span>
                </div>
                <p class="pt50 pb20 g3">本次申购</p>
                <p class="f50 l1 red">{{amount}}元</p>
                <input type="password" maxlength="6" class="pswInput" v-model="password" placeholder="请输入密码">
                <div class="forget"><router-link :to="{path:'forgotTradePsw',query:{plan:'purchase'}}" class="blue">忘记交易密码？</router-link></div>
                <div class="btn myBtn" @click="verifyPwd">确定</div>
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
<script src="./purchase.js"></script>
