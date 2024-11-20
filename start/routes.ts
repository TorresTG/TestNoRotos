/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/proyecto', 'DBisraelsController.verProyectos');
Route.post('/tarea', 'DBisraelsController.verTareas');
Route.post('/proyecto/:id', 'DBisraelsController.verUnProyecto');
Route.post('/tarea/:id', 'DBisraelsController.verUnArtist');
Route.post('/tareasrelacion', 'DBisraelsController.verRelacionProyecto');
Route.post('/proyectorelacion', 'DBisraelsController.verRelacionTarea');

Route.post('/register', 'UsersController.register');
Route.post('/login', 'UsersController.login');
Route.post('/obtenerInfo', 'UsersController.getUserInfo');

Route.post('/siete', 'UsersController.datosDel7');
Route.post('/nullo/:id', 'UsersController.datoNoEsiste');
Route.post('/contar', 'UsersController.quantity');

Route.post('/borrar', 'UsersController.borrarUsuarios');
Route.post('/actu', 'UsersController.actualizarNombre');

