<template>
    <div>
        <div class="rel">
            <textarea name="" id="" cols="30" rows="10" class='wrap f30' placeholder="请输入您的宝贵意见或建议" autofocus
                      maxlength="200"></textarea>
            <div class="abs f24 g9">不超过200字</div>
        </div>
        <div class="content">
            <input type="button" value="提交" class="btn btn1">
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .wrap {
        margin-bottom: 104px;
        width: 100%;
        height: 378px;
        border-left: none;
        border-right: none;
        padding: 28px 30px;
        resize: none
    }

    .abs {
        right: 30px;
        top: 348px;
    }
      .btn1 {
        line-height: 1.87733rem;
      }
</style>
<script src="./feedback.js"></script>
