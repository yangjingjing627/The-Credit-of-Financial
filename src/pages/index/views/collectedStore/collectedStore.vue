<template>
    <div class="bg-white h-100">
      　<div class="store-list">
          <div class="flexA flex bbe" v-for="item in collectedStoreList">
              <div class="img">{{ item.name }}</div>
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
  .h-100 {
    height: 100%;
    overflow: hidden;
  }
  .store-list {
    height: 100%;
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
<script src="./collectedStore.js"></script>
