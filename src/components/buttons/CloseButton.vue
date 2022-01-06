<template lang='pug'>
q-btn(flat round @click='handleClose')
  CloseIcon
  slot(name='default')
</template>

<script>
import CloseIcon from 'components/icons/CloseIcon.vue'
export default {
  name: 'CloseButton',
  components: { CloseIcon },
  methods: {
    handleClose () {
      this.$router.back()
    }
  }
}
</script>
