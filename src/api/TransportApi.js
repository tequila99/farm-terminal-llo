import { Loading } from 'quasar'

export default class TransportApi {
  constructor (baseUrl) {
    if (TransportApi.instance) return TransportApi.instance
    this.baseUrl = baseUrl || window.location.origin
    this.headers = {
      'content-type': 'application/json',
      accept: 'application/json'
    }
    TransportApi.instance = this
  }

  async fetch (url, body = {}, method = 'POST', needAuth = true) {
    if (needAuth && !this.token) throw new Error('Отсутствует токен авторизации. Запрос невозможен')
    let fullUrl = `${this.baseUrl}${url}`
    let options = {}
    if (method === 'GET' && Object.keys(body).length) {
      const search = new URLSearchParams(body)
      fullUrl = `${fullUrl}/?${search.toString()}`
    } else {
      options = {
        body: JSON.stringify(body)
      }
    }
    Loading.show()
    return fetch(fullUrl, {
      headers: needAuth ? { ...this.headers, Authorization: `Bearer ${this.token}` } : this.headers,
      method,
      ...options
    })
      .then(responce => {
        if (responce.status >= 200 && responce.status < 300) return responce
        const error = new Error(responce.statusText)
        error.responce = responce
        throw error
      })
      .then(responce => responce.json())
      .finally(() => Loading.hide())
  }
}
