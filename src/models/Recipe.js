import { LAST_DATE, LAST_UUID } from 'src/helpers/config'

export default class Recipe {
  constructor (api, logger) {
    if (Recipe.instance) return Recipe.instance
    this.api = api
    this.logger = logger
    this.lastDate = LAST_DATE
    this.uuid = LAST_UUID
    this.query = ''
    this.items = []
    Recipe.instance = this
  }

  setLastRecord (items) {
    if (items.length) {
      const { date_parent: lastDate = '', uuid = '' } = items[items.length - 1]
      this.lastDate = lastDate
      this.uuid = uuid
    } else {
      this.lastDate = LAST_DATE
      this.uuid = LAST_UUID
    }
  }

  async filter (query) {
    const { items } = await this.api.filter(query)
    this.logger.debug(`Загружена информация о ${items.length} рецептах`)
    this.setLastRecord(items)
    this.items = items
    return this.items
  }

  async next () {
    if (!this.items.length) return
    const { items } = await this.api.filter({
      query: this.query,
      lastDate: this.lastDate,
      uuid: this.uuid,
      next: true
    })
    this.logger.debug(`Загружен следующий блок информации о ${items.length} рецептах`)
    this.setLastRecord(items)
    this.items = [
      ...this.items,
      ...items
    ]
    return this.items
  }
}
