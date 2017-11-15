<template>
    <div class="mt20">
        <div class="wrap bg-white f30">
            <div class="flexA">
                <div>
                    <span class="title">金额</span>
                    <input type="text" placeholder="请设置收款金额" v-model="amount"/>
                </div>
            </div>
            <div class="flexA">
                <div>
                    <span class="title">理由</span>
                    <input type="text" placeholder="选填" v-model="reason"/>
                </div>
            </div>
        </div>

        <!-- 错误信息 -->
        <div class="errormsg tc pt20">{{errormsg}}</div>

        <div class="content mt120">
            <div class="btn" :class="amount?'':'disabled'" @click="confirmSetAmount">确定</div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .title {
        width: 100px;
        display: inline-block;
    }
</style>
<script src="./setAmount.js"></script>
