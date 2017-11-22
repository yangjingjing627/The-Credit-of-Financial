<template>
    <div class="footer">
        <router-link :class="{'active':sNavActiveName==item.name}" v-for="item in aNav" :key="'nav' + item"
                     :to="{name:item.name}">
            <div @click="fNavClick(item)" class="inner">
                <i class="icon" :class="[item.icon]"></i>
                <p class="mt5" v-text="item.text"></p>
            </div>
        </router-link>
    </div>
</template>
<script>
    import Vue from "vue";

    export default {
        name: 'c-footer',
        className: 'footer',
        props: {
            routeName: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
                aNav: [
                    {
                        name: 'home',
                        icon: 'icon_home',
                        text: '首页'
                    },
                    {
                        name: 'treasure',
                        icon: 'icon_treasure',
                        text: '财富'
                    },
                    {
                        name: 'wallet',
                        icon: 'icon_my',
                        text: '我的'
                    }
                ],
                sNavActiveName: this.routeName
            }
        },
        watch: {
            routeName: {
                handler(val){
                    this.sNavActiveName = val;
                },
                immediate: true
            }
        },
        computed: {},
        methods: {
            fNavClick(item){
                this.sNavActiveName = item.name;
            }
        }
    }
</script>
<style lang="sass" scoped>
    .footer {
        width: 100%;
        height: 100%;
        text-align: center;
        color: #5D656B;
        background-color: #fff;
        border-top: 1px solid #E7E7E7;
        font-size: 24px;

    a:link, a:visited, a:hover, a:active {
        color: #929292
    }

    a {
        display: inline-block;
        width: 33.3%;
        text-decoration: none;
        cursor: pointer;
        padding-top: 16px;
        padding-bottom: 16px;
    }

    a.active {
        color: #F56767;

    .icon_home {
        background-image: url('./images/home_active.png');
    }

    .icon_treasure {
        background-image: url('./images/treasure_active.png');
    }

    .icon_my {
        background-image: url('./images/my_active.png');
    }

    }
    .icon_home {
        background-image: url('./images/home.png');
        height: 36px;
        width: 33px;

    &
    .active {
        background-image: url('./images/home_active.png');
    }

    }
    .icon_treasure {
        background-image: url('./images/treasure.png');
        height: 36px;
        width: 31px;

    &
    .active {
        background-image: url('./images/treasure_active.png')
    }

    }
    .icon_my {
        background-image: url('./images/my.png');
        height: 36px;
        width: 31px;

    &
    .active {
        background-image: url('./images/my_active.png')
    }

    }
    }
</style>
