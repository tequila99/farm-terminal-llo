export default class User {
  constructor (api = null, logger = console, storage = localStorage) {
    if (User.instance) return User.instance
    this.api = api
    this.logger = logger
    this.storage = storage
    this.subscribes = []
    this._user = null
    this._username = storage.getItem('username')
    this.api.token = storage.getItem('token')
    User.instance = this
  }

  onAuthChangeStatus (callback) {
    if (this.subscribes.includes(callback)) return
    this.subscribes.push(callback)
  }

  user () {
    return this._user
  }

  username () {
    return this._username
  }

  isLogin () {
    return !!this._user?.id
  }

  async signIn (username, password) {
    try {
      if (!username || !password) throw Error('Не заданы имя пользователя или пароль')
      this.logger.debug(`Попытка входа в программу пользователя ${username}`)
      this._username = username
      this.storage.setItem('username', username)
      const { token } = await this.api.signIn(username, password)
      this.storage.setItem('token', token)
      this.api.token = token
      this.subscribes.forEach(el => el('SIGNED_IN', { username }))
    } catch (error) {
      this.logger.error(error.message)
    }
  }

  async getProfile () {
    try {
      this.logger.debug(`Попытка загрузить профиль пользователя ${this._username}`)
      const { profile } = await this.api.getProfile()
      this._user = profile
    } catch (error) {
      this.logger.error(error.message)
    }
  }

  signOut () {
    this.logger.debug(`Выполняется выход из программы пользователя "${this._username}"`)
    this._user = null
    this.api.token = null
    this.storage.removeItem('token')
    this.subscribes.forEach(el => el('SIGNED_OUT', { username: this._username }))
  }
}
