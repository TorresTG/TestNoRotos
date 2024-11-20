import { test } from '@japa/runner'
import Proyecto from 'App/backUpModels/Proyecto';
import Tarea from 'App/backUpModels/Tarea';

test.group('POST requests', () => {
  test('Verificar que se puede mostrar todos los campos del proyecto', async ({ client }) => {
    const response = await client.post('/proyecto')

    const data = response.body()
    console.log(data)

    let proyecto = await Proyecto.find(3)
    response.assertStatus(200)
    response.assertBodyContains({
      tablas: [{ nombre: proyecto?.nombre }]
    })
  })

  test('Verificar que se puede mostrar todos los campos de las tareas', async ({ client, assert }) => {
    const response = await client.post('/tarea')

    const data = response.body()
    const TareaTabla = data

    response.assertStatus(200)
    assert.isNotEmpty(TareaTabla);
  })

  test('proyectos: verificar que cierta tarea tiene almenos uno de estos responsables designados', async ({ client, assert }) => {
    const response = await client.post('/tareasrelacion')

    const data = response.body()
    const hayEncargado = data.tablas?.some(f => f.proyecto.id_proyecto === 5) ?? false

    response.assertStatus(200)
    assert.isTrue(hayEncargado);
  })

  test('tareas: verificar que un estudiante tenga almenos uno de los proyectos designados', async ({ client, assert }) => {
    const response = await client.post('/proyectorelacion')

    const data = response.body()

    const hayEstudiante = data.tablas?.some((proyecto: any) =>
      proyecto.tareas.some((tarea: any) => tarea.id_tarea === 2)
    ) ?? false;

    response.assertStatus(200)
    assert.isTrue(hayEstudiante);
  })

  test('Proyecto: ver nombre de un proyecto especifico ', async ({ client }) => {
    const response = await client.post('/proyecto/4')

    const proyecto = await Proyecto.find(4)
    response.assertStatus(200)
    response.assertBodyContains({
      tablas: { nombre: proyecto?.nombre }
    })
  })

  test('Tarea: ver a el estudiante de cierta tarea', async ({ client }) => {
    const response = await client.post('/tarea/3')

    const tarea = await Tarea.find(3)
    response.assertStatus(200)
    response.assertBodyContains({
      tablas: { estudiante: tarea?.estudiante }
    })
  })
});
