<template>
    <div class="success_wrap">
        <div>
            <div class="bd tc">
                <div class="pic"></div>
                <h2 class="title f32">您的数字钱包账户已经提交，请等待结果</h2>
            </div>
            <!--导入成功跳转到钱包页  -->
            <div class="content">
                <router-link to="wallet" class="btn">我知道了</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .success_wrap .bd .pic img {
        width: 310px;
        height: 249px;
    }
</style>
<script src="./importWalletResult.js"></script>