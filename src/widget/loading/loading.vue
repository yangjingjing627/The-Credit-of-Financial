<template lang="html">
   <div :id="id" ref="loading" :class="{'c-hidden': !bShow}" :style="loadingStyle" class="c-loading">
        <div ref="inner" class="c-loading-inner" :style="innerStyle"></div>
   </div>
</template>

<script>
export default {
    name: 'c-loading',
    data(){
        return {
            loadingStyle:{},
            innerStyle:{}
        }
    },
    props: {
        id:{
            type:String
        },
        bShow: {
            type:Boolean,
            default:false
        },
        section: {
            type: String
        }
    },
    watch:{
        section:{
            handler:function(val) {
                if(val){
                    this.$nextTick(() => {
                        const size = document.querySelector(val).getBoundingClientRect();
                        const height = size.height;
                        this.loadingStyle = {
                            position:'absolute',
                            top:Math.round(size.top + height/2) + 'px',
                            left:Math.round(size.left + size.width/2) + 'px',
                            width:Math.round(height * 0.3) + 'px',
                            height:Math.round(height * 0.3) + 'px'
                        }
                        this.innerStyle = {
                            margin:Math.round(height * 0.05) + 'px',
                            width:Math.round(height * 0.2) + 'px',
                            height:Math.round(height * 0.2) + 'px'
                        }
                    })
                }
            },
            immediate:true
        }
    }
}
</script>

<style lang="sass" scoped>
$height:140px;
$width:140px;
.c-loading {
    position: fixed;
    top: 50%;
    left: 50%;
    width: $width;
    height: $height;
    /* background-color: #000;
    opacity: .7; */
    border-radius: 4px;
    transform: translate(-50%,-50%);
    z-index: 99999;
    text-align:center;
}

.c-loading-inner {
    width: 84px;
    height: 84px;
    animation: loading-rot 1s linear infinite;
    -webkit-animation: loading-rotate 1s linear infinite;
    display: inline-block;
    margin: 30px auto 0;
    border-radius: 50%;
    border:8px solid #FF8200;
    border-top: 8px solid #343434;
}

.c-loading-inner:after {
    content: '';
    position: absolute;
    top: 0;
    border-radius: 50%;
    width: 84px;
    height: 84px;
}

.c-hidden {
    display: none;
}

@keyframes loading-rotate {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
}

@-webkit-keyframes loading-rotate {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
}
</style>