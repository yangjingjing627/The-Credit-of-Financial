<template>
    <div>
        <div class="detailMain rel">
          <div class="detail_header">
            <div class="header abs">
              <router-link to="project" class="abs arrowsL"></router-link>
              {{list.title}}
            </div>
            <section class="bidDetail">
              <p class="aprTxt f30 l1 pb20">预期年化</p>
              <p class="aprPre l1"><span class="num l1">{{list.rate}}</span>%</p>
              <ul class="bidLimit mt40 mb40">
                <li>
                  <p class="title l1">起投金额(元)</p>
                  <p class="number f40 l1"><span v-text="list.startInvestAmount"></span></p></li>
                  <li>
                    <p class="title l1">项目期限(天)</p>
                    <p class="number f40 l1" v-text="list.period"></p>
                  </li>
                </ul>
              </section>
          </div>
            <!-- 进度条 -->
            <div class="bidProgress">
              <div class="progressBar">
                <p class="bar" :style="'width:' + amountProgressbar + '%;'"></p>
              </div>
              <div class="progressTxt l1 tc">
                <span>进度<span v-text="amountProgress"></span>% 项目总额</span> {{list.amount |
                  toThousands}}(QBM)
                </div>
              </div>
            <div class="bidRemaining bg-white f28 g9"><span class="remainMoney r g3 f28">￥{{qbm | toThousands}}</span>剩余可投金额：</div>
            <div class="bidProcess mt10">
                <ul class="processInner">
                    <li>
                        <span class="process_icon begin_icon"></span>
                        <p class="f28 g6">开始投资</p>
                    </li>
                    <li>
                        <span class="process_icon benefit_icon"></span>
                        <p  class="f28 g6">满标次日计息</p>
                    </li>
                    <li>
                        <span class="process_icon exit_icon"></span>
                        <p  class="f28 g6">到期退出</p>
                    </li>
                </ul>
            </div>

            <!--投资计算器  -->
            <div class="proInfos mt10">
                <div class="itemLink fix bbe pb30">
                    <div class="l">
                        <p class="g6 f28">投资10000元，到期预计可获得：</p>
                        <div class="g3 f60 mt10">{{countDef}}(QBM)</div>
                    </div>
                    <div class="r">
                        <span class="icon_calculator" @click="calculatorBtn"></span>
                    </div>
                </div>
                <div class="itemLink fix pt25 pb25">
                    <div class="l">
                        <span class="g9 f28">计息方式：</span>
                    </div>
                    <div class="r">
                        <span class="g9 f28">到期一次性还本付息</span>
                    </div>
                </div>
            </div>

            <!--更多详情  -->
            <div class="moreDetail pl20 pr20">
                <router-link :to="{ path: 'moreDetail', query: { id: list.id , active: 0}}" class="g9"><i
                        class="icon_more rel"></i>点击，可查看更多详情
                </router-link>
            </div>

            <!--购买  -->
            <div class="bg-white p20 bte">
              <p class="proTime pb20 tc f28 g6" v-show="list.status==10">剩余筹标时间：
                <c-countdown :startTime="+new Date()" :endTime="deadTime" :second="true"></c-countdown>
              </p>
                <router-link :to="'buyNow?id=' + list.id" class="btn mb20" v-show="list.status==10">
                    <span class="f36">立即购买</span>
                </router-link>
                <div class="btn disabled" v-show="list.status==20">已满额</div>
                <div class="btn disabled" v-show="list.status==60">已结清</div>
                <div class="btn disabled" v-show="list.status==40">还款中</div>
            </div>
        </div>

        <!--计算器键盘  -->
        <div class="calculatorPop" v-show="calculator==true">
            <div class="calculator J_calculator pt20">
                <span class="closePop" @click="calculatorClose"></span>
                <h3 class="f32 g3 dialog-title">计算收益</h3>
                <div class="operateArea">
                    <div class="simulateInput">
                        <input class="input" name="amount" v-model="amount" type="text" readonly="true"/>
                        <span class="subBtn" @click="subMoney"></span>
                        <span class="addBtn" @click="addMoney"></span>
                    </div>
                    <div class="result f28">预期收益：<span class="red">{{count}}(QBM)</span></div>
                    <div class="counterBtn">
                        <a href="javascript:;" class="btn">计算</a>
                    </div>
                </div>
                <ul class="keyboard fix">
                    <li class="keyItem" @click="numStack(1)">
                        <p class="f56 g3">1</p>
                    </li>
                    <li class="keyItem colCenter" @click="numStack(2)">
                        <p class="f56 g3">2</p>
                        <p class="enLetter">ABC</p>
                    </li>
                    <li class="keyItem" @click="numStack(3)">
                        <p class="f56 g3">3</p>
                        <p class="enLetter">DEF</p>
                    </li>
                    <li class="keyItem" @click="numStack(4)">
                        <p class="f56 g3">4</p>
                        <p class="enLetter">GHI</p>
                    </li>
                    <li class="keyItem colCenter" @click="numStack(5)">
                        <p class="f56 g3">5</p>
                        <p class="enLetter">JKL</p>
                    </li>
                    <li class="keyItem" @click="numStack(6)">
                        <p class="f56 g3">6</p>
                        <p class="enLetter">MNO</p>
                    </li>
                    <li class="keyItem" @click="numStack(7)">
                        <p class="f56 g3">7</p>
                        <p class="enLetter">PQRS</p>
                    </li>
                    <li class="keyItem colCenter" @click="numStack(8)">
                        <p class="f56 g3">8</p>
                        <p class="enLetter">TUV</p>
                    </li>
                    <li class="keyItem" @click="numStack(9)">
                        <p class="f56 g3">9</p>
                        <p class="enLetter">WXYZ</p>
                    </li>
                    <li class="keyItem grayBg" @click="numStack('.')">
                        <p class="keyDot">.</p>
                    </li>
                    <li class="keyItem colCenter" @click="numStack(0)">
                        <p class="keyZero f56 g3">0</p>
                    </li>
                    <li class="keyItem grayBg" @click="deleteNum">
                        <span class="keydel"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
  .detail_header {
    background: url(./images/borrowBanner.png) no-repeat center;
    background-size: 100% 100%;
  }
    .header {
        top: 0;
        width: 100%;
        height: 90px;
        line-height: 90px;
        text-align: center;
        font-size: 36px;
        color: #fff
    }
    .f56 {
      font-size: 56px;
    }
    .arrowsL {
        left: 30px;
        width: 30px;
        height: 90px;
        background: url("./../static/images/back.png") 0 center no-repeat;
        background-size: 22px 40px;
    }

    .bidDetail {
        padding: 130px 0 30px;
        text-align: center;
        color: #fff;
        // background-image: linear-gradient(to bottom, #fa5357, #fb3d42);
        // background-image: -webkit-linear-gradient(to bottom, #fa5357, #fb3d42);
        // background-image: -ms-linear-gradient(to bottom, #fa5357, #fb3d42);
    }

    .bidDetail .aprPre {
        font-size: 46px;
    }

    .bidDetail .aprPre .num {
        font-size: 98px;
    }

    .bidDetail .bidLimit {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
    }

    .bidDetail .bidLimit li {
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }

    .bidDetail .bidLimit li:last-child {
        border-left: 1px solid rgba(255, 255, 255, 0.2);
    }

    .bidDetail .bidLimit .title {
        color: rgba(255, 255, 255, 0.6);
    }

    .bidDetail .bidLimit .number {
        margin-top: 10px;
    }

    .bidProgress {
        // margin: 34px 48px 0 48px;
        margin: 20px 20px 0;
        padding: 36px 33px 15px;
        background-color: #fff;
    }

    .bidProgress .progressBar {
        position: relative;
        width: 100%;
        height: 8px;
        background-color: #EEEEEE;
        border-radius: 8px;
        -webkit-border-radius: 8px;
    }

    .bidProgress .progressBar .bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: #FF5C5C;
        border-radius: 8px;
        -webkit-border-radius: 8px;
        transition: width 0.5s linear 0.1s;
        -webkit-transition: width 0.5s linear 0.1s;
    }

    .bidProgress .progressTxt {
        margin-top: 32px;
        color: #333;
    }

    .bidRemaining {
        padding: 0 40px;
        height: 110px;
        color: #999;
        line-height: 110px;
        margin: 20px 20px 0;
    }

    .bidRemaining .remainMoney {
        color: #666;
    }

    .bidProcess {
        padding: 70px 0 38px 0;
        background-color: #fff;
        margin: 20px 20px 0;
    }

    .processInner {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        margin: 0 90px;
        border-top: 1px dotted #b8b8b8;
        text-align: center;
        color: #666;
    }

    .processInner li {
        margin-top: -28px;
    }

    .processInner li:first-child {
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
    }

    .processInner li:last-child {
        transform: translateX(50%);
        -webkit-transform: translateX(50%);
    }

    /*开始投资-进入收益期-到期退出 图标  */
    .process_icon {
        display: inline-block;
        width: 63px;
        height: 63px;
        background-color: #F9F9F9;
        background-repeat: no-repeat;
        background-size: 27px 32px;
        background-position: center center;
        border-radius: 50%;
    }

    .process_icon.begin_icon {
      background-image: url("./images/ico_probid1.png");
    }

    .process_icon.benefit_icon {
      background-image: url("./images/ico_probid2.png");
    }

    .process_icon.exit_icon {
      background-image: url("./images/ico_probid3.png");
    }

    /*投资 计算器  */
    .proInfos {
        background: #fff;
        padding: 40px 32px 0 40px;
        margin: 20px;
    }

    .proInfos .icon_calculator {
        width: 80px;
        height: 117px;
        background: url(./images/icon_calculator.png) no-repeat;
        background-position: center 40px;
        background-size: 80px 77px;
        display: block;
    }

    /*更多详情  */
    .moreDetail {
      background-color: #FFEABA;
    }
    .moreDetail a {
      background: url(./images/arrow_r.png) no-repeat right center;
      background-size: 20px 32px;
        display: block;
        height: 86px;
        line-height: 46px;
        padding: 20px 0 32px;
        color: #A64F18;
        font-size: 28px;
    }

    .moreDetail .icon_more {
        width: 24px;
        height: 24px;
        background: url(./images/icon_more.png) no-repeat;
        background-size: 24px 24px;
        display: inline-block;
        margin-right: 12px;
        top: 4px;
    }

    .detailMain .btn {
        height: 97px;
    }

    .detailMain .btn .proTime {
        opacity: .6;
    }

    /*计算器键盘  */
    .calculatorPop {
        /* display: none;   */
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .calculator {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 810px;
        text-align: center;
        background-color: #fff;
        /* transition:all 0.4s;
        -webkit-transition:all 0.4s;
        transform:translateY(100%);
        -webkit-transform:translateY(100%);  */
    }

    .slideupCal {
        transform: translateY(0%);
        -webkit-transform: translateY(0%);
    }

    .calculator .closePop {
        position: absolute;
        left: 0px;
        top: 20px;
        display: block;
        width: 28px;
        height: 28px;
        padding: 40px;
    }

    .calculator .closePop:before, .calculator .closePop:after {
        position: absolute;
        top: 28px;
        left: 50%;
        display: block;
        content: ' ';
        width: 2px;
        height: 36px;
        background-color: #aaa;
    }

    .calculator .closePop:before {
        transform: rotate(45deg);
    }

    .calculator .closePop:after {
        transform: rotate(-45deg);
    }

    .calculator h3 {
        font-size: 32px;
        line-height: 90px;
    }

    .calculator .operateArea {
        margin: 20px 40px;
    }

    .calculator .simulateInput {
        position: relative;
        padding: 0 80px;
        height: 85px;
        border: 1px solid #ddd;
        height: 98px;
        border-radius: 50px;
    }

    .calculator .simulateInput .input {
        text-align: center;
    }

    .calculator .simulateInput .subBtn, .calculator .simulateInput .addBtn {
        position: absolute;
        width: 84px;
        height: 84px;
        background: #F9F9F9;
        border-radius: 50%;
        cursor: pointer;
    }

    .calculator .simulateInput .subBtn {
        top: 5px;
        left: 5px;
    }

    .calculator .simulateInput .subBtn:before {
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

    .calculator .simulateInput .addBtn {
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

    .calculator .simulateInput .input {
        height: 100%;
        line-height: 85px;
        overflow: hidden;
        font-size: 40px;
        color: #4b4d56;
        white-space: nowrap;
    }

    .calculator .result {
        text-align: left;
        color: #999;
        padding: 18px 0 25px 0;
    }

    .keyboard {
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        border-top: 1px solid #e8e8e8;
    }

    .keyboard .keyItem {
        float: left;
        padding-top: 16px;
        height: 96px;
        width: 33%;
        border-bottom: 1px solid #eee;
        color: #000;
        line-height: 36px;
        font-size: 40px;
    }

    .keyboard .colCenter {
        width: 34%;
        border-width: 0 1px 1px;
        border-style: solid;
        border-color: #eee;
    }

    [data-dpr="1"] .keyboard .colCenter {
        border-width: 0 1px 1px !important;
    }

    .keyboard .keyItem .enLetter {
        color: #666;
        font-size: 20px;
    }

    .keyboard .grayBg {
        background-color: #F9F9F9;
    }

    .keyboard .keyItem:active {
        background-color: #d2d5da;
    }

    .keyboard .grayBg:active {
        background-color: #fff;
    }

    .keyboard .keydel {
        display: inline-block;
        margin-top: 10px;
        width: 77px;
        height: 50px;
        background: url(./images/icon_keydel.png) no-repeat;
        background-size: 100% 100%;
    }

    .keyboard .keyZero {
        padding-top: 16px;
    }

    .keyboard .keyDot {
        width: 8px;
        height: 8px;
        background-color: #000;
        border-radius: 8px;
        margin: 30px auto;
        text-indent: -1000px;
    }
    .btn {
      box-shadow: 0px 22px 23px 0px rgba(250, 85, 89, 0.18);
    }
    .dialog-title {
      border-bottom: 1px solid #eee;
    }
</style>
<script src="./projectDetail.js"></script>
