import Api from './Api'

export default class UserApi extends Api {
  constructor () {
    super()
    if (UserApi.instance) return UserApi.instance
    UserApi.instance = this
  }

  signIn (username, password) {
    return this.fetch('/api/v1/auth', { username, password }, 'POST', false)
  }

  getProfile () {
    return this.fetch('/api/v1/auth/profile', {}, 'POST')
  }
}
