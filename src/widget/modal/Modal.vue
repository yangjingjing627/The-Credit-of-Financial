<template>
  <div v-if="mutableShow">
    <overlay :show="mutableShow" :click="overlayClick"></overlay>
    <transition name="modal">
      <div class="modal" v-if="mutableShow" @touchmove="touchmove">
        <div class="modal-inner">
          <div class="modal-title">
            <slot name="title">Confirm</slot>
          </div>
          <div class="modal-text">
            <slot name="content"></slot>
          </div>
        </div>
        <slot name="buttons">
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Overlay from '../overlay/overlay.vue'

export default {
  name:'modal',
  watch:{
    show:function(val){
      this.mutableShow = val;
    }
    // show:{
    //   immediate:true,
    //   handler:function(val){
    //      console.log('show ' + val)
    //      this.mutableShow = val;
    //   }
    // }
  },
  components: {
    Overlay
  },
  props: {
    show: { // init status
      type: Boolean,
      default: false
    },
    overlayClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mutableShow: this.show
    }
  },
  methods: {
    open () {
      this.mutableShow = true
      this.$emit('open', this)
    },
    close () {
      this.mutableShow = false
      this.$emit('close', this)
    },
    overlayClick () {
      if(this.overlayClose){
        this.mutableShow = false
      }
    },
    touchmove(e){
      e.preventDefault();
    }
  }
}
</script>

<style lang="sass">
  @import 'modal.scss';
</style>
