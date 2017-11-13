<template>
    <div>
        <ul class="wrap p0">
            <li class="flexA bbe pl30">
                <!-- <router-link to="wallet" class="flexA bbe pl30"> -->
                <div class="aboutUs">关于我们</div>
                <div class="arrows"></div>
                <!-- </router-link> -->
            </li>
            <li class="flexA bbe pl30">
                <!-- <router-link to="wallet" class="flexA bbe pl30"> -->
                <div class="aboutUs server">客户服务</div>
                <div class="arrows"></div>
                <!-- </router-link> -->
            </li>
            <li class="flexA bbe pl30">
                <!-- <router-link to="wallet" class="flexA bbe pl30"> -->
                <div class="aboutUs version">当前版本</div>
                <div>
                    1.0.1<i class="arrows ml20"></i>
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
        margin-bottom: 282px;
    }

    .aboutUs {
        padding-left: 64px;
        background: url("./images/setIcon.png") 0 0 no-repeat;
        background-size: 37px 151px;
        font-size: 28px;
        color: #5f616b;
    }

    .server {
        background-position: 0 -50px;
    }

    .version {
        background-position: 0 -112px;
    }

    .arrows {
        display: inline-block;
    }
</style>
<script src="./settings.js"></script>