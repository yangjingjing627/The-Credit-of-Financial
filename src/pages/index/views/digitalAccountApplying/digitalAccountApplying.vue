<template>
    <div class="success_wrap">
        <div class="bd tc">
            <div class="pic"></div>
            <h2 class="title title_1 f34 g6">您的数字钱包账户申请已经提交</h2>
            <h2 class="title f34 g6">请等待结果</h2>
        </div>
        <!--跳转到钱包页  -->
        <div class="content">
            <!-- <router-link to="setTradePsw" class="btn">我知道了</router-link> -->
            <router-link to="" class="btn">我知道了</router-link>

        </div>
    </div>
</template>
<style lang="sass" scoped>
  .success_wrap {
    padding-top: 150px;
    margin-top: 20px;
  }
  .success_wrap .bd .title {
    padding-top: 0px;
    font-weight: 300;
    &.title_1 {
      padding-top: 135px;
    }
  }
  .success_wrap .bd {
    padding-bottom: 63px;
  }
</style>
<script src="./digitalAccountApplying.js"></script>
