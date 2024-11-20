import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Proyecto from './Proyecto'

export default class Tarea extends BaseModel {
  @column({ isPrimary: true })
  public id_tarea: number

  @column()
  public nombre: string

  @column()
  public estudiante: string

  @column()
  public id_proyecto: number // Llave foránea para Proyecto

  @belongsTo(() => Proyecto, {
    foreignKey: 'id_proyecto'
  })
  public proyecto: BelongsTo<typeof Proyecto> // Define la relación con Proyecto

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
