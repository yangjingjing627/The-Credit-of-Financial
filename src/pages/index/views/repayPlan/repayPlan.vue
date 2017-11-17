<template>
    <div class="f26">
        <div class="bg-gradient flexBox f26 gf rel">
            <div class="abs overdueIcon" v-show="isOverdue"></div>
            <div class="opcity5 pt50">本期应还</div>
            <div class="l1">¥<i class="f72 h86">2323{{amount}}</i></div>
            <div><i class="opcity5">还款日</i>2323 {{date|fmtDate("yyyy-MM-dd")}}</div>
            <!-- <div class="db gf contractBtn">查看合同</div> -->
            <router-link :to="'loanContract?apcId='+applicationId+'&isShow=0'" class="db contractBtn bg-white red">查看合同</router-link>
        </div>
        <!--  已逾期 -->
        <ul class="bb">
            <li class="flexA h88 f24 g9">
                <div class="tc w54">期数</div>
                <div class="tl w184">还款金额（元）</div>
                <div class="tl w146">还款日期</div>
                <div class="tr w210">还款状态</div>
            </li>
            <li class="a" :class="{b:activeIndex==index}" v-for="(item,index) in  repaymentList">
                <div class="flexA bg-white h88" @click="fItemClick(index)">
                    <div class="tc w54  f24 g3">{{index+1}}</div>
                    <div class="tl w184  f24 g3">{{item.amount}}</div>
                    <div class="tl w146  f24 g3">{{item.date|fmtDate("yyyy-MM-dd")}}</div>
                    <div class="tr w210  f24 g3" v-show="item.status==0">待还款<i class="arrowsDown" :class='{arrowsUp:activeIndex==index}'></i></div>
                </div>
                <ul>
                    <li class="flexA h88">
                        <div class="pl94">本金</div>
                        <div>{{item.capital}}</div>
                    </li>
                    <li class="flexA h88">
                        <div class="pl94">利息</div>
                        <div>{{item.interest}}</div>
                    </li>
                    <li class="flexA h88">
                        <div class="pl94">费用</div>
                        <div>{{item.cost}}</div>
                    </li>
                </ul>
            </li>
            <!-- <li class="a">
                <div class="flexA bg-white h88" @click="fItemClick(index)">
                    <div class="tc w54 f24 g3">1</div>
                    <div class="tl w184 f24 g3">222</div>
                    <div class="tl w146 f24 g3">2018-09-09</div>
                    <div class="tr w210 f24 g3">待还款<i class="arrowsDown"></i></div>
                </div>
                <ul>
                    <li class="flexA h88">
                        <div class="pl94">本金</div>
                        <div>3000</div>
                    </li>
                    <li class="flexA h88">
                        <div class="pl94">利息</div>
                        <div>0932</div>
                    </li>
                    <li class="flexA h88">
                        <div class="pl94">费用</div>
                        <div>200</div>
                    </li>
                </ul>
            </li> -->
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
    .pl94 {
      padding-left: 80px;
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
    .flexA {
      margin: 0;
      padding: 0 27px;
    }
    .contractBtn {
        width: 184px;
        height: 66px;
        border-radius: 100px;
        border: 1px solid #fff;
        text-align: center;
        line-height: 66px;
        margin-top: 28px;
        margin-bottom: 36px;
    }

    .h88 {
        height: 88px;
        // padding: 0 30px 0;
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
