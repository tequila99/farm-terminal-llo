<template lang='pug'>
.column.q-mx-auto.q-mt-xl.q-gutter-y-lg.q-px-xl(style='width:100%;max-width:560px;')
  h3.text-primary.q-mx-auto Квазар.Аптека
  UserName(v-model='username')
  UserPassword(v-model='password')
  LoginButton(@click='handleLogin')
</template>

<script>
import UserName from 'components/inputs/UserName.vue'
import UserPassword from 'components/inputs/UserPassword.vue'
import LoginButton from 'components/buttons/LoginButton.vue'
export default {
  name: 'LoginPage',
  props: {},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  watch: {
    username (val) {
      if (!val) this.password = ''
    }
  },
  computed: {},
  methods: {
    handleLogin () {
      this.$auth.signIn(this.username, this.password)
    }
  },
  mounted () {
    this.username = this.$auth.username()
  },
  components: {
    UserName, UserPassword, LoginButton
  }
}
</script>
