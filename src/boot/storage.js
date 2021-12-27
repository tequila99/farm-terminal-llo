import { boot } from 'quasar/wrappers'
import Storage from 'src/helpers/Storage'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.config.globalProperties.$storage = new Storage() // something to do
})
