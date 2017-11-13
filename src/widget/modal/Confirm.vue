<template>
  <modal :show='show' ref="modal">
    <div slot="title" v-html="title"></div>
    <div slot="content" v-html="content"></div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button modal-button-cancel" v-on:click="_onCancel()">{{cancelText}}</span>
      <span class="modal-button" @click="_onOk()">{{okText}}</span>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name:'confirm',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'confirm'
    },
    content: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '我知道了'
    },
    onOk: {
      type: Function
    },
    onCancel: {
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
    _onOk () {
      if (this.onOk) {
        this.onOk()
      }
      this.close()
    },
    _onCancel () {
      if (this.onCancel) {
        this.onCancel()
      }
      this.close()
    }
  }
}
</script>
