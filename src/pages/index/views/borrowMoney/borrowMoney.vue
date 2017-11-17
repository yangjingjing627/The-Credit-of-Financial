<template>
    <div class="f26">
        <div class="banner">
          <p class="gf f34 tc fw300"><span @click="fLeftClick" class="arrow_l"></span>我要借款</p>
          <div class="max-loads gf f72 tc pt85 fw300">最高可贷50万</div>
          <div class="loads-con gf f36 tc fw300">资金短缺不用愁 我们替你解忧愁</div>
        </div>
        <!--banner1 -->
        <!-- 审核中 -->
        <div class="inner inner_f flexBox" v-show="borrowState==1100">
          <!-- <div class="inner inner_f flexBox"> -->
            <div class="iconW"></div>
            <p class="f32 g6 l1 pt80 pb40">信用额度计算中……</p>
            <p class="f28 g9 l1">预计1-2个工作日审核完毕</p>
        </div>
        <!-- 驳回 -->
         <div class="inner inner_f flexBox" v-show="borrowState==52000">
            <div class="iconW reject"></div>
            <p class="f32 g6 l1 pt80 pb40 fw300">您提交的资料有误,请及时修改!</p>
            <router-link to="identityAuthen" class="btn mt40 modefiyBtn">修改资料</router-link>
         </div>
        <!-- 拒贷 -->
        <div class="inner inner_f flexBox" v-show="borrowState==53500">
            <div class="iconW refuse"></div>
            <p class="f32 g6 l1 pt80 fw300">您的申请未通过!</p>
            <p class="f28 g9 l1 pt60">业绩更上一层楼，才能提升您的信用评分</p>
            <p class="f28 g3 pt20">请30天后再来申请吧！</p>
        </div>
        <!-- 通过 -->
        <div class="inner inner_1 flexBox f26 pass rel" v-show="status3">
            <h3 class="passT">可借金额（元）</h3>
            <div class="lineA rel"></div>
            <div class="f70 g6 l1 mt80"><i class="f40">¥</i> {{money}}</div>
            <div class="g9 l1">期限{{time}}个月</div>
            <div class="lineB"></div>
            <div class="f24 l1 g3">有效期至：{{dataDue|dateFilter}}</div>
            <div class="f24 g9 l1 pt10">请在有效期内确认借款</div>
            <router-link :to="'loanContract?apcId='+applicationId+'&isShow=1'" class="btn w580 mt74 mb30">确认借款</router-link>
            <div class="pb30 pt30">
                <span class="g6 f28 fw300">点击确认借款表示您同意签订<router-link :to="'loanContract?apcId='+applicationId+'&isShow=1'" class="blue">《合同及相关协议》</router-link></span>
            </div>
            <svg width="100%" height="28" style="transform:rotate(180deg)" class="lineC abs">
                <line x1="0" x2="1380" y1="0" y2="0"
                      style="stroke:#f9f9f9;stroke-width:20;stroke-dasharray:1 30;stroke-linecap:round;"/>
            </svg>
        </div>
        <!-- 借款成功,正在汇款，目前无此状态-->
        <!-- <div class="inner inner_1 flexBox f26 pass rel" v-show="borrowState==53000"> -->
        <div class="inner inner_1 flexBox f26 pass rel" >
            <h3 class="passT">已借金额（元）</h3>
            <div class="lineA rel"></div>
            <div class="f70 g6 l1 mt80"><i class="f40">¥</i>{{money}}</div>
            <div class="remittance mb40 mt30"></div>
            <div class="f24 g9">款项正在汇往您的数字钱包账户，请耐心等待</div>
            <div class="lineB"></div>
            <div class="f24 g9 pb150">数字钱包地址：<span class="red">{{userInfo.walletAddress}}</span></div>
            <svg width="100%" height="28" style="transform:rotate(180deg)" class="lineC abs">
                <line x1="0" x2="1380" y1="0" y2="0"
                      style="stroke:#f9f9f9;stroke-width:20;stroke-dasharray:1 30;stroke-linecap:round;"/>
            </svg>
        </div>
        <!-- 借款成功,最近一期还款计划 -->
        <div class="inner inner_1 flexBox f26 pass rel" v-show="borrowState==35000||borrowState==40000">
            <h3 class="passT">已借金额（元）</h3>
            <div class="lineA rel"></div>
            <div class="f70 g6 l1 mt80"><i class="f40">¥</i> {{money}}</div>
            <div class="g9 l1 pt22">{{lastTime|fmtDate}} 应还金额 <span class="red">{{lastMoney}}</span> 元</div>
            <div class="btn w580 mt74 mb30" @click="toRepayPlan">还款计划</div>
            <div class="lineD mt50"></div>
            <div class="orange f24">按时还款保持良好信用</div>
            <div class="g9 f24 mt20 pb86">数字钱包地址：<span class="red">{{userInfo.walletAddress}}</span></div>
            <svg width="100%" height="28" style="transform:rotate(180deg)" class="lineC abs">
                <line x1="0" x2="1380" y1="0" y2="0"
                      style="stroke:#f9f9f9;stroke-width:20;stroke-dasharray:1 30;stroke-linecap:round;"/>
            </svg>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import '../static/css/common.css';
    .f26 {
      height: 100%;
      // background-color: white;
      // position: relative;
    }
    .banner {
        position: absolute;
        left: 0;
        top: 0px;
        width: 100%;
        height: 498px;
        background: url("images/borrowBanner.png") center no-repeat;
        background-size: 100% contain;
        p {
          height: 88px;
          line-height: 88px;
          position: relative;
          span {
            display: block;
            height: 28px;
            width: 28px;
            position: absolute;
            left: 20px;
            top: 24px;
            padding: 24px 20px;
          }
        }
    }

    .inner {
        padding-top: 505px;
        height: 780px;
        background: #FFFFFF;
    }
    .inner_f {
      height: 100%;
    }
    .inner_1 {
      margin: 0 30px;
      padding-top: 0;
    }
    .pt33 {
        padding-top: 33px;
    }

    .pt85 {
      padding-top: 85px;
      bpx-sizing: border-box;
    }
    /*审核中*/
    .iconW {
        width: 400px;
        height: 275px;
        margin: 0 auto;
        background: url("images/verifying.png") center no-repeat;
        background-size: 100%;
    }

    /*驳回*/
    .reject {
        background-image: url("images/reject.png")
    }

    .modefiyBtn {
        width: 450px;
    }

    /*拒绝*/
    .refuse {
        background-image: url("images/refuse.png")
    }

    /*通过*/
    .w580 {
        width: 580px;
    }

    .pass {
        margin-top: 455px;
        box-shadow: none;
        height: auto;
        background-color: white;
    }

    .passT {
        line-height: 100px;
    }

    .lineA {
        width: 100%;
        height: 0;
        border-top: 2px dashed #E2E2E2;
    }

    .lineA:before {
        position: absolute;
        left: -10px;
        top: -11px;
        width: 20px;
        height: 20px;
        content: '';
        border-radius: 50%;
        background: #f9f9f9
    }
      .btn {
        margin: 0 55px;
        box-shadow: 0px 22px 23px 0px rgba(250, 85, 89, 0.18);
      }

    .lineA:after {
        position: absolute;
        right: -10px;
        top: -11px;
        width: 20px;
        height: 20px;
        content: '';
        border-radius: 50%;
        background: #f9f9f9;
    }

    .mt80 {
        margin-top: 80px;
    }

    .mt74 {
        margin-top: 74px;
    }

    .pt22 {
        padding-top: 22px;
        padding-bottom: 46px;
    }

    .lineB {
        width: 448px;
        height: 30px;
        border-top: 1px dashed #E2E2E2;
        margin-top: 30px;
    }

    .lineC {
        bottom: 0;
        left: 0;
    }

    .checkBox {
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 2px;
        border: 1px solid #0094FF;
        vertical-align: -4px;
    }

    .pb150 {
        padding-bottom: 150px;
    }

    /*借款成功*/
    .remittance {
        width: 64px;
        height: 52px;
        background: url("images/remittance.png") center no-repeat;
        background-size: 100%;
    }

    /*最近一期还款计划*/
    .lineD {
        width: 600px;
        height: 0;
        border-top: 1px dashed #A64F18;
    }

    .orange {
        padding: 0 10px;
        margin-top: -20px;
        background: #fff;
        color: #A64F18;
    }

    .pb86 {
        padding-bottom: 86px;
    }

</style>
<script src="./borrowMoney.js"></script>
