export default class Api {
  constructor (baseUrl) {
    if (Api.instance) return Api.instance
    this.baseUrl = baseUrl || window.location.origin
    this.headers = {
      'content-type': 'application/json',
      accept: 'application/json'
    }
    Api.instance = this
  }

  async fetch (url, body = {}, method = 'POST', needAuth = true) {
    if (needAuth && !this.token) throw new Error('Отсутствует токен авторизации. Запрос невозможен')
    return fetch(`${this.baseUrl}${url}`, {
      headers: needAuth ? { ...this.headers, Authorization: `Bearer ${this.token}` } : this.headers,
      method,
      body: JSON.stringify(body)
    })
      .then(responce => {
        if (responce.status >= 200 && responce.status < 300) return responce
        const error = new Error(responce.statusText)
        error.responce = responce
        throw error
      })
      .then(responce => responce.json())
  }
}
