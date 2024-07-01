import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '../../app/models/role.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Role.createMany([
      {
        id: 1,
        uuid: '549bf3e4-4a66-4690-85c1-485d53bcb055',
        name: 'Active',
        slug: 'active',
        app_name: 'inventory-system',
      },
      {
        id: 2,
        uuid: '14c34a2c-9d33-4979-a0ab-48851bc42004',
        name: 'Manager',
        slug: 'manager',
        app_name: 'inventory-system',
      },
      {
        id: 3,
        uuid: '2fb1229b-b1bc-47bb-8d57-270c66d7bba0',
        name: 'Supervisor',
        slug: 'supervisor',
        app_name: 'inventory-system',
      },
      {
        id: 4,
        uuid: '418f870a-6eb3-465e-a280-b8db844af5ee',
        name: 'Accountant',
        slug: 'accountant',
        app_name: 'inventory-system',
      },
      {
        id: 5,
        uuid: '7a4d00e3-73cf-427d-b2f9-87aad1454cc8',
        name: 'User',
        slug: 'user',
        app_name: 'inventory-system',
      },
      {
        id: 6,
        uuid: 'ba393f1e-92f0-4697-a819-f133dc5a7c6d',
        name: 'Admin',
        slug: 'admin',
        app_name: 'inventory-system',
      },
      {
        id: 7,
        uuid: '043a5224-ee80-4f2e-867a-015daec817ed',
        name: 'SuperAdmin',
        slug: 'super-admin',
        app_name: 'inventory-system',
      },
    ])
  }
}
