import { boot } from 'quasar/wrappers'
import User from 'src/models/User'
import UserApi from 'src/api/UserApi'
import Logger from 'src/helpers/Logger'
import Storage from 'src/helpers/Storage'
const api = new UserApi()
const logger = new Logger()
const storage = new Storage()
const user = new User(api, logger, storage)

export default boot(async ({ app, router }) => {
  user.onAuthChangeStatus(async (event, { username }) => {
    if (event === 'SIGNED_IN') {
      logger.debug(`Пользователь ${username} успешно вошел в программу`)
      await user.getProfile()
      return router.push({ path: '/' })
    }
    if (event === 'SIGNED_OUT') {
      logger.debug(`Пользователь ${username} успешно вышел в программу`)
      return router.push({ path: '/login' })
    }
    if (event === 'USER_UPDATED') {
      // nothing
    }
  })
  router.beforeEach((to, from, next) => {
    const authRequired = to.matched.some(route => route.meta.authRequired)
    if (authRequired && !user.isLogin()) return next('/login')
    return next()
  })
  const token = storage.getItem('token')
  if (token) {
    api.token = token
    await user.getProfile()
  }
  app.config.globalProperties.$user = user
  if (user.isLogin()) router.push({ path: '/' })
  router.push({ path: '/login' })
})
