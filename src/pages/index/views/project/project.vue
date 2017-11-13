<template>
    <div class="wrapper">
        <section class="project-body">
            <div class="top-banner">
                <img src="./images/pro_banner.png" width="100%" alt="">
            </div>
            <div class="prolist">
                <div class="pro-item mt20" v-for="item in list">
                    <!--30 过期  -->
                    <div v-show="item.status==10 || item.status==20 || item.status==60 || item.status==40">
                        <router-link :to="{ path: 'projectDetail', query: { id: item.id }}" class="fix">
                            <div class="pro-title">
                                <ul class="fix">
                                    <li>
                                        <span class="icon icon_height"></span>
                                        <router-link :to="{ path: 'moreDetail', query: { id: item.id , active: 1}}"
                                                     class="g6">
                                            <span>区块交易：</span><span class="txt">{{item.chainTxId}}</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <span class="icon icon_source"></span>
                                        <span>来源：</span><span class="txt">{{item.omsName}}</span>
                                        <span class="pro-mark red-mark r" v-show="item.status==10">发售中</span>
                                        <span class="pro-mark red-mark r" v-show="item.status==20">已满额</span>
                                        <span class="pro-mark gray-mark r" v-show="item.status==60">已结清</span>
                                        <span class="pro-mark orange-mark r" v-show="item.status==40">还款中</span>
                                    </li>
                                    <li>
                                        <span class="icon icon_date"></span>
                                        <span>入块时间：</span><span>{{item.createTime | dateFormat}}</span>
                                    </li>
                                    <li>
                                        <span class="icon icon_title"></span>
                                        <span>标题：</span><span class="txt">{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="pro-detail">
                                <div class="pro-earnings">
                                    <p class="pro-txt red"><span v-text="item.rate"></span><i class="f30">%</i></p>
                                    <p class="g9">预期年化</p>
                                </div>
                                <div class="pro-deadline">
                                    <p class="pro-txt"><span v-text="item.period"></span><i class="f30">天</i></p>
                                    <p class="g9">项目期限</p>
                                </div>
                                <div class="pro-box">
                                    <svg width="100%" height="100%" viewBox="0 0 128 128">
                                        <!--这里viewBox也可以不设置-->
                                        <defs>
                                            <!--defs是definitions的缩写，linearGradient标签必须嵌套在<defs>内部-->
                                            <linearGradient id="svg_1" x1="0%" y1="0%" x2="100%" y2="64.9%">
                                                <!--linearGradient定义线性渐变-->
                                                <stop offset="100%" stop-color="blue"/>
                                            </linearGradient>
                                        </defs>
                                        <circle r="61" cx="64" cy="64" stroke-width="6" stroke="rgb(227, 228, 228)"
                                                fill="none" transform="rotate(-210,64 64)"></circle>
                                        <circle class="circle" r="61" cx="64" cy="64" stroke-width="6" stroke="#f92d2f"
                                                stroke-linecap="round" transform="rotate(-210,64 64)"
                                                :stroke-dasharray="[formateA(item) + ' 383']" fill="none"
                                                :stroke-opacity="stroke">
                                        </circle>
                                    </svg>
                                    <div class="pro-number">
                                        <p class="pre-num red f36 tc">{{fAmountProgress(item)}}<i class="f24">%</i></p>
                                        <p class="pre-txt g9">募集进度</p>
                                        <div class="bg-white mt5"></div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="sass" scoped>
    @import '../static/css/common.css'; /*项目列表  */

</style>
<script src="./project.js"></script>