<template>
  <modal :show='show' ref="modal">
    <div slot="title" v-html="title"></div>
    <div slot="content" v-html="content"></div>
  </modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name:'box',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Box'
    },
    content: {
      type: String,
      default: ''
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
    }
  }
}
</script>
<style lang="sass" scoped>
  .modal-inner{border-radius:.35rem;}
</style>
