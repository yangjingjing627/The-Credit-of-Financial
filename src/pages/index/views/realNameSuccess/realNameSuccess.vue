<template>
    <div class="success_wrap">
        <div class="bd tc">
            <div class="pic"></div>
            <h2 class="title f32 g3">恭喜，您的实名认证已经成功！</h2>
        </div>
        <!--跳转到钱包页  -->
        <div class="content">
            <router-link to="setTradePsw" class="btn">去设置交易密码</router-link>
        </div>
    </div>
</template>
<style lang="sass" scoped>
  .success_wrap {
    padding-top: 200px;
    margin-top: 20px;
  }
  .success_wrap .bd .pic {
    background: url("./images/success.png") center center no-repeat;
  }
  .success_wrap .bd .title {
    padding-top: 20px;

  }
  .success_wrap .bd {
    padding-bottom: 190px;
  }
</style>
<script src="./realNameSuccess.js"></script>
