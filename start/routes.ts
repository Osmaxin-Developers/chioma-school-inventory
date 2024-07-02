/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import LoginController from '../app/modules/auth/login/login_controller.js'
import InventoryController from '../app/modules/inventories/inventories_controller.js'
import UsageController from '../app/modules/usage/usage_controller.js'
import { middleware } from './kernel.js'

router
  .get('/', ({ view }) => {
    return view.render('auth/login')
  })
  .use(middleware.guest())
router
  .get('/login', ({ view }) => {
    return view.render('auth/login')
  })
  .use(middleware.guest())

router.post('/login', [LoginController, 'login']).use(middleware.guest())
router
  .on('/dashboard')
  .renderInertia('dashboard/index', { version: 6 })
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))
router
  .get('/dashboard/inventories', [InventoryController, 'findAll'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .post('/inventories', [InventoryController, 'create'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .patch('/inventories/:id', [InventoryController, 'update'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .delete('/inventories/:id', [InventoryController, 'remove'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .on('/dashboard/inventories/add')
  .renderInertia('dashboard/inventories/add/index', { version: 6 })

router.get('/dashboard/inventories/:id', [InventoryController, 'findOne'])

router
  .on('/dashboard/record-inventory-usage')
  .renderInertia('dashboard/record-inventory-usage/index', { version: 6 })

router.post('/usages', [UsageController, 'create'])
router.get('/dashboard/inventory-usages', [UsageController, 'findAll'])
router.get('/dashboard/inventory-usages/:id', [UsageController, 'findOne'])

router.on('/dashboard/users').renderInertia('dashboard/users/index', { version: 6 })
