import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import UsagesInventory from './usages_inventory.js'
import UsageRefund from './usage_refund.js'

export default class Usage extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare receiver_name?: string

  @column()
  declare receiver_location?: string

  @column()
  declare description?: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @hasMany(() => UsagesInventory)
  declare usagesInventories: HasMany<typeof UsagesInventory>

  @hasMany(() => UsageRefund)
  declare usagesRefunds: HasMany<typeof UsageRefund>

  @column()
  declare inventories_count: number

  @column()
  declare total_price: number

  @column()
  declare inventories_quantity: number
}
