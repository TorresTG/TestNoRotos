import { test } from '@japa/runner'

test.group('POST usuario login, register y show', () => {
    test('Verificar datos del señor 7 ', async ({ client }) => {
        const response = await client.post('/siete')

        response.assertStatus(200)
        response.assertBodyContains({
            user: {
                id_user: 7,
                email: "maldito.comunismo@example.com",
                name: "Maldito",
                lastname: "Comunismo",
                age: 32,
                password: "password123",
                active: 1,
                id_rol: 1,
            }
        })
    })


    test('que devuelva nullo cuando no encuentre nada', async ({ client }) => {
        const response = await client.post('/nullo/120')

        response.assertStatus(404)
        response.assertBodyContains({
            user: null
        })
    })


    test('cantidad de usuarios en la bd sea la correcta', async ({ client }) => {
        const response = await client.post('/contar')

        response.assertStatus(200)
        response.assertBodyContains({
            count: 11
        })
    })

    

});
