import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usage_refunds'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').unsigned().notNullable()
      table.integer('usage_id').unsigned().notNullable()
      table.integer('inventory_id').unsigned().notNullable()

      table.integer('quantity').notNullable()
      table.integer('quantity_before').notNullable()
      table.integer('quantity_after').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
