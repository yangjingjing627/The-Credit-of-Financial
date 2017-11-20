<template>
    <div class="wrapper">
        <div class="head">
            <input type="text" name="search" class="inpSearch" placeholder="搜索"/>
            <span class="icon_remind"><i class="news"></i></span>
        </div>

        <!-- 精选理财 -->
        <div class="box">
            <div class="bg-white">
                <div class="hd fix border-bottom-1">
                    <router-link to="project" class="more r">更多</router-link>
                    <h3 class="title"><i class="icon_recommend"></i>为您推荐精选理财</h3>
                </div>
            </div>
            <div class="bd prolist">
                <router-link to="projectDetail" class="proLink fix mb20 bg-white">
                    <div class="pro-title">
                        <ul class="fix">
                            <li>
                                <router-link to="moreDetail" class="g6">
                                  <span class="g2 f28">个人精选借贷 |</span><span class="g2 f24">&nbsp;好贷宝</span>
                                  <span class="pro-mark r">发售中</span>
                                </router-link>
                            </li>
                            <li class="f24 g9">
                                <span>入块高度：</span><span>9527/</span><span>入块时间：</span><span>2017-08-19</span>
                            </li>

                        </ul>
                    </div>
                    <div class="pro-detail">
                        <div class="pro-earnings">
                            <p class="pro-txt red">9.56<i class="f30">%</i></p>
                            <p class="g9">预期年化</p>
                        </div>
                        <div class="pro-deadline">
                            <p class="pro-txt"><span class="red">3</span><i class="f28 le">天</i></p>
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
                                <circle r="61" cx="64" cy="64" stroke-width="6" stroke="rgb(227, 228, 228)" fill="none"
                                        transform="rotate(-210,64 64)"></circle>
                                <circle class="circle" r="61" cx="64" cy="64" stroke-width="6" stroke="#f92d2f"
                                        stroke-linecap="round" transform="rotate(-210,64 64)"
                                        :stroke-dasharray="200" fill="none" :stroke-opacity="stroke">
                                </circle>
                            </svg>
                            <div class="pro-number">
                                <p class="pre-num red f36 tc">80<i class="f24">%</i></p>
                                <p class="pre-txt g9">募集进度</p>
                                <div class="bg-white mt5"></div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- 商户借款 -->
        <div class="box mt10">
            <div class="bg-white">
                <div class="hd">
                    <h3 class="title"><i class="icon_borrowing"></i>为您缓解资金压力</h3>
                </div>
                <router-link to="lucky" class="bd">
                    <img src="./images/t_banner.png" width="100%"/>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import '../static/css/common.css'; /*项目列表  */

    .head {
        background: url(images/t_bg_head.png) no-repeat;
        height: 420px;
        width: 100%;
        background-size: 100%;
        padding: 42px 20px 40px 30px;
    }
    .le{padding-left: 4px;}
    .inpSearch {
        background: #fff url(./../static/images/icon_search.png) no-repeat 30px center;
        background-size: 26px 26px;
        border-radius: 100px;
        width: 618px;
        height: 56px;
        line-height: 56px;
        font-size: 28px;
        padding-left: 75px;
        margin-right: 12px;
    }

    .icon_remind {
        background: url(images/icon_remind.png) no-repeat center;
        width: 45px;
        height: 55px;
        background-size: 100%;
        display: inline-block;
        position: relative;
        top: 14px;
    }

    .icon_remind .news {
        background: #FC4141;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        display: inline-block;
        position: absolute;
        top: 2px;
        left: 26px;
    }
    .pro-mark{background-color: #FBAB4A;font-size: 20px;}
    ::-webkit-input-placeholder { /* WebKit browsers */
        color: #ccc;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #ccc;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #ccc;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color: #ccc;
    }

    .border-bottom-1 {
        border-bottom: 1px solid #eee;
    }

    .box .hd {
        padding: 35px 0 15px 0;
        margin: 0 30px;
    }

    .box .hd .icon_recommend {
        background: url(images/icon_recommend.png) no-repeat;
        width: 26px;
        height: 26px;
        background-size: 100%;
        display: inline-block;
        position: relative;
        top: 1px;
        margin-right: 15px;
    }

    .box .hd .title {
        font-size: 30px;
    }

    .box .hd .more {
        font-size: 28px;
        color: #666666;
        background: url(images/right_arrow.png) no-repeat right center;
        padding-right: 30px;
        background-size: 26px 26px;
    }

    .box .hd .icon_borrowing {
        background: url(images/icon_borrowing.png) no-repeat;
        width: 21px;
        height: 23px;
        background-size: 100%;
        display: inline-block;
        position: relative;
        top: 0px;
        margin-right: 15px;
    }
    .pro-deadline{
        border-right: 1px solid #eee;
    }
    .pro-box{
        margin-left:40px;
    }
    .prolist .pro-title li {
      width: 100%;
    }
    .prolist .pro-title li span {
      font-weight: 300;
    }
    .g2 {
      color: #222;
    }
    .prolist .pro-title {
      padding:20px 0px;
      margin:0px 28px;
    }
</style>
<script src="./treasure.js"></script>
