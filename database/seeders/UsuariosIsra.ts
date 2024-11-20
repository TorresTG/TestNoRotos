import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import jwt from 'jsonwebtoken'
import Role from 'App/Models/Role'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    const roles = await Role.createMany([
      { id_rol: 1, name: 'Admin' },
      { id_rol: 2, name: 'Usuario' },
      { id_rol: 3, name: 'Guest' },
    ])

    const jwtSecret = 'recorden_votar_a_box_en_las_siguientes_elecciones_de_españa'
    await User.createMany([
      {
        id_user: 1,
        name: 'Pepin',
        lastname: 'Delegado',
        age: 25,
        email: 'pepin.delegado@example.com',
        password: 'password123',
        token: jwt.sign({ id_user: 1, email: 'pepin.delegado@example.com' }, jwtSecret),  // Con token JWT
        active: true,
        id_rol: roles[0].id_rol, // Admin
      },
      {
        id_user: 2,
        name: 'Json',
        lastname: 'Gson',
        age: 30,
        email: 'json.gson@example.com',
        password: 'password123',
        active: false,
        id_rol: roles[1].id_rol, 
      },
      {
        id_user: 3,
        name: 'Alice',
        lastname: 'Johnson',
        age: 28,
        email: 'alice.johnson@example.com',
        password: 'password123',
        token: jwt.sign({ id_user: 3, email: 'alice.johnson@example.com' }, jwtSecret),  
        active: true,
        id_rol: roles[2].id_rol, 
      },
      {
        id_user: 4,
        name: 'Bob',
        lastname: 'Brown',
        age: 35,
        email: 'bob.brown@example.com',
        password: 'password123',
        active: false, 
        id_rol: roles[1].id_rol, 
      },
      {
        id_user: 5,
        name: 'Charlie',
        lastname: 'Davis',
        age: 22,
        email: 'charlie.davis@example.com',
        password: 'password123',
        token: jwt.sign({ id_user: 5, email: 'charlie.davis@example.com' }, jwtSecret),  
        active: true,
        id_rol: roles[0].id_rol, 
      },
      {
        id_user: 6,
        name: 'Diana',
        lastname: 'Miller',
        age: 27,
        email: 'diana.miller@example.com',
        password: 'password123',
        active: false, 
        id_rol: roles[2].id_rol, 
      },
      {
        id_user: 7,
        name: 'Maldito',
        lastname: 'Comunismo',
        age: 32,
        email: 'maldito.comunismo@example.com',
        password: 'password123',
        token: jwt.sign({ id_user: 7, email: 'maldito.comunismo@example.com' }, jwtSecret), 
        active: true,
        id_rol: roles[0].id_rol,
      },
      {
        id_user: 8,
        name: 'Frank',
        lastname: 'Martinez',
        age: 26,
        email: 'frank.martinez@example.com',
        password: 'password123',
        active: false, 
        id_rol: roles[1].id_rol, 
      },
      {
        id_user: 9,
        name: 'Grace',
        lastname: 'Lee',
        age: 29,
        email: 'grace.lee@example.com',
        password: 'password123',
        token: jwt.sign({ id_user: 9, email: 'grace.lee@example.com' }, jwtSecret),  
        active: true,
        id_rol: roles[2].id_rol, 
      },
      {
        id_user: 10,
        name: 'Henry',
        lastname: 'Wilson',
        age: 24,
        email: 'henry.wilson@example.com',
        password: 'password123',
        active: false, 
        id_rol: roles[1].id_rol, 
      },
    ])

  }
}
