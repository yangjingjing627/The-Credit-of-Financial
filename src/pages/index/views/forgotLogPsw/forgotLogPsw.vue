<template>
    <div>
        <div class="step1" v-show="show">
            <ul class="wrap f32 g6">
                <li class="flexA">
                    <div>
                        <span class="tel_icon"></span>
                        <input type="tel" placeholder="请输入手机号" maxlength="11" v-model="tel">
                    </div>
                    <div class="getCodeBtn" v-if="code"><i class="blue">{{time}}s</i>重新获取</div>
                    <div class="getCodeBtn" v-else @click="getCode">获取验证码</div>
                </li>
                <li class="flexA">
                    <div>
                        <span class="verify_icon"></span>
                        <input type="text" placeholder="请输入验证码" maxlength="6" v-model="authCode">
                    </div>
                </li>
            </ul>
            <div class="content">
                <div class="btn" :class="tel&&authCode?'':'opacity'" @click="submit">下一步</div>
            </div>
        </div>

        <div class="step2" v-show="!show">
          <ul class="wrap f32 g6">
              <li class="flexA">
                  <div>
                      <span class="pwd_icon"></span>
                      <input type="password" maxlength="20" placeholder="设置新登录密码" v-model="newPsw">
                  </div>
              </li>
          </ul>
          <p class="f22">6-20位数字、字母、符号，不允许有空格</p>
            <div class="content">
                <div type="button" class="btn" :class="newPsw?'':'opacity'" @click="savePsw">完成</div>
            </div>
        </div>

    </div>
</template>
<style lang="sass" scoped>

    .codeIc {
        background-position: 0 -54px
    }

    .mb0 {
        margin-bottom: 0;
    }

    .pswIcon {
        background-position: 0 -106px
    }
    .tel_icon {
        padding-left: 56px;
    		background: url("./../static/images/tel_icon.png") no-repeat left center;
    		background-size: 24px 30px;
    }
    .verify_icon {
      padding-left: 56px;
      background: url("./../static/images/verify_icon.png") no-repeat left center;
      background-size: 24px 30px;
    }
    .pwd_icon {
      padding-left: 56px;
      background: url("./../static/images/pwd_icon.png") no-repeat left center;
      background-size: 24px 30px;
    }
    .f22 {
        color: #5f616b;
        padding: 18px 0 0px 40px;
        margin-bottom: 200px;
    }
</style>
<script src="./forgotLogPsw.js"></script>s
