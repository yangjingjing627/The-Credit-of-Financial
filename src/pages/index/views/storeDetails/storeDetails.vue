<template>
    <div class="bg-white">
      　<div class="store-img">
          <!-- <img src="" alt=""> -->
          <mt-swipe :auto="4000">
            <mt-swipe-item>1第一张图片</mt-swipe-item>
            <mt-swipe-item>2第二张图片</mt-swipe-item>
            <mt-swipe-item>3第三张图片</mt-swipe-item>
          </mt-swipe>
      　</div>
      <div class="pt30 pb30 tc">
        <p class="g3 f34 pb20">优之良品（京通罗斯福广场店）</p>
        <p class="g9 f24">便利店 | 人均¥50</p>
      </div>
      <div class="bge h20"></div>
      <div class="padx">
        <p class="g3 f28 pl40 pb10 icon-zhe">买单9.5折，部分优惠</p>
        <p class="g9 f24 pl40 pb40">每天</p>
        <p class="margin-60 f28 gtan tc pb30"><span class="dashed"></span> 优惠说明 <span class="dashed"></span></p>
        <p class="g9 f28 pl40">使用说明：<span class="g3 f28">饮料项目除外  不与其他优惠同享</span></p>
      </div>
      <div class="bge h20"></div>
      <div class="padx">
        <p class="g3 f28 pl40 icon-zhe">营业时间：<span class="g3 f28">09:00-21:00</span></p>
      </div>
      <p class="bbe marginlr30"></p>
      <div class="padx flexA">
        <div class="">
          <p class="l g3 f28 pl40 icon-zhe store-addr">商家地址：<span class="g3 f28">北苑南麓翠屏北里21号楼京通罗斯福广 场F5层九棵树地铁对面</span></p>
          <p class="l arrow arrow_r"></p>
        </div>
        <p class="tel icon-tel"></p>
      </div>
    </div>
</template>
<style lang="sass" scoped>
  .bg-white {
    height: 100%;
    overflow: hidden;
  }
  .flexA {
    margin: 0;
  }
  .tel {
    width: 100px;
    height: 100px;
    border-left: 1px solid #eee;
  }
  .arrow {
    width: 100px;
    height: 100px;
  }
  .store-img {
    width: 100%;
    height: 480px;
    background: tan;
  }
.bge {
  background-color: #eee;
}
.h20 {
  height: 20px;
}
.gtan {
  color: #BFA779;
}
.padx {
  padding: 28px 0 38px 60px;
}
.margin-60 {
  margin-left: -60px;
}
.pl40 {
  padding-left: 40px;
}
.marginlr30 {
  margin: 0 30px;
}
.dashed {
  width: 150px;
  display: inline-block;
  height: 10px;
  border-top: 1px dashed #BFA779;
}
.icon-zhe {
  background: url(./../static/images/icon_search.png) no-repeat 0px center;
  background-size: 30px 30px;
}
.icon-tel {
  background: url(./../static/images/icon_search.png) no-repeat center;
  background-size: 50px 50px;
}
.store-addr {
  width: 470px;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.arrow_r {
  background: url(./../static/images/arrow_r.png) no-repeat center;
  background-size: 14px 21px;
}
</style>
<script src="./storeDetails.js"></script>
