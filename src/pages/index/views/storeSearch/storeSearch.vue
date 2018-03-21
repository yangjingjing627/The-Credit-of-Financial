<template>
    <div class="h-100">
      <div class="bg-white bte bbe flexA">
          <div class="g6 w540 h56"><input class="db input inpSearch pl66 radius100" type="text" placeholder="找优惠点我试试" name="" value=""></div>
          <h5>取消</h5>
      </div>
      <div class="search-history bbe">
        <p class="bg-white pt28 pb20 f24 gc pl68">搜索历史</p>
        <ul class="bg-white g6 f28 pl68">
          <li class="ptb20">望京</li>
          <li class="ptb20">渝乡人家</li>
          <li class="ptb20">望京</li>
          <li class="ptb20">望京</li>
          <li class="ptb20">太行</li>
          <li class="ptb20">蓝色港湾</li>
          <li class="ptb20">张妈妈</li>
          <li class="ptb20">张妈妈</li>
          <li class="ptb20">张妈妈</li>
          <li class="ptb20">张妈妈</li>
          <li class="ptb20">张妈妈</li>
          <li class="ptb20">望京</li>
          <li class="ptb20">渝乡人家</li>
          <li class="ptb20">望京</li>
          <li class="ptb20">望京</li>
          <li class="ptb20">太行</li>
          <li class="ptb20">蓝色港湾</li>
          <li class="ptb20">张妈妈</li>
          <li class="ptb20">张妈妈</li>
          <li class="ptb20">张妈妈</li>
          <li class="ptb20">张妈妈</li>
          <li class="ptb20">张妈妈</li>
        </ul>
        <div class="bg-white pb20">
          <p class="clear-history tc g6 f24 bte">清除搜索历史</p>
        </div>
      </div>
    </div>
</template>
<style lang="sass" scoped>
  .flexA {
    margin: 0;
    padding: 0 40px;
  }
  .h-100 {
    height: 100%;
    overflow: hidden;
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
.pt28 {
  padding-top: 28px;
}
.pb20 {
  padding-bottom: 20px;
}
.ptb20 {
  padding-top: 20px;
  padding-bottom: 20px;
}
.pl68 {
  padding-left: 68px;
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
.search-history {
  height: 100%;
  overflow: hidden;
}
ul {
  max-height: 76%;
  overflow: scroll;
}
.clear-history {
  padding: 27px 0px 0;
  margin: 0 44px;
}
</style>
<script src="./storeSearch.js"></script>
