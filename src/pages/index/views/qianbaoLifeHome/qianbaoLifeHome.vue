<template>
    <div class="bg-white h-100">
      <div class="bte bbe flexA flexA1">
        <!-- <p><span></span>北京<i><i></p> -->
          <h5>北京</h5>
          <div class="g6 w540 h56"><input class="db input inpSearch pl66 radius100" type="text" placeholder="找优惠点我试试" name="" value=""></div>
      </div>
      <div class="flexA bg-f8 margin0">
          <h5 class="g3 f24">我的位置：朝阳区酒仙桥南路29号</h5>
          <div class="arrow_b"></div>
      </div>
      　<div class="store-list">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1实弹射击当时的百货商店时间都是假的1</mt-swipe-item>
          <mt-swipe-item>2三等奖和世界杯胡说八道实弹射击倒计时</mt-swipe-item>
          <mt-swipe-item>3时间倒计时倒计时倒计时呢</mt-swipe-item>
        </mt-swipe>
          <div class="flexA flex bbe">
              <div class="img"></div>
              <div class="storeInfo">
                <p class="store-name pl38 g3 f32">唐城小吃</p>
                <p class="store-item pl38 f24">美食</p>
                <p class="store-address pl38 bbe g6 f24">酒仙桥：226m</p>
                <p class="store-price g6 f24">人均¥121<span>买单8.5折</span></p>
              </div>
          </div>
          <div class="flexA flex bbe">
              <div class="img"></div>
              <div class="storeInfo">
                <p class="store-name pl38 g3 f32">唐城小吃</p>
                <p class="store-item pl38 f24">美食</p>
                <p class="store-address pl38 bbe g6 f24">酒仙桥：226m</p>
                <p class="store-price g6 f24">人均¥121<span>买单8.5折</span></p>
              </div>
          </div>
          <div class="flexA flex bbe">
              <div class="img"></div>
              <div class="storeInfo">
                <p class="store-name pl38 g3 f32">唐城小吃</p>
                <p class="store-item pl38 f24">美食</p>
                <p class="store-address pl38 bbe g6 f24">酒仙桥：226m</p>
                <p class="store-price g6 f24">人均¥121<span>买单8.5折</span></p>
              </div>
          </div>
          <div class="flexA flex bbe">
              <div class="img"></div>
              <div class="storeInfo">
                <p class="store-name pl38 g3 f32">唐城小吃</p>
                <p class="store-item pl38 f24">美食</p>
                <p class="store-address pl38 bbe g6 f24">酒仙桥：226m</p>
                <p class="store-price g6 f24">人均¥121<span>买单8.5折</span></p>
              </div>
          </div>
          <div class="flexA flex bbe">
              <div class="img"></div>
              <div class="storeInfo">
                <p class="store-name pl38 g3 f32">唐城小吃</p>
                <p class="store-item pl38 f24">美食</p>
                <p class="store-address pl38 bbe g6 f24">酒仙桥：226m</p>
                <p class="store-price g6 f24">人均¥121<span>买单8.5折</span></p>
              </div>
          </div>
          <div class="flexA flex bbe">
              <div class="img"></div>
              <div class="storeInfo">
                <p class="store-name pl38 g3 f32">唐城小吃</p>
                <p class="store-item pl38 f24">美食</p>
                <p class="store-address pl38 bbe g6 f24">酒仙桥：226m</p>
                <p class="store-price g6 f24">人均¥121<span>买单8.5折</span></p>
              </div>
          </div>
          <div class="flexA flex bbe">
              <div class="img"></div>
              <div class="storeInfo">
                <p class="store-name pl38 g3 f32">唐城小吃</p>
                <p class="store-item pl38 f24">美食</p>
                <p class="store-address pl38 bbe g6 f24">酒仙桥：226m</p>
                <p class="store-price g6 f24">人均¥121<span>买单8.5折</span></p>
              </div>
          </div>
      　</div>
    </div>
</template>
<style lang="sass" scoped>
  .flexA1 {
    margin: 0;
    padding: 0 40px;
  }
  .h-100 {
    height: 100%;
    overflow: hidden;
  }
  .store-list {
    height: 100%;
    padding-bottom: 300px;
    overflow: scroll;
  }
  .w540 {
    width: 540px;
  }
  .h56 {
    height: 56px;
  }
  .pl66 {
    padding-left: 66px;
  }
  .radius100 {
    border-radius: 100px;
  }
  .input {
    color: #A0A2A7;
    font-size: 28px;
    opacity: 0.5;
    line-height: 56px;
  }
  .inpSearch {
      background: #F8F8F8 url(./../static/images/icon_search.png) no-repeat 20px center;
      background-size: 28px 30px;
      border-radius: 100px;
      width: 100%;
      height: 56px;
      line-height: 56px;
      font-size: 28px;
  }
  .arrow_b {
      background: #F8F8F8 url(./../static/images/arrow_b.png) no-repeat left center;
      background-size: 28px 30px;
      padding-right: 40px;
      height: 30px;
  }
    .bg-f8 {
      background: #F8F8F8;
    }
    .margin0 {
      padding: 40px;
      margin: 0;
    }
    .flex {
      height: auto;
      display: flex;
    }
    .img {
      width: 180px;
      height: 130px;
      background-color: tan;
      margin-top: -40px;
    }
      .storeInfo {
        flex: 1;
        padding-top: 30px;
      }
      .pl38 {
        margin-left: 38px;
      }
      .store-item {
        width: 70px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #eee;
        color: #BFA779;
        margin: 24px 0 24px 38px;
      }
      .store-price {
        padding: 20px 38px;
        span {
          background: #FA5559;
          border-radius: 100px 100px 100px 0;
          color: white;
          padding: 5px 20px;
          font-weight: 100;
          margin-left: 10px;
          box-shadow: 0 2px 4px rgba(237, 35, 36, 1);
        }
      }
</style>
<script src="./qianbaoLifeHome.js"></script>
