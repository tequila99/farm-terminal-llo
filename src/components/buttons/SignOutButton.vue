<template lang='pug'>
q-btn(flat round @click='handleSignOut')
  SignOutIcon
  q-tooltip Выход из программы
</template>

<script>
import SignOutIcon from 'components/icons/SignOutIcon.vue'
import { userSymbol } from 'src/api/dependency'
export default {
  name: 'SignOutButton',
  inject: {
    user: userSymbol
  },
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
        this.user.signOut()
      })
    }
  },
  components: {
    SignOutIcon
  }
}
</script>
