<template>
    <div>
        <div class="rel">
          <div class="wrap">
            <textarea name="" id="" cols="30" rows="10" class='f28' placeholder="请输入您的宝贵意见或建议" autofocus
            maxlength="200"></textarea>
          </div>
            <div class="abs f24 g9">不超过<span class="red">200</span>字</div>
        </div>
        <div class="content">
            <input type="button" value="提交" class="btn btn1">
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .wrap {
        border: none;
        border-right: none;
        padding: 28px 30px;
        resize: none;
    }
    .rel {
      padding-bottom: 84px;
      background-color: white;
    }
    textarea {
      width: 100%;
      height: 238px;
      border: 0;
      background-color: #F9F9F9;
      padding: 24px 30px;
      box-sizing: border-box;
    }
    .abs {
        right: 30px;
        top: 290px;
    }
      .btn1 {
        line-height: 1.87733rem;
      }
    .content {
      margin-top: 190px;
    }
</style>
<script src="./feedback.js"></script>
