<template>
    <div class="load-commit">
        <div class="commit-con">
            <div class="commit-bg"></div>
            <ul>
                <li>您的借款意向已成功提交!</li>
                <li>我们已通知客户经理尽快与您联系完成其他资料的提交</li>
                <!-- <li></li> -->
            </ul>
        </div>
        <p>客户经理电话 15201229330</p>
    </div>
</template>
<style lang="sass" scoped>
  @import 'src/static/css/variables.scss';
    .load-commit {
      display: flex;
      flex-direction: column;
      -webkit-flex-direction: column;
        height: 100%;
        padding-top:20px;
        background-color: #fff;
            .commit-con {
              flex: 1;
                padding-top:100px;
                width: 100%;
                height: 100%;

                .commit-bg {
                    width: 432px;
                    height: 302px;
                    margin: 0px auto 150px;
                    background: url(./images/success.png) no-repeat;
                    background-size: 100% 100%;
                }

                ul {
                    width: 420px;
                    margin: 0 auto;

                li {
                    text-align: center;
                    line-height:40px;
                    &:first-of-type {
                        color: $first-header;
                        font-size: 34px;
                        line-height: 48px;
                    }

                    &:nth-child(2) {
                        margin-top: 90px;
                        color: $third-header;
                        font-size: 28px;
                        line-height: 40px;
                        font-weight: 300;
                    }
                }
            }
        }
        p {
          text-align: center;
          height: 42px;
          color: $third-header;
          font-size: 30px;
          margin-bottom: 44px;
          font-weight: 300;
        }
    }
</style>
<script src="./loadCommit.js"></script>
