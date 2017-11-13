<template>
    <div class="f26">
        <div class="bg-gradient flexBox f26 gf rel">
            <div class="abs overdueIcon" v-show="isOverdue"></div>
            <div class="opcity5 pt50">本期应还</div>
            <div class="l1">¥<i class="f72 h86">{{amount}}</i></div>
            <div><i class="opcity5">还款日</i> {{date|fmtDate("yyyy-MM-dd")}}</div>
            <!-- <div class="db gf contractBtn">查看合同</div> -->
            <router-link :to="'loanContract?apcId='+applicationId+'&isShow=0'" class="db gf contractBtn">查看合同</router-link>
        </div>
        <!--  已逾期 -->
        <ul class="bb">
            <li class="flexA h88">
                <div class="tc w54">期数</div>
                <div class="tc w184">还款金额（元）</div>
                <div class="tc w146">还款日期</div>
                <div class="tc w210">还款状态</div>
            </li>
            <!-- <li class="flexA pl30 bg-white h88 a" :class="{b:b}" v-for="item in  repaymentList">
                <div class="tc w54">{{index}}</div>
                <div class="tl w184">{{item.amount}}</div>
                <div class="tc w146">{{item.date|fmtDate("yyyy-mm-dd")}}</div>
                <div class="tr w210">已还款 (有逾期)<i class="arrowsDown"></i></div>
            </li> -->
            <li class="a" :class="{b:activeIndex==index}" v-for="(item,index) in  repaymentList">
                <div class="flexA pl30 bg-white h88" @click="fItemClick(index)">
                    <div class="tc w54">{{index+1}}</div>
                    <div class="tl w184">{{item.amount}}</div>
                    <div class="tc w146">{{item.date|fmtDate("yyyy-MM-dd")}}</div>
                    <div class="tr w210" v-show="item.status==0">待还款<i class="arrowsDown" :class='{arrowsUp:activeIndex==index}'></i></div>
                </div>
                <ul>
                    <li class="flexA pl30 h88">
                        <div class="pl100">本金</div>
                        <div>{{item.capital}}</div>
                    </li>
                    <li class="flexA pl30 h88">
                        <div class="pl100">利息</div>
                        <div>{{item.interest}}</div>
                    </li>
                    <li class="flexA pl30 h88">
                        <div class="pl100">费用</div>
                        <div>{{item.cost}}</div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style lang="sass" scoped>
    @import '../static/css/common.css';
    /*已逾期*/
    .overdueIcon {
        width: 257px;
        height: 146px;
        background: url("images/overdue.png") center no-repeat;
        background-size: 100%;
    }

    .f72 {
        font-size: 72px;
    }

    .opcity5 {
        opacity: 0.56;
    }

    .h86 {
        line-height: 86px;
    }

    .contractBtn {
        width: 184px;
        height: 58px;
        border-radius: 100px;
        border: 1px solid #fff;
        text-align: center;
        line-height: 58px;
        margin-top: 28px;
        margin-bottom: 36px;
    }

    .h88 {
        height: 88px;
        padding: 0 30px 0;
    }

    .arrowsDown {
        display: inline-block;
        width: 16px;
        height: 12px;
        background: #fff url("images/arrowsDown.png") center no-repeat;
        background-size: 100%;
        margin-left: 10px;
        transition: all 0.2s linear 0s;
    }

    .w54 {
        width: 54px;
    }

    .w184 {
        width: 184px;
    }

    .w146 {
        width: 146px;
    }

    .w210 {
        width: 210px;
    }

    .pl100 {
        padding-left: 100px
    }

    .bb {
        border-bottom: 1px solid #efeded
    }

    .arrowsUp {
        transform: rotate(180deg);
    }

    .a {
        max-height: 88px;
        overflow: hidden;
        transition: all 0.3s linear 0s;
    }

    .b {
        max-height: 400px;
    }
</style>
<script src="./repayPlan.js"></script>