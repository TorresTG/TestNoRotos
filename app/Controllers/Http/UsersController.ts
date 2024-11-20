import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import jwt from 'jsonwebtoken';


export default class UsersController {

    private esquemaRegister = schema.create({
        email: schema.string([rules.required()]),
        name: schema.string([rules.required()]),
        lastname: schema.string([rules.required()]),
        age: schema.number([rules.required()]),
        password: schema.string([rules.required()]),
        active: schema.boolean([rules.required()]),
        id_rol: schema.number([rules.required()])
    })

    async register({ request, response }: HttpContextContract) {

        const data = await request.validate({ schema: this.esquemaRegister })
        await User.create(data)
        return response.json({
            message: "Registro a sido exitoso"
        })
    }

    private esquemaLogin = schema.create({
        email: schema.string([rules.required(),
        rules.exists({ table: 'users', column: 'email' })]),
        password: schema.string([rules.required()])
    })

    async login({ request, response }: HttpContextContract) {
        const data = await request.validate({ schema: this.esquemaLogin })
        const user = await User.query().where('email', data.email).first()

        if (!user) {
            return response.status(404).json({ message: 'Los datos ingresados no son correctos' })
        }

        const passwordIsValid = user.password === data.password
        if (!passwordIsValid) {
            return response.status(401).json({ message: 'Los datos ingresados no son correctos' })
        }

        const jwtSecret = 'recorden_votar_a_box_en_las_siguientes_elecciones_de_españa'
        const token = jwt.sign({ id_user: user.id_user, email: user.email }, jwtSecret, { expiresIn: '999h' })

        // Actualiza el token y el campo active a 1
        user.merge({ token, active: true })
        await user.save()

        return response.json({
            message: 'Inicio de sesión exitoso',
            token,
            user: user
        })
    }

    private esquemaGetUserInfo = schema.create({
        email: schema.string([rules.required(), rules.exists({ table: 'users', column: 'email' })]),
        password: schema.string([rules.required()])
    })

    public async getUserInfo({ request, response }: HttpContextContract) {

        const data = await request.validate({ schema: this.esquemaGetUserInfo })
        const { email, password } = data

        const user = await User.query().where('email', email).first()

        if (user) {
            if (user.password === password) {
                return response.json({
                    message: "Información del usuario obtenida exitosamente.",
                    usuario: user
                })
            } else {
                return response.unauthorized({ error: 'Contraseña incorrecta' })
            }
        } else {
            return response.notFound({ error: 'Usuario no encontrado' })
        }

    }

    public async datosDel7({ response }: HttpContextContract) {

        const user = await User.query()
        .where('id_user', 7).select('id_user', 'email', 'name', 'lastname', 'age', 'password', 'active', 'id_rol' ).first();

    return response.status(200).json({ user });
    }

    public async datoNoEsiste({ response, params }: HttpContextContract) {
        const user = await User.query().where('id_user', params.id).first();

        if (!user) {
            return response.status(404).json({ user: null });
        }
        return response.status(200).json({ user });
    }


    public async quantity({ response }: HttpContextContract) {

        let users = await User.query().select('id_user', 'name', 'email', 'token', 'lastname', 'age', 'password', 'active', 'id_rol')
        let count = users.length
        return response.status(200).json({ count })

    }

    public async borrarUsuarios({ response }: HttpContextContract) {

        await User.query().where('id_user', 1).delete();
        await User.query().where('id_user', 2).delete();
    
        let users = await User.query().select('id_user', 'name', 'email', 'token', 'lastname', 'age', 'password', 'active', 'id_rol')
        let count = users.length
    
        return response.status(200).json({ count })
    
    }

    public async actualizarNombre({ response }: HttpContextContract) {

        const id = 3;
        const nombre = "juan";
    
        await User.query().where('id_user', id).update({ name: nombre });
    
        return response.status(200).json({ message: 'Nombre actualizado con éxito' });
    
    }


    
}
