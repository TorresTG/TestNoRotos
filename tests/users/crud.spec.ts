import { test } from '@japa/runner'

test.group('Crud usuarios', () => {
    test('Contar la cantidad de usuarios nuevos mas los ingresados', async ({client}) => {
        await client.post('/register').json({
            email: "saul@ample.com",
            name: "pepe",
            lastname: "delegado",
            age: 25,
            password: "ola",
            active: true,
            id_rol: 2
        });
        
        await client.post('/register').json({
            email: "fabio@exaple.com",
            name: "pepe",
            lastname: "delegado",
            age: 25,
            password: "ola",
            active: true,
            id_rol: 2
        });
        await client.post('/register').json({
            email: "santin@exe.com",
            name: "pepe",
            lastname: "delegado",
            age: 25,
            password: "ola",
            active: true,
            id_rol: 2
        });
        await client.post('/register').json({
            email: "snneit@example.com",
            name: "pepe",
            lastname: "delegado",
            age: 25,
            password: "ola",
            active: true,
            id_rol: 2
        });

        const response = await client.post('/contar')

        response.assertStatus(200)
        response.assertBodyContains({
            count: 15
        })

    })

    test('borar 2 y contar', async ({ client }) => {
        const response = await client.post('/borrar')

        response.assertStatus(200)
        response.assertBodyContains({
            count: 13
        })
    })
    
    test('actualizar vato', async ({client}) => {
        const response = await client.post('/actu')

        response.assertStatus(200)
        response.assertBodyContains({
            message: 'Nombre actualizado con éxito' 
        })
    })


});