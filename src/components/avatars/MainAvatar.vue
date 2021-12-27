<template lang='pug'>
q-avatar.cursor-pointer(color='grey-5' size='xl')
  span(v-if='!avatar') {{ initials }}
  q-img(v-else :src='avatar' alt="")
  //- q-badge(color='red' text-color='white' floating) {{ messagesCount }}
  q-tooltip Профиль пользователя "{{ fullname }}"
</template>

<script>
export default {
  name: 'MainAvatar',
  computed: {
    initials () {
      return this.$user.user()?.initials || ''
    },
    avatar () {
      return this.$user.user()?.avatar || ''
    },
    fullname () {
      return this.$user.user()?.fullname || ''
    }
  }
}
</script>
