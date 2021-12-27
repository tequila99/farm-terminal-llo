import { boot } from 'quasar/wrappers'
import Logger from 'src/helpers/Logger'
const logger = new Logger()

export default boot(async ({ app, router }) => {
  router.beforeEach((to, from, next) => {
    logger.debug(`Переход в приложении с ${from.fullPath} на ${to.fullPath}`)
    return next()
  })
  app.config.globalProperties.$log = logger
})
