<template>
    <div class="cheader" v-show="show" :class="[classz]">
        <div @click="fLeftClick" class="left">
            <i v-show="bBack" class="icon_arrow"></i>
            <span v-text="backText" class="text"></span>
        </div>
        <div class="mid">
            <h2 v-text="midText" class="title"></h2>
            <slot></slot>
        </div>
        <div @click="fRightClick" class="right">
            <span :class="[rightIcon]">{{rightText}}</span>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'c-cHeader',
        data(){
            return {}
        },
        props: {
            show: {
                type: Boolean,
                default: true
            },
            bBack: {
                type: Boolean,
                default: false
            },
            backText: {
                type: String
            },
            midText: {
                type: String
            },
            leftPath: {
                type: String
            },
            rightText: {
                type: String
            },
            rightIcon: {
                type: String
            },
            rightPath: {
                type: String
            },
            classz: {
                type: String
            }
        },
        computed: {},
        methods: {
            fLeftClick(){
                // if(this.backPath.path){
                //     this.$router.push(this.backPath.path);
                // }
                if (this.leftPath) {
                    this.$router.push(this.leftPath);
                }
                else {
                    this.$router.go(-1);
                }
            },
            fRightClick(){
                if (this.rightPath) {
                    this.$router.push(this.rightPath);
                }
                this.$emit('rightClick')
            }
        }
    }
</script>
<style lang="sass" scoped>
    .cheader {
        background-color: #fff;
        height: 90px;
        line-height: 90px;
        display: flex;
        align-items: center;
        /* transform:rotate(0); */
        /* i,.iconfont{font-size:dpr(18px);}
        font-size:dpr(18px); */
    }

    .cheader .title {
        font-size: 36px;
        color: #555;
        text-align: center;
    }

    .cheader .icon_arrow {
        width: 95px;
        height: 90px;
        position: absolute;
        top: 0;
        left: 0;
        background: url(./images/icon_arrow_left.png) no-repeat center;
        background-size: 22px 40px;
    }

    .icon_arrow:active {
        background-color: #f1f1f1;
    }

    .left {
        text-align: left;
        font-size: dpr(16px);
    }

    .right {
        text-align: right;
    }

    .left, .right {
        width: 80px;
        overflow: hidden;
        word-wrap: break-word;
    }

    .mid {
        flex: 1;
        text-align: center;
    }

    .icon-tips-ta {
        background: url(./images/icon_sys.png) no-repeat center;
        background-size: 40px 37px;
        width: 40px;
        height: 37px;
        display: inline-block;
        margin-right: 30px;
        margin-top: 35px;
    }

    .icon_addBack {
        position: absolute;
        top: 0;
        right: 28px;
        font-size: 30px;
        color: #30A4FF;
    }
</style>