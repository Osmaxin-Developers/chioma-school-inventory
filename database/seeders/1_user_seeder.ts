import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '../../app/models/user.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    // Seed admin
    await User.create({
      full_name: 'admin',
      email: 'admin@admin.com',
      password: 'password',
    })
  }
}
