<template>
    <div class="moreDetail mt20">
        <div class="hd">
            <a @click="fActiveSection(0)" href="javascript:;"><span :class="{ active: section == 0 }">项目信息</span></a>
            <a @click="fActiveSection(1)" href="javascript:;"><span :class="{ active: section == 1 }">区块信息</span></a>
        </div>
        <div class="bd">
            <!--项目信息  -->
            <div class="proInfo" v-show="section == 0">
                <dl>
                    <dt>融资方介绍</dt>
                    <!-- <dd v-text="detailResult.borrowerDescription"></dd> -->
                    <dd>如果你无法简介的表达你的想法，那就只说明你不够了解它---阿尔伯特</dd>
                </dl>
                <!-- <dl>
                    <dt>征信信息</dt>
                    <dd v-text="detailResult.creditInformation"></dd>
                </dl>
                <dl>
                    <dt>担保信息</dt>
                    <dd v-text="detailResult.guaranteeInformation"></dd>
                </dl> -->
                <dl class="p0">
                    <dt>审核记录</dt>
                    <dd>
                      <ul class="bb bor">
                          <li class="flexA h88 f24 g9 bg-f9  pl20 pr20">
                              <div class="tl w304">认证项目</div>
                              <div class="tr w140">认证日期</div>
                              <div class="tc w120">认证结果</div>
                          </li>
                          <li class="a bor-b pl20 pr20">
                              <div class="flexA bg-white h88">
                                  <div class="tl w304 f24 g3">2sndssmsdnsddn22</div>
                                  <div class="tr w140 f24 g3">2018-09-09</div>
                                  <div class="tc w120 f24 g3 ok"></div>
                              </div>
                          </li>
                          <li class="a bor-b pl20 pr20">
                              <div class="flexA bg-white h88">
                                  <div class="tl w304 f24 g3">2sndssmsdnsddn22</div>
                                  <div class="tr w140 f24 g3">2018-09-09</div>
                                  <div class="tc w120 f24 g3 error"></div>
                              </div>
                          </li>
                      </ul>
                    </dd>
                </dl>
            </div>
            <!--区块信息  -->
            <div class="divOutline g6 f30" v-show="section == 1">
                <div class="flexA h50">
                    <h5 class="f24 g6">区块高度</h5>
                    <!-- <div class="w500">{{blockResult.blockNumber}}</div> -->
                    <div class="w500 f24 g9">97789</div>
                </div>
                <div class="flexA h50">
                    <h5 class="f24 g6">交易次数</h5>
                    <div class="w500 f24 g9">1222{{blockResult.envelopCount}}</div>
                </div>
                <div class="flexA h50">
                    <h5 class="f24 g6">区块哈希</h5>
                    <div class="w500 f24 g9">0000023923892392329839wjw{{blockResult.dataHash}}</div>
                </div>
                <div class="flexA h50">
                    <h5 class="f24 g6">上一块哈希</h5>
                    <!-- <div class="w500">{{blockResult.previousHash}}</div> -->
                    <div class="w500 f24 g9">0000023923892392329839wjw</div>

                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .moreDetail {
        background-color: #fff;
    }

    .moreDetail .hd {
        width: 100%;
        border-bottom: 1px solid #eee;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
    }

    .moreDetail .hd a {
        font-size: 30px;
        color: #4b4d56;
        display: block;
        flex: 1;
        text-align: center;
        height: 86px;
        line-height: 86px;
    }

    .moreDetail .hd span.active {
        padding: 0 5px 20px 5px;
        color: #f92b2f;
        border-bottom: 2px solid #f92b2f;
    }

    /*项目信息  */
    .moreDetail .bd dl {
        border-bottom: 1px solid #eee;
        padding: 0 40px 40px 40px;
    }

    .moreDetail .bd dl dt {
        padding: 14px 0 7px;
        font-size: 28px;
        color: #333;
    }

    .moreDetail .bd dl dd {
        color: #777;
        line-height: 40px;
        margin: 0;
        font-size: 24px;
        color: #999;
    }

    .moreDetail .bd dl .tab {
        background-color: #eee;
        border: 1;
        border-collapse: collapse;
    }

    .moreDetail .bd dl .tab th {
        color: #555;
        height: 70px;
        line-height: 70px;
        background-color: #f6f6f6;
    }

    .moreDetail .bd dl .tab td {
        text-align: center;
        height: 60px;
        line-height: 60px;
        border: 1px solid #eee;
        background-color: #fff;
    }

    .moreDetail .bd dl .tab td .icon_ok {
        width: 25px;
        height: 25px;
        border-radius: 25px;
        background: url(./images/icon_ok.png) no-repeat;
        background-size: 25px 25px;
        display: block;
        margin: 0 auto;
    }

    .divOutline {
        padding-left: 38px;
    }

    .w500 {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .p0 {
      padding: 0;
    }
    .bg-f9 {
      background-color: #F9F9F9;
    }
    .ok {
      height: 30px;
      background: url(./images/ok.png) no-repeat center;
      background-size: 30px 30px;
    }
    .error {
      height: 30px;
      background: url(./images/error.png) no-repeat center;
      background-size: 30px 30px;
    }
    .w140 {
      width: 140px;
    }
    .w120 {
      width: 120px;
    }
    .w304 {
      width: 304px;
    }
    .bor-b {
      border-bottom: 1px solid #eee;
    }
    .bor {
      border-bottom: 1px solid #eee;
    }
      .bb {
          border: 1px solid #efeded
      }
      .h50 {
        height: 70px;
        line-height: 70px;
      }
        .flexA {
          margin: 0;
        }
          .h88 {
              height: 88px;
          }
</style>
<script src="./moreDetail.js"></script>
