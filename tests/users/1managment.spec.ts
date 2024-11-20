import { test } from '@japa/runner'

test.group('POST usuario login, register y show', () => {
    test('Verificar la creacion del usuario', async ({ client }) => {
        const response = await client.post('/register').json({
            email: "pepe@example.com",
            name: "pepe",
            lastname: "delegado",
            age: 25,
            password: "ola",
            active: true,
            id_rol: 2
        });

        response.assertStatus(200)
        response.assertBodyContains({message: "Registro a sido exitoso"})

    })

    test('Verificar el logeo correcto del usuario', async ({ client }) => {
        const response = await client.post('/login').json({
            email: "pepe@example.com",
            password: "ola"
        });

        response.assertStatus(200)
        response.assertBodyContains({message: "Inicio de sesión exitoso"})
    })

    test('Verificar el logeo incorrecto del usuario', async ({ client }) => {
        const response = await client.post('/login').json({
            email: "pepe@example.com",
            password: "dios_esta_muerto_y_nostros_lo_hemos_matado"
        });

        response.assertStatus(401)
        response.assertBodyContains({message: "Los datos ingresados no son correctos"})
    })

    test('Verificar ver la info del usuario', async ({ client }) => {
        const response = await client.post('/obtenerInfo').json({
            email: "pepe@example.com",
            password: "ola"
        });

        response.assertStatus(200)
        response.assertBodyContains({ message: "Información del usuario obtenida exitosamente." })
    })

});