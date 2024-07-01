import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('cuid').unique().notNullable()
      table.integer('role_id').unsigned().notNullable()
      table.integer('user_id').unsigned().notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.foreign('role_id').references('id').inTable('roles').onDelete('CASCADE')
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
