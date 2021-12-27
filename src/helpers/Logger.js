import { Notify } from 'quasar'

export default class Logger {
  constructor () {
    if (Logger.instance) return Logger.instance
    Logger.instance = this
  }

  info (msg) {
    console.info(`[INFO] ${msg}`)
  }

  error (msg) {
    console.error(`[ERROR] ${msg}`)
    Notify.create({
      type: 'negative',
      message: 'Произошла ошибка при попытке выполнения операции',
      caption: msg,
      position: 'bottom-right',
      icon: 'error'
    })
  }

  warn (msg) {
    console.warn(`[WARN] ${msg}`)
  }

  debug (msg) {
    console.info(`[DEBUG] ${msg}`)
  }
}
