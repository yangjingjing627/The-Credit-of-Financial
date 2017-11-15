<template>
    <div class="wrapBox">
        <div class="wrap">
            <!--账单明细  -->
            <div class="billDeail">
                <div class="flexA flexA_140 arrow_r" @click="billSection(1)">
                    <div>
                        <div class="f30 g3">关于银行渠道升级通知</div>
                        <div class="f26 g9">2017-08-04 18:14</div>
                    </div>
                </div>
            </div>

            <!--公告详情  -->
            <div class="dealDetail" v-show="section == 1">
                <div class="cheader">
                    <div class="left" @click="billSection(0)">
                        <i class="icon_arrow"></i>
                    </div>
                    <div class="mid">
                        <h2 class="title">公告详情</h2>
                    </div>
                </div>
                <div class="wrap mt20 f30">
                    <div class="flexA">
                        <h5 class="f30 g3">关于银行渠道升级通知</h5>
                        <div class="f24 g9">2017-08-04 18:14</div>
                    </div>
                    <div class="flexA flexA_auto">
                        <div class="f28 g6">
                            <h5 class="pt30">尊敬的宝粉儿：</h5>
                            <div class="ti pt50 pb80">
                                中信银行08月05日17:30至08月06日07:00进行系统维护，期间暂停支付业务，请各位宝粉们提前知悉，如有充值需求，请提前做好资金安排，为此给您带来的不便，敬请谅解！
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--暂无数据  -->
            <div class="noData hide">
                <span class="noDataIcon"></span>
                <p>暂无数据</p>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import '../static/css/common.css';
    @import '../static/css/detail.css';
</style>
<script src="./notice.js"></script>
