<template>
  <modal :show='show' ref="modal">
    <div slot="title" v-html="title"></div>
    <div slot="content" v-html="content"></div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button" @click="_onClick()">{{okText}}</span>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name:'alert',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    onOk: {
      type: Function
    }
  },
  components: {
    Modal
  },
  methods: {
    open () {
      this.$refs.modal.open()
      this.$emit('open', this)
    },
    close () {
      this.$refs.modal.close()
      this.$emit('close', this)
    },
    _onClick () {
      if (this.onOk) {
        this.onOk()
      }
      this.close()
    }
  }
}
</script>
