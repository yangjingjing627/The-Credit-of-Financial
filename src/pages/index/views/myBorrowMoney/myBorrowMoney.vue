<template>
    <div class="wrapBox">
        <div class="wrap" v-if="loanResList!=''">
            <!--账单明细  -->
            <div class="billDeail">
                <router-link :to="{ path: 'repayPlan', query: { applicationId: item.loanId}}" class="link" v-for="item in loanResList">
                    <div class="flexA flexA_140">
                        <div>
                            <!-- <div class="f30">{{ item.loanName }}</div>  -->
                            <div class="f30">招小财</div>
                            <div class="f24 g9">{{ item.loanTime }}</div>
                        </div>
                        <!-- <div class="f30 red"  v-if="item.loanStatus === '10'">发售中</div>
                        <div class="f30 red"  v-else-if="item.loanStatus === '20'">已满额(待扣投资款)</div>
                        <div class="f30 gc"  v-else-if="item.loanStatus === '30'">已流标</div>
                        <div class="f30 red"  v-else-if="item.loanStatus === '40'">待还款</div>
                        <div class="f30 blue"  v-else-if="item.loanStatus === '50'">待扣还款</div>
                        <div class="f30 gc"  v-else-if="item.loanStatus === '60'">已结清</div>
                        <div class="f30 red"  v-else>已逾期</div> -->
                        <!-- 二期修改，先用这一个状态 -->
                        <div class="f30 blue">{{item.loanStatus}}</div>
                        <span class="f30 g6" v-if="item.loanAmount">¥{{ item.loanAmount }}<i class="arrows ml20"></i></span>
                        <span class="f30 g6" v-else>— —<i class="arrows ml20"></i></span>
                    </div>
                </router-link>
            </div>
        </div>

        <!--暂无数据  -->
        <div class="noData" v-if="loanResList==''">
            <span class="noDataIcon"></span>
            <p>暂无数据</p>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import '../static/css/common.css';
    @import '../static/css/detail.css';
    .link{display: block;}
    .blue {
        color: #30A4FF;
    }
</style>
<!-- <script src="./myBorrowMoney.js"></script> -->
