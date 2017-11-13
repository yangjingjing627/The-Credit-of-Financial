<template>
    <div id="app">
        <header class="top-fixed">
            <c-header></c-header>
        </header>
        <section class="body">
            <router-view></router-view>
        </section>
        <footer v-show="bShowFooter" class="bottom-fixed">
            <c-footer :routeName="routeName"></c-footer>
        </footer>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import header from './widget/header.vue';
    import footer from './widget/footer/footer.vue';

    export default {
        created(){
            var self = this;
            // setTimeout(function(){
            //     self.bShowWelcome = false;
            // },2000);
            // this.bPc = !this.fIsMobile();


        },
        data(){
            return {
                bShowWelcome: false,
                bPc: false,
                routeName: 'project',
                title: ''
            }
        },
        watch: {
            '$route.name': {
                handler: function (val) {
                    this.routeName = val;
                },
                immediate: true
            }
        },
        computed: {
            bShowFooter(){
                return this.routeName == 'home' || this.routeName == 'treasure' || this.routeName == 'wallet';
            }
        },
        methods: {
            fIsMobile(){
                return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }
        },
        components: {
            'c-header': header,
            'c-footer': footer
        }
    }
</script>
<style lang="sass" scoped>
    .top-fixed {
        top: 0;
        left: 0;
    }

    #app {
        height: 100%;
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        -webkit-box-orient: vertical;
    }

    .body {
        width: 100%;
        height: 100%;
        flex: 1;
        -webkit-flex: 1;
        -webkit-box-flex: 1;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>