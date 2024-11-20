import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Role from './Role'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id_user: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public token: string

  @column()
  public lastname: string

  @column()
  public age: number

  @column()
  public password: string

  @column()
  public active: boolean

  @column()
  public id_rol: number

  @belongsTo(() => Role, {
    foreignKey: 'id_rol',
  })
  public role: BelongsTo<typeof Role>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
