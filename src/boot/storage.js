import { boot } from 'quasar/wrappers'
import Storage from 'src/helpers/Storage'
import { storageSymbol } from 'src/api/dependency'

export default boot(async ({ app }) => {
  app.provide(storageSymbol, new Storage())
})
