export default class Auth {
  constructor (prefix = 'farm-terminal-llo', storage = localStorage) {
    if (Auth.instance) return Auth.instance
    this.prefix = prefix
    // this.api = api
    this.subscribes = []
    this._user = null
    this.storage = storage
    this._username = storage.getItem(`${prefix}-username`) || ''
    Auth.instance = this
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
    return !!this._user
  }

  signIn (username, password) {
    if (!username || !password) throw Error('не заданы имя пользователя или пароль')
    this._username = username
    this.storage.setItem(`${this.prefix}-username`, username)
    this._user = true
    this.subscribes.forEach(el => el('SIGNED_IN', { username, password }))
  }

  signOut () {
    this._user = null
    this.subscribes.forEach(el => el('SIGNED_OUT', null))
  }
}
