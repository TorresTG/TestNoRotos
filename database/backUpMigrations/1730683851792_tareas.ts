import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tareas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_tarea')
      table
        .integer('id_proyecto')
        .unsigned()
        .references('id_proyecto')
        .inTable('proyectos')
        .onDelete('CASCADE')
      table.string('nombre').notNullable()
      table.string('estudiante').notNullable()      
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
