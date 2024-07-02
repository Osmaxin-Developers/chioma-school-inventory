import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class UsagesInventory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare inventory_id: number

  @column()
  declare quantity: number

  @column()
  declare quantity_before: number

  @column()
  declare quantity_after: number

  @column()
  declare usage_price: number

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
