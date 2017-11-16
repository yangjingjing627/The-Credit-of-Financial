<template>
    <div class="bank mt20">
        <!--未绑卡  -->
        <div v-if="isBank">
            <router-link to="bindbank">
                <div class="goBank bankBg">
                </div>
            </router-link>
            <div class="txt">您还未绑卡，请先去绑定银行卡</div>
            <div class="con">
                <!-- <span class="icon_bindbank"></span> -->
                <span class="f34 g9">点击去绑卡</span>
            </div>
        </div>

        <!--已绑卡  -->
        <div class="bankBg1" v-else>
            <div class="bind">
                <h2 class="title">{{banks.bankName}}</h2>
                <p class="code">{{banks.bankCard}}</p>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
  .con {
    margin: 142px 40px 0;
    height: 104px;
    border-radius: 4px;
    border: 2px dashed #999;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    span {
      padding-left: 54px;
      background: url(images/add_icon.png) no-repeat left center;
      background-size: 32px 32px;
      box-sizing: border-box;
    }
  }
    .bank {
        background: #fff;
        height: calc(100% - 20px);
        padding-top: 40px;
    }

    .bankBg {
        width: 352px;
        height: 242px;
        border-radius: 10px;
        display: block;
        background: url(images/bindbank_bg.png) no-repeat;
        background-size: 352px 242px;
        color: #fff;
        font-size: 30px;
        margin: 0 auto 40px auto;
    }
      .bankBg1 {
          width: 690px;
          height: 171px;
          border-radius: 10px;
          display: block;
          background: url(images/bindbank_bg1.png) no-repeat;
          background-size: 690px 171px;
          color: #fff;
          font-size: 30px;
          margin: 0 auto 40px auto;
      }

    /* 已绑卡 */
    .bind {
        padding: 38px 0 0 75px;
    }

    .title {
        font-size: 34px;
    }

    .code {
        padding-top: 15px;
        font-size: 30px;
    }

    /* 未绑卡 */
    .goBank {
        text-align: center;
        // padding-top: 58px;
        margin: 100px auto 62px;
    }

    .txt {
        font-size: 30px;
        color: #999;
        text-align: center;
        margin-top: 35px;
    }

    .icon_bindbank {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        font-style: normal;
        color: #ddd;
        text-align: left;
        text-indent: -9999px;
        direction: ltr;
        border: 5px solid #fff;
        width: 32px;
        height: 32px;
        border-radius: 100%;
        margin-right: 15px;
        margin-top: -8px;
    }
    .icon_bindbank {
      background: url(images/bindbank_bg.png) no-repeat;
      background-size: 32px 32px;
    }

    // .icon_bindbank:before, .icon_bindbank:after {
    //     box-shadow: inset 0 0 0 32px;
    //     content: '';
    //     pointer-events: none;
    //     position: absolute;
    //     left: 50%;
    //     top: 50%;
    //     transform: translate(-50%, -50%);
    // }
    //
    // .icon_bindbank:before {
    //     width: 28px;
    //     height: 4px;
    // }
    //
    // .icon_bindbank:after {
    //     width: 4px;
    //     height: 28px;
    // }
</style>
<script src="./bank.js"></script>
