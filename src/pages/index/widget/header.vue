<template>
    <div class="header">
        <c-cHeader @rightClick="fRightClick" ref="cHeader" :classz="header.classz" :show="header.show"
                   :bBack="header.back" :leftPath="header.leftPath"
                   :midText="header.midText" :rightIcon="header.rightIcon" :rightPath="header.rightPath"
                   :rightText="header.rightText">
        </c-cHeader>
    </div>
</template>
<script>
    import cHeader from './cHeader.vue';
    import {mapActions} from 'vuex';

    export default {
        name: 'c-header',
        mounted(){
            var self = this;
            // if(this.$route.path == '/weixin'){
            //     this.$refs.cHeader.$on('rightClick',function(){
            //         self.bMenuClose = !self.bMenuClose;
            //     })
            // }
        },
        data(){
            return {
                header: {}
            }
        },
        watch: {
            '$route': {
                handler: function () {
                    const meta = this.$route.meta;
                    this.header = meta || {};
                },
                immediate: true
            }
        },
        methods: {
            ...mapActions({
                fSetRightClick: 'fSetRightClick'
            }),
            fRightClick(){
                this.fSetRightClick({rightClick: +new Date()});
            }
        },
        components: {
            'c-cHeader': cHeader
        }
    }
</script>
<style scoped>

</style>