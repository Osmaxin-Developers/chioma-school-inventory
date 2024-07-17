import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Inventory from './inventory.js'

export default class UsageRefund extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare usage_id: number


  @column()
  declare user_id: number

  @column()
  declare inventory_id: number

  @column()
  declare quantity: number

  @column()
  declare quantity_before: number

  @column()
  declare quantity_after: number

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @belongsTo(() => Inventory)
  declare inventory: BelongsTo<typeof Inventory>
}
