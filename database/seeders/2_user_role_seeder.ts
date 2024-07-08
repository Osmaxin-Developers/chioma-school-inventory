import Role from '#models/role'
import User from '#models/user'
import UserRole from '#models/user_role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const user = await User.findBy({ email: 'admin@admin.com' })

    const role = await Role.findBy({
      slug: 'super-admin',
    })
    if (user && role) {
      await UserRole.create({
        role_id: role.id,
        user_id: user.id,
      })
    }
  }
}
