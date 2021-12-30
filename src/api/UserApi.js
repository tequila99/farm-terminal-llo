export default class UserApi {
  constructor (transportApi) {
    if (UserApi.instance) return UserApi.instance
    this.transportApi = transportApi
    UserApi.instance = this
  }

  setToken (token) {
    this.transportApi.token = token
  }

  signIn (username, password) {
    return this.transportApi.fetch('/api/v1/auth', { username, password }, 'POST', false)
  }

  getProfile () {
    return this.transportApi.fetch('/api/v1/auth/profile', {}, 'POST')
  }
}
