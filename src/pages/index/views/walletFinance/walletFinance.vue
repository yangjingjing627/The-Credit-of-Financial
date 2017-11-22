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
        <!-- <div class="prolist" v-for="item in investorResult">
            <div class="pro-item mt20 pb20">
                <div class="pro-title">
                    <ul class="fix" :investorId="item.investorId">
                        <li>
                          <span class="txt f28 g2">{{item.chainTxId}}</span>
                          <span class="txt f24 g2">{{item.omsName}}</span>
                          <span class="pro-mark red-mark r" v-show="item.borrowStatus==10">发售中</span>
                          <span class="pro-mark red-mark r" v-show="item.borrowStatus==20">已满额</span>
                          <span class="pro-mark gray-mark r" v-show="item.borrowStatus==60">已结清</span>
                          <span class="pro-mark orange-mark r" v-show="item.borrowStatus==40">还款中</span>
                        </li>
                        <li>
                          <span class="f24 g9">入块高度：</span><span class="f24 g9">{{item.title}}&nbsp;/</span>
                          <span class="f24 g9">入块时间：</span><span class="f24 g9">{{item.createTime | dateFormat}}</span>
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
        </div> -->

        <div class="prolist">
            <div class="pro-item mt20 pb20">
                <div class="pro-title">
                    <ul class="fix" >
                        <li>
                            <span class="txt f28 g2">个人精选借贷</span>
                            <span class="txt f24 g2">好贷宝</span>
                            <span class="pro-mark red-mark r">发售中</span>
                        </li>

                        <li>
                            <span class="f24 g9">入块高度：</span><span class="f24 g9">9527&nbsp;/</span>
                            <span class="f24 g9">入块时间：</span><span class="f24 g9">2017-09-09</span>
                        </li>
                    </ul>
                </div>
                <div class="wrap">
                    <div class="flexA">
                        <div class="f24">投标金额：</div>
                        <div class="f24 red">￥8283</div>
                    </div>
                    <div class="flexA">
                        <div class="f24">预期年化：</div>
                        <div class="f24">9.56%</div>
                    </div>
                    <div class="flexA">
                        <div class="f24">项目期限：</div>
                        <div class="f24">60天</div>
                    </div>
                    <div class="flexA">
                        <div class="f24">计息时间：</div>
                        <div class="f24">2017-09-09 - 2017-10-08</div>
                    </div>
                    <div class="flexA">
                        <div class="f24">预期收益：</div>
                        <div class="f24">79.68QBM</div>
                    </div>
                </div>
            </div>
        </div>


        <!--暂无数据  -->
        <!-- <div class="noData" v-show="investorResult == 0">
            <span class="noDataIcon"></span>
            <p>暂无数据</p>
        </div> -->
    </div>
</template>
<style lang="sass" scoped>
    @import '../static/css/common.css';
    .prolist {
      margin-bottom: 20px;
    }
.prolist .pro-title li{
  width: 100%;
  span {
    display: initial;
  }
}
  .prolist .pro-item .flexA {
    color: #666;
  }
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
    .red-mark {
      background-color: #FBAB4A;
    }
    .g2 {
      color: #222;
    }
</style>
<script src="./walletFinance.js"></script>
