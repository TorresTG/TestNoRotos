import Proyecto from 'App/backUpModels/Proyecto'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Proyecto, async ({ faker }) => {
  return {
    nombre: faker.commerce.productName(),
    responsable: faker.name.fullName(),
  }
}).build()
