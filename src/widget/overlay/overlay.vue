<template lang="html">
  <transition name="overlay">
    <div :id="id" :style="{zIndex:zIndex}" :class="'overlay ' + (transparent ? 'transparent' : '')" v-show="show" @click="fClick">
      <div class="inner" v-bind:style="{ opacity: opacity }"></div>
    </div>
  </transition> 
</template>

<script>
export default {
  created(){
    
  },
  mounted(){
    
  },
  destroyed(){
    this.fRemoveLock();      
  },
  watch:{
    show:{
      immediate:false,
      handler(val){
        if(val){
          this.fAddLock();
          if(this.onOpen){
            this.onOpen();
          }
        }
        else{
          this.fRemoveLock();
          if(this.onClose){
            this.onClose();
          }      
        }
      }
    }
  },
  methods:{
    fTouchmove(e){
      e.preventDefault();      
    },
    fClick(){
      if(this.click){
        this.click();
      }
    },
    fAddLock(){
      this.$nextTick(() => {
        this.$el.addEventListener('touchmove',this.fTouchmove)
      });
      if(this.lockBody){
        document.body.classList.add('overlay-lock');
      }
    },
    fRemoveLock(){
      this.$el.removeEventListener('touchmove',this.fTouchmove)
      document.body.classList.remove('overlay-lock');      
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    id:{
      type:String,
      default:'',
    },
    click: {
      type: Function,
      default: undefined
    },
    zIndex:{
      type:Number,
      default:999
    },
    lockBody:{
      type:Boolean,
      default:true
    },
    transparent: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Number,
      default: 1
    },
    onOpen: {
      type: Function
    },
    onClose: {
      type: Function
    }
  }
}
</script>

<style lang="sass" scoped>
  .overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    transition: opacity .3s;
    opacity: 1;

    .inner {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .6);
      
    }
    &.transparent .inner {
      background-color: transparent;
    }

    &.overlay-enter,
    &.overlay-leave-active {
      opacity: 0;
    }
  }
</style>
<style>
  .overlay-lock{
    position:fixed;
    width:100%;
    height:100%;
  }
</style>
