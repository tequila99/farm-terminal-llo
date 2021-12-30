import { LAST_DATE, LAST_UUID } from 'src/helpers/config'

export default class RecipeApi {
  constructor (transportApi) {
    if (RecipeApi.instance) return RecipeApi.instance
    this.transportApi = transportApi
    RecipeApi.instance = this
  }

  filter (query = '', lastDate = LAST_DATE, uuid = LAST_UUID, next = false) {
    return this.transportApi.fetch('/api/v2/llo/recipes/filter', { query, lastDate, uuid, next }, 'GET')
  }
}
