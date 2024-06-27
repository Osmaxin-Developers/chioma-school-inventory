/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home', { version: 6 })
router.on('/dashboard').renderInertia('dashboard/index', { version: 6 })
router.on('/dashboard/inventories').renderInertia('dashboard/inventories/index', { version: 6 })
router
  .on('/dashboard/inventories/add')
  .renderInertia('dashboard/inventories/add/index', { version: 6 })
router
  .on('/dashboard/inventories/preview')
  .renderInertia('dashboard/inventories/preview/index', { version: 6 })
router
  .on('/dashboard/record-inventory-usage')
  .renderInertia('dashboard/record-inventory-usage/index', { version: 6 })
