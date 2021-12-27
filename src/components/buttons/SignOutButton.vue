<template lang='pug'>
q-btn(flat round @click='handleSignOut')
  CloseIcon
</template>

<script>
import CloseIcon from 'components/icons/CloseIcon.vue'
export default {
  name: 'SignOutButton',
  methods: {
    handleSignOut () {
      this.$q.dialog({
        title: 'Подтвердите действие',
        message: 'Вы действтительно хотиете выйти из программы?',
        ok: {
          label: 'Да'
        },
        cancel: {
          label: 'Нет'
        },
        persistent: true
      }).onOk(() => {
        this.$user.signOut()
      })
    }
  },
  components: {
    CloseIcon
  }
}
</script>
