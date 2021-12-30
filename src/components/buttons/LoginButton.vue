<template lang='pug'>
CommonButton
  LoginIcon.q-mr-lg
  |Войти в систему
  q-tooltip Нажмите чтобы войти в систему
</template>

<script>
import CommonButton from 'components/buttons/CommonButton.vue'
import LoginIcon from 'components/icons/LoginIcon.vue'
export default {
  name: 'LoginButton',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },
  components: { CommonButton, LoginIcon }
}
</script>
