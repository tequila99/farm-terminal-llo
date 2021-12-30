import { boot } from 'quasar/wrappers'
import TransportApi from 'src/api/TransportApi'
import Recipe from 'src/models/Recipe'
import RecipeApi from 'src/api/RecipeApi'
import Logger from 'src/helpers/Logger'
import Storage from 'src/helpers/Storage'
import { recipeSymbol } from 'src/api/dependency'

const api = new RecipeApi(new TransportApi())
const logger = new Logger()
const storage = new Storage()
const recipe = new Recipe(api, logger, storage)

export default boot(async ({ app, router }) => {
  app.provide(recipeSymbol, recipe)
})
