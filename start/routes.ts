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
import { UserController } from '../app/modules/auth/users/users_controller.js'
import InventoryController from '../app/modules/inventories/inventories_controller.js'
import UsageController from '../app/modules/usage/usage_controller.js'
import UsageRefundController from '../app/modules/usage_refunds/usage_refunds_controller.js'
import { middleware } from './kernel.js'
import DashboardController from '../app/modules/dashboard/dashboard_controller.js'

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
  .get('/dashboard', [DashboardController, 'getDashboardData'])
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

router.get('/dashboard/inventories/edit/:id', [InventoryController, 'showEdit'])

router
  .get('/dashboard/record-inventory-usage', [UsageController, 'renderRecordUsagePage'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .post('/usages', [UsageController, 'create'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .post('/usage-refunds', [UsageRefundController, 'create'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router.get('/dashboard/inventory-usages', [UsageController, 'findAll'])
router.get('/dashboard/inventory-usages/:id', [UsageController, 'findOne']).use(middleware.auth())

router
  .get('/dashboard/users', [UserController, 'findAll'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .get('/dashboard/users/create', [UserController, 'renderCreatePage'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .post('/dashboard/users/create', [UserController, 'create'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .delete('/dashboard/users/:id', [UserController, 'delete'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))

router
  .patch('/dashboard/users/change-role', [UserController, 'changeRole'])
  .use(middleware.auth())
  .use(middleware.userRole({ roles: ['super-admin'] }))
