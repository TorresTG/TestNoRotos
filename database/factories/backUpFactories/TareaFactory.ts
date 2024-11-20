import Tarea from 'App/backUpModels/Tarea'
import Factory from '@ioc:Adonis/Lucid/Factory'

import ProyectoFactory from './ProyectoFactory'


export default Factory
  .define(Tarea, async ({ faker }) => {
    return {
      nombre: faker.hacker.phrase(),
      estudiante: faker.person.fullName(),
      id_proyecto: (await ProyectoFactory.create()).id_proyecto,
    }

  }).build()
