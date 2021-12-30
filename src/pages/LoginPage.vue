<template lang='pug'>
.column.q-mx-auto.q-mt-xl.q-gutter-y-lg.q-px-xl(style='width:100%;max-width:560px;')
  h3.text-primary.q-mx-auto Квазар.Аптека
  UserName(
    v-model='username'
    ref='user-input'
    @keyup.enter='$refs["password-input"].focus()'
    )
  UserPassword(
    v-model='password'
    ref='password-input'
    @keyup.enter='handleLogin'
    )
  LoginButton(
    @click='handleLogin'
    ref='login-button'
    )
</template>

<script>
import UserName from 'components/inputs/UserName.vue'
import UserPassword from 'components/inputs/UserPassword.vue'
import LoginButton from 'components/buttons/LoginButton.vue'
import { userSymbol } from 'src/api/dependency'
export default {
  name: 'LoginPage',
  inject: {
    user: userSymbol
  },
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
  methods: {
    handleLogin () {
      this.user.signIn(this.username, this.password)
    }
  },
  mounted () {
    this.username = this.user.username()
    this.$refs['user-input'].focus()
  },
  components: {
    UserName, UserPassword, LoginButton
  }
}
</script>
