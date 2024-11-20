import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Tarea from './Tarea'

export default class Proyecto extends BaseModel {
  @column({ isPrimary: true })
  public id_proyecto: number

  @column()
  public nombre: string

  @column() 
  public responsable: string

  @hasMany(() => Tarea, {
    foreignKey: 'id_proyecto', // Relación de llave foránea en Tarea
  })
  public tareas: HasMany<typeof Tarea>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
