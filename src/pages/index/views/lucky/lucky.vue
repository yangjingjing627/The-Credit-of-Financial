<template>
    <div class="lucky f28">
        <div class="lucky-banner"></div>
        <div v-if="goLucky" @click="viewUserInfo">
            <div class="lucky-s lucky-money">
              <h2>招小财</h2>
                <p>新签约IPOS商户</p>
                <p>经营≥半年以上</p>
            </div>
            <div class="lucky-b lucky-money">
              <h2>招大财</h2>
                <p>持续经营1年以上</p>
                <p>近2个月内ipos交易笔数≥200笔</p>
                <p>交易流水≥5万元</p>
            </div>
        </div>
        <div v-else class="go-to-lucky">
          <!-- <div  class="go-to-lucky"> -->

            <ul class="norm-ul norm-ul-1">
                <li><span></span>借款用途</li>
                <li>
                    <select class="purpose g6" v-model="purpose">
                        <option value="0">请选择......</option>
                        <option value="1">资金周转</option>
                        <option value="2">购生活品</option>
                        <option value="3">教育支出</option>
                        <option value="4">旅游</option>
                        <option value="5">购原材料</option>
                        <option value="6">装修家居</option>
                        <option value="7">购电子产品</option>
                        <option value="8">进货采购</option>
                        <option value="9">装修门店</option>
                        <option value="10">开分店</option>
                        <option value="11">还其他负债</option>
                        <option value="12">发工资</option>
                        <option value="13">投资其他行业</option>
                        <option value="14">加盟贷开店</option>
                        <option value="15">其他</option>
                    </select>
                </li>
                <li class="cl"></li>

            </ul>
            <div class="borrow-detail">
                <ul class="norm-ul-2 norm-bg1">
                    <li><span></span>申请金额</li>
                    <li class="tr">
                        <i>¥</i>
                        <div class="data tl" v-show="editFlag">{{amount|toThousands(0)}}</div>
                        <input type="tel" v-show='!editFlag' v-model="amount"
                               @input="changeVal('input1',amount,lucyDate.maxAmout,lucyDate.mixAmount)"
                               class="tl editBtn" maxlength="7" ref="input3">
                        <span @click="editAmount"></span></li>
                    <li class="cl"></li>
                </ul>
                <!--   <form action="/example/html5/demo_form.asp" method="get"> -->
                <input type="range"
                       :min="lucyDate.mixAmount" :max="lucyDate.maxAmout"
                       step="100"
                       v-model="amount" @input="changeVal('input1',amount,lucyDate.maxAmout,lucyDate.mixAmount)"
                       ref="input1" @touchstart="editFlag=true">
                <!-- </form> -->
                <ul class='flex2 font30'>
                    <li>¥{{ lucyDate.mixAmount | toThousands(0)}}</li>
                    <li>¥{{ lucyDate.maxAmout | toThousands(0) }}</li>
                </ul>
            </div>
            <div class="borrow-detail">
                <ul class="norm-ul-2 norm-bg2">
                    <li><span></span>借款期限</li>
                    <li class="tr">
                        <div class="data tr">{{time}}</div>
                        个月
                        <span></span>
                    </li>
                </ul>
                <!--  <form action="/example/html5/demo_form.asp" method="get"> -->
                <input id="range_1" type="range"
                       min="1" :max="lucyDate.maxTime"
                       step="1" v-model="time"
                       @input="changeVal('input2',time,lucyDate.maxTime,1)" ref="input2">
                <!-- </form> -->
                <ul class='flex2'>
                    <li>1个月</li>
                    <li>{{ lucyDate.maxTime }}个月</li>
                </ul>
            </div>
            <p class="norm-ul pt64">
                <span class="l mt15" @click="trial"></span>
                <input class="btn r" :class="(amount>0)?'':'disabled'" type="button" value="我要申请" @click="applyFor">
            </p>
        </div>
        <div class="maskLayer abs" v-show="luckyFlag">
        <!-- <div class="maskLayer abs" > -->

            <div class="dialogLucy f28">
                <div class="bg-gradient h88 f32 gf rel">借款试算<span class="abs colse" @click="luckyFlag=false"></span>
                </div>
                <div class="flexBox">
                    <div class="l1 pt70">借款金额</div>
                    <div class="l1 f68"><span class="f26">¥</span>{{amount}}</div>
                    <div class="f24">借款期限 {{time}}个月</div>
                </div>
                <div class="h78">每期应还</div>
                <div class="ova">
                    <ul>
                        <li class="flexA pl30" v-for="item in repayList">
                            <div>{{item.date|fmtDate('yyyy年MM月dd日')}}</div>
                            <div>¥{{item.amount}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='dialogBg' v-show="flag1">
            <div class="dialog1 flexBox">
                <div class="warnIcon"></div>
                <p class="f28 g6 pt30 pb50" v-html="msg"></p>
                <div v-if="isConfirm == 1">
                    <div class="realNameBtn bdc" @click="fCloseDialog">取消</div>
                    <router-link :to="where" class="realNameBtn gf bg-red ml20">确定</router-link>
                </div>
                <div v-if="isConfirm == 0">
                  <div class="realNameBtn bg-red gf" @click="fCloseDialog">确定</div>
              </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
@import "./common.css";
@import "../static/css/common.css";
  input[type=tel] {
    background: #fafafa;
  }
  .flex2 {
    margin-top: 31px;
    display: flex;
    color: #999999;
    li{
      flex: 1;
      &:nth-child(1) {
        text-align: left;
      }
      &:nth-child(2) {
        text-align: right;
      }
    }
  }
  .norm-ul-2 {
    padding-top: 31px;
    margin-bottom: 52px;
  }
  .lucky {
    .lucky-banner {
      width: 100%;
      height: 620px;
       background:url(./images/bar.png) no-repeat;
       background-size: 100% 100%;
    }
    .lucky-money {
      width: 710px;
      height: 260px;
      margin: 0 auto 20px;
      background-color: #fff;
      // box-shadow: 0px 0px 30px #ddd;
      border-radius: 8px;

      h2 {
        padding-top: 30px;
        padding-left: 100px;
        padding-bottom: 10px;
        color: #fff;
        line-height: 40px;
        text-align: left;
        font-size: 42px;
        text-shadow: 0px 3px 13px #0052F2;
      }

      p {
        padding-left: 100px;
        color: #fff;
        font-size: 28px;
        line-height: 40px;
        text-align: left;
        font-weight: 300;
        text-shadow: 0px 2px 4px #3793F5;
      }
    }
    .lucky-s {
      background: url(./images/lucky-s.png) no-repeat center;
      background-size: 100% 100%;
      p {
        margin-top: 10px;
      }
    }
    .lucky-b {
      background: url(./images/lucky-b.png) no-repeat center;
      background-size: 100% 100%;
    }
    .go-to-lucky {
      width: 690px;
      height: 784.3px;
      margin: -60px auto 0;
      background-color: #fff;
      box-shadow: 0px 0px 30px #ddd;
      padding-top: 24px;
      .norm-ul {
        padding: 0 44px;
      }
      .norm-ul-1{
        margin-bottom: 30px;
        .purpose{
          float:right;
          appearance:none;
          border:none;
          padding-right:30px;
          padding-left:10px;
          text-align:right;
          background:url("images/arr-down.png") right center no-repeat;
          background-size:16px 12px;
          option{
          float:right;
          min-height:20px;
          font-size:50%;
          border:2px solid red;
        }
        }

        li:first-child {
          float: left;
          color: #333333;
          height: 40px;
          line-height: 40px;
          span{
            display: inline-block;
            width: 19px;
            height: 21px;
            margin-right: 10px;
            background: url(./images/load-use.png) right center no-repeat;
            background-size:19px 21px;
          }


        }
      }
        .norm-ul-2 {
          padding-top: 20px;
          margin-bottom: 52px;
          display: flex;
          li {
            &:nth-child(1) {
              span {
                display: inline-block;
                width: 30px;
                height: 30px;
              }
            }
            &:nth-child(2) {
            flex: 1;
            display: flex;
            // color: #FA5559;
            font-size: 36px;
            .data,input{
              flex: 1;
              margin-top:-10px;
              padding:0 12px 0 4px;
              font-size: 48px;
              width:30px;
            }
            input {
              color: #FA5559;
            }
            .editBtn{
              padding-right:44px;
              background:url(./images/edit.png) right center no-repeat;
              background-size: 26px 24px;
            }
            i, span {
            display: block;
            width: 44px;
            height: 44px;
            line-height: 44px;
            border-radius: 50%;
            }
            i {
              font-size: 36px;
              flex: 1;
            }
          }
          }

        }
      .norm-bg1 {
        li:nth-child(1) {
          span {
            background:url("images/rmb.png") center no-repeat;
            background-size:23px 23px;
            vertical-align:-4px;
          }
        }
        li:nth-child(2) {

          span {
            background:  url(./images/edit.png) no-repeat center;
            background-size: 33px 28px;
          }
        }
      }
        .norm-bg2 {
          li:nth-child(1) {
            span {
              background: url(./images/load-durtime.png) no-repeat center bottom;
              background-size: 23px 21px;
            }
          }
          li:nth-child(2) {
          input {
            text-align: right;
          }
            span {
              background:  url(./images/help.png) no-repeat center;
              background-size: 40px 40px;
            }
          }
        }
      .borrow-detail {
        width: 670px;
        height: 240px;
        margin: 10px auto;
        padding: 0 42px;
        background: #fafafa;
        background: #fff;
        border-radius: 6px;
        border-top: 1px solid #eee;
      }
      p {
        span {
          width: 80px;
          height: 80px;
          background: url(./images/calculator.png) no-repeat center;
          background-size: 100%;
        }
        input{
          width:480px;
          line-height:88px;
        }
      }
    }
  }
  .maskLayer{
    top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);
    .dialogLucy{
        width:600px;
        height:733px;
        border-radius:10px;background:#fff;
        margin:295px auto 0;
        .pt70{
          padding-top:70px;
          padding-bottom:24px;
        }
        .f68{
          font-size:68px;
          padding-bottom:24px;
        }
        .f24{
          color: #FA5559;
          padding-bottom:70px;
        }
        .h78{
          line-height:78px;
          background: #F9F9F9;
          border-top: 1px dashed #CCCCCC;
          padding-left:30px;
          margin-bottom:36px;
        }
        .flexA{
          height:62px;
          border:none;
        }
        .ova{
          height:200px;
          overflow-y:scroll;
        }
    }
    .h88{
      height:88px;line-height:88px;font-size:32px;text-align:center;
      background-size:100% 76px;
      .colse{
        width:24px;height:24px;
        background:url("images/closeLucy.png") center no-repeat;
        background-size:100%;
        right:30px;top:30px;;
      }
    }

  }
    .lucky .go-to-lucky .norm-ul.pt64 {
      padding-top: 64px;
      border-top: 1px solid #eee;
      margin:  0 10px;
    }
    /*弹框样式开始*/
  .dialogBg{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.4);z-index:9999;}
  .dialog1{margin:452px auto 0;padding:70px 0 30px 0;width:464px;background: #FFFFFF;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
border-radius: 8px;}
.pb50{padding-bottom:50px;width:90%;text-align:center}
.warnIcon{width:92px;height:114px;background:url("../static/images/realName1.png") center no-repeat;background-size:100%;}
.realNameBtn{display:inline-block;width:190px;height:58px;line-height:58px;
border-radius: 4px;font-size:28px;text-align:center}
.bdc{border:1px solid #ccc;}
.bg-red{background: #FA5559;}
  /*弹框样式结束*/
</style>
<script src="./lucky.js"></script>
