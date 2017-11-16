<template>
    <div>
        <ul class="wrap p0">
            <li class="flexA bbe pl30">
                <!-- <router-link to="wallet" class="flexA bbe pl30"> -->
                <div class="aboutUs">关于我们</div>
                <div class="arrow_r"></div>
                <!-- </router-link> -->
            </li>
            <li class="flexA bbe pl30">
                <!-- <router-link to="wallet" class="flexA bbe pl30"> -->
                <div class="aboutUs server">客户服务</div>
                <div class="arrow_r"></div>
                <!-- </router-link> -->
            </li>
            <li class="flexA bbe pl30">
                <!-- <router-link to="wallet" class="flexA bbe pl30"> -->
                <div class="aboutUs version">当前版本</div>
                <div class="g6 f32">
                    1.0.1<i class="arrow_r ml20"></i>
                </div>
                <!-- </router-link> -->
            </li>
        </ul>
        <div class="content">
            <div class="btn" @click="logOut">退出</div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .wrap {
        margin-bottom: 450px;
    }

    .aboutUs {
        padding-left: 64px;
        background: url("./images/about_icon.png") left center no-repeat;
        background-size: 38px 38px;
        font-size: 32px;
        color: #333;
    }

    .server {
      background: url("./images/serve_icon.png") left center no-repeat;
      background-size: 38px 38px;    }

    .version {
      background: url("./images/copy_icon.png") left center no-repeat;
      background-size: 38px 38px;
    }
    .arrow_r {
        display: inline-block;
        width: 15px;
        height: 30px;
    }
</style>
<script src="./settings.js"></script>
