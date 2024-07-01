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
import { middleware } from './kernel.js'

router
  .get('/', ({ view }) => {
    return view.render('auth/login')
  })
  .use(middleware.guest())

router.post('/login', [LoginController, 'login']).use(middleware.guest())
router.on('/dashboard').renderInertia('dashboard/index', { version: 6 })
router.on('/dashboard/inventories').renderInertia('dashboard/inventories/index', { version: 6 })

router
  .post('/inventories', [InventoryController, 'create'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .on('/dashboard/inventories/add')
  .renderInertia('dashboard/inventories/add/index', { version: 6 })
router
  .on('/dashboard/inventories/preview')
  .renderInertia('dashboard/inventories/preview/index', { version: 6 })
router
  .on('/dashboard/record-inventory-usage')
  .renderInertia('dashboard/record-inventory-usage/index', { version: 6 })
router
  .on('/dashboard/inventory-usages')
  .renderInertia('dashboard/inventory-usages/index', { version: 6 })
router
  .on('/dashboard/inventory-usages/usage-preview')
  .renderInertia('dashboard/inventory-usages/usage-preview/index', { version: 6 })
router.on('/dashboard/users').renderInertia('dashboard/users/index', { version: 6 })
