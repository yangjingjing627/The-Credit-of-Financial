<template>
    <div>
        <ul class="wrap mb70">
            <li>
                <router-link to="modifyLogPsw" class="flexA">
                    <span>修改登录密码</span>
                    <span class="arrows"></span>
                </router-link>
            </li>
            <!-- <li>
                <router-link to="modifyTradePsw" class="flexA">
                     <span>修改交易密码</span>
                    <span class="arrows"></span>
                </router-link>
            </li>
            <li>
                <router-link to="forgotTradePsw" class="flexA">
                     <span>忘记交易密码</span>
                    <span class="arrows"></span>
                </router-link>
            </li> -->
        </ul>
        <!--  <div class="content">
             <div class="btn">完成</div>
         </div> -->
    </div>
</template>
<style lang="sass" scoped>
    .mb70 {
        margin-bottom: 70px;
    }

    li {
        border-bottom: 1px solid #efeded;
        height: 95px;
        font-size: 30px;
        color: #333;
    }

    span {
        display: block
    }
</style>
<script src="./passwordManage.js"></script>