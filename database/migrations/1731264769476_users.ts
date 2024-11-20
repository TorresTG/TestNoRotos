import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_user')
      table.string('email').unique().notNullable()
      table.string('token').nullable()
      table.string('name').notNullable()
      table.string('lastname').notNullable()
      table.integer('age').notNullable()
      table.string('password').notNullable()
      table.boolean('active').nullable().defaultTo(false)
      table.integer('id_rol').unsigned().references('id_rol').inTable('roles').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
