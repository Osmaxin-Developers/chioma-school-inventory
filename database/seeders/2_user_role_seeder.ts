import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '../../app/models/role.js'
import User from '../../app/models/user.js'
import UserRole from '../../app/models/user_role.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const user = await User.findBy({ email: 'admin@admin.com' })

    const role = await Role.findBy({
      slug: 'super-admin',
    })
    if (user && role) {
      UserRole.create({
        role_id: role.id,
        user_id: user.id,
      })
    }
  }
}
