import { boot } from 'quasar/wrappers'
import Auth from 'src/models/Auth'
console.log(Auth)
const auth = new Auth()
console.log(auth)

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router }) => {
  auth.onAuthChangeStatus(async (event, session) => {
    if (event === 'SIGNED_IN') {
      return router.push({ path: '/' })
    }
    if (event === 'SIGNED_OUT') {
      return router.push({ path: '/login' })
    }
    if (event === 'USER_UPDATED') {
      // nothing
    }
  })
  router.beforeEach((to, from, next) => {
    const authRequired = to.matched.some(route => route.meta.authRequired)
    console.log(to.path, authRequired, auth.isLogin())
    if (authRequired && !auth.isLogin()) return next('/login')
    return next()
  })
  app.config.globalProperties.$auth = auth
  if (auth.isLogin()) router.push({ path: '/' })
  router.push({ path: '/login' })
})
