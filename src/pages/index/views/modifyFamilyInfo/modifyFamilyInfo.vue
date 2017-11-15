<template>
    <div>

        <ul class="f30">
            <li class="flexA f28 g9  pr5 bd-none">个人信息</li>
            <!-- <li class="pl30 pr30 bg-white">
                <div class="flexA pl10 pr5 bbe rel">
                    <div>婚姻状况</div>
                    <select class="w510 g6">
                        <option value="0" class="f12">未婚</option>
                        <option value="1" class="f12">已婚</option>
                        <option value="2" class="f12">离异</option>
                        <option value="3" class="f12">丧偶</option>
                    </select>
                    <div class="abs arrowsB"></div>
                </div>
            </li> -->
            <ul class="wrap">
                <li class="flexA">
                    <span class="w200 f32 inline-block">婚姻状况</span>
                    <select class="w440 f32 g6 db" v-model="isMarry" style="color: #ccc; font-weight: 300;">
                        <option value="0">请选择</option>
                        <option value="1">未婚</option>
                        <option value="2">已婚</option>
                        <option value="3">离异</option>
                        <option value="4">丧偶</option>
                    </select>
                </li>
            </ul>
            <li class="flexA f28 g9  pr5 bd-none">配偶联系方式／亲属联系方式</li>
            <li class="pl30 pr30 bg-white">
                <div class="flex pl10 pr5 bbe">
                    <div>姓名</div>
                    <div class="w510">
                        <input type="text" value="范冰冰" class="w440 db">
                        <div class="f24 red">请输入正确的配偶姓名</div>
                    </div>
                </div>
                <div class="flex pl10 pr5 bbe">
                    <div>手机号</div>
                    <div class="w510">
                        <input type="text" value="15210234001" class="arrow_r db w-100">
                        <div class="f24 red">错误信息</div>
                    </div>
                </div>
                <div class="flex pl10 pr5 bbe">
                    <div>身份证</div>
                    <div class="w510">
                        <input type="text" value="130426198911265220">
                        <!-- <div class="f24 red">错误信息</div> -->
                    </div>
                </div>

            </li>
            <li class="flexA f28 g9  pr5 bd-none">其他联系人联系方式</li>
            <li class="pl30 pr30 bg-white">
                <div class="flex pl10 pr5 bbe">
                    <div>姓名</div>
                    <div class="w510">
                        <input type="text" value="" placeholder="请输入联系人姓名">
                    </div>
                </div>
                <div class="flex pl10 pr5 bbe">
                    <div>手机号</div>
                    <div class="w510 flex p-none">
                        <input type="text" value="" placeholder="打开通讯录"  class="arrow_r db w-100" readonly="readonly">
                        <!-- <div class="rotate arrowsB"></div> -->
                    </div>

                </div>
            </li>
        </ul>
        <div class="btn w670 mt60">确认提交</div>

    </div>
</template>
<style lang="sass" scoped>
    .bbe {
        border-bottom: 1px solid #eee
    }

    .w510 {
        width: 510px;
        border: none
    }

    .arrowsB {
        right: 10px;
        top: 42px;
        width: 26px;
        height: 16px;
        background: url("images/arrowsB.png") center no-repeat;
        background-size: 100%;
    }

    .flex {
        display: -webkit-flex;
        display: -webkit-box;
        -webkit-justify-content: space-between;
        -webkit-box-pack: justify;
        padding-top: 32px;
        padding-bottom: 30px;
    }

    .rotate {
        margin-top: 10px;
        transform: rotate(-90deg)
    }

    .p-none {
        padding: 0;
    }
      select {
          appearance: none;
          border: none;
          padding-right: 40px;
          padding-left: 10px;
          text-align: right;
          background: url("../static/images/arrow_b.png") right center no-repeat;
          background-size: 30px 15px;
          // box-sizing: border-box;

      option {
          min-height: 20px;
          font-size: 50%;
          border: 2px solid red;
      }

      }

</style>
<script src="./modifyFamilyInfo.js"></script>
