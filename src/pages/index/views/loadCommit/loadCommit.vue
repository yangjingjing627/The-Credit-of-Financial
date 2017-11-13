<template>
    <div class="load-commit">
        <div class="commit-con">
            <div class="commit-bg"></div>
            <ul>
                <li>您的借款意向已成功提交！</li>
                <li>我们已通知客户经理尽快与您联系完成其他资料的提交</li>
                <li>客户经理电话 15201229330</li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .load-commit {
        height: 100%;
        padding-top:20px;
            .commit-con {     
                padding-top:100px;
                background-color: #fff;
                width: 100%;
                height: 100%;

                .commit-bg {
                    width: 432px;
                    height: 302px;
                    margin: 0px auto 90px;
                    background: url(./images/success.png) no-repeat;
                    background-size: 100% 100%;
                }

                ul {
                    width: 420px;
                    margin: 0 auto;
                    text-align: center;

                li {
                    line-height:40px;
                    &
                    :first-of-type {
                        color: #333333;
                        font-size: 34px;
                        line-height: 48px;
                    }

                    &
                    :nth-child(2) {
                        margin-top: 20px;
                        color: #999999;
                        font-size: 28px;
                        line-height: 40px;
                    }

                    &
                    :nth-child(3) {
                        margin-top: 43px;
                        color: #666666;
                        font-size: 28px;
                    }
                }
            }
        }
    }
</style>
<script src="./loadCommit.js"></script>
