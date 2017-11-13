<template>
    <div class="walletFinance">
        <div class="hd bg-gradient">
            <ul class="fix">
                <li>
                    <h4 class="mtitle">已入账收益</h4>
                    <h3 class="f36 mt10">{{userResult.recoveredInterest | toThousands}}<span class="f24"> ( QBM )</span>
                    </h3>
                </li>
                <li>
                    <h4 class="mtitle">待回收总额</h4>
                    <h3 class="f36 mt10">{{userResult.unRecoveredAmount | toThousands}}<span class="f24"> ( QBM )</span>
                    </h3>
                </li>
            </ul>
        </div>
        <!--borrowResult  -->
        <div class="prolist" v-for="item in investorResult">
            <div class="pro-item mt20 pb20">
                <div class="pro-title">
                    <ul class="fix" :investorId="item.investorId">
                        <li>
                            <span class="icon icon_height"></span>
                            <span>区块交易：</span><span class="txt">{{item.chainTxId}}</span>
                        </li>
                        <li>
                            <span class="icon icon_source"></span>
                            <span>来源：</span><span class="txt">{{item.omsName}}</span>
                            <span class="pro-mark red-mark r" v-show="item.borrowStatus==10">发售中</span>
                            <span class="pro-mark red-mark r" v-show="item.borrowStatus==20">已满额</span>
                            <span class="pro-mark gray-mark r" v-show="item.borrowStatus==60">已结清</span>
                            <span class="pro-mark orange-mark r" v-show="item.borrowStatus==40">还款中</span>
                        </li>
                        <li>
                            <span class="icon icon_date"></span>
                            <span>入块时间：</span><span>{{item.createTime | dateFormat}}</span>
                        </li>
                        <li>
                            <span class="icon icon_title"></span>
                            <span>标题：</span><span class="txt">{{item.title}}</span>
                        </li>
                    </ul>
                </div>
                <div class="wrap">
                    <div class="flexA">
                        <div class="f24">投标金额：</div>
                        <div class="f24 red">￥{{item.amount | toThousands}}</div>
                    </div>
                    <div class="flexA">
                        <div class="f24">预期年化：</div>
                        <div class="f24">{{item.rate}}%</div>
                    </div>
                    <div class="flexA">
                        <div class="f24">项目期限：</div>
                        <div class="f24">{{item.period}}天</div>
                    </div>
                    <div class="flexA">
                        <div class="f24">计息时间：</div>
                        <div class="f24">{{item.startTime | dateFormat}} - {{item.refundTime | dateFormat}}</div>
                    </div>
                    <div class="flexA">
                        <div class="f24">预期收益：</div>
                        <div class="f24">{{item.interestAmount | toThousands}}QBM</div>
                    </div>
                </div>
            </div>
        </div>

        <!--暂无数据  -->
        <div class="noData" v-show="investorResult == 0">
            <span class="noDataIcon"></span>
            <p>暂无数据</p>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import '../static/css/common.css';

    .walletFinance .hd {
        padding: 50px 0;
        text-align: center;
    }

    .walletFinance .hd ul {
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;
    }

    .walletFinance .hd ul li {
        flex: 1;
        color: #fff;
        border-right: 1px solid #fda2a4;
        padding: 24px 0;
    }

    .walletFinance .hd .mtitle {
        opacity: 0.56;
    }

    .prolist .pro-item {
        background-color: #fff;
    }

    .prolist .pro-item .wrap, .prolist .pro-item .flexA {
        border: 0;
    }

    .prolist .pro-item .flexA {
        height: 46px;
        color: #5f616b;
    }
</style>
<script src="./walletFinance.js"></script>