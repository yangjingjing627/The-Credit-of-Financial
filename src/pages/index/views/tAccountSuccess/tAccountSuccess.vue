<template>
    <div class="success_wrap">
		<div class="bd tc">
			<div class="pic"></div>
            <h2 class="title f36">成功转出 <span class="red f46">{{billDetails.orderAmount | toThousands}}</span> 元 </h2>
        </div>
        <!--跳转到钱包页  -->
        <div class="content">
            <router-link to="wallet" class="btn">我知道了</router-link>
        </div>
    </div>
</template>
<style lang="sass" scoped>
@import '../static/css/success.css';

</style>
<script src="./tAccountSuccess.js"></script>
