import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Proyecto from 'App/backUpModels/Proyecto'
import Tarea from 'App/backUpModels/Tarea'

export default class DBisraelsController {
    public async verProyectos({ response }: HttpContextContract) {

        const tablas = await Proyecto.all()
        return response.json({ tablas })

    }

    public async verTareas({ response }: HttpContextContract) {

        const tablas = await Tarea.all()
        return response.json({ tablas })

    }

    public async verUnProyecto({ response, params }: HttpContextContract) {

        const tablas = await Proyecto.query().where('id_proyecto', params.id).first()
        return response.status(200).json({ tablas })

    }

    public async verUnArtist({ response, params }: HttpContextContract) {

        const tablas = await Tarea.query().where('id_tarea', params.id).first()
        return response.status(200).json({ tablas })

    }

    public async verRelacionProyecto({ response }: HttpContextContract) {

        const tablas = await Tarea.query().preload('proyecto')
        return response.status(200).json({ tablas })
    }

    public async verRelacionTarea({ response }: HttpContextContract) {

        const tablas = await Proyecto.query().preload('tareas')
        return response.status(200).json({ tablas })

    }

    
}
