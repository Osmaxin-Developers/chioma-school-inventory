import { inject } from '@adonisjs/core'
import { Infer } from '@vinejs/vine/types'
import Role from '../../../models/role.js'
import User from '../../../models/user.js'
import UserRole from '../../../models/user_role.js'
import { createUserValidator } from './validators/createUserValidator.js'

@inject()
export class UserService {
  public async create(data: Infer<typeof createUserValidator>) {
    const user = await User.create({
      full_name: data.full_name,
      email: data.email,
      password: data.password,
    })

    const role = await Role.findOrFail(data.role_id)
    const activeRole = await Role.findByOrFail({ slug: 'active' })

    await user.related('userRoles').createMany([
      {
        role_id: role.id,
      },
      { role_id: activeRole.id },
    ])

    return user
  }

  public async changeRole(userId: number, roleId: number) {
    const user = await User.findOrFail(userId)
    const activeRole = await Role.findByOrFail({ slug: 'active' })

    await UserRole.query().where('user_id', userId).andWhereNot('role_id', activeRole.id).update({
      role_id: roleId,
    })
    return user
  }

  public async delete(userId: number) {
    const user = await User.findOrFail(userId)

    await user.delete()

    return user
  }

  public async findOne(id: number) {
    const user = await User.findOrFail(id)

    return user
  }

  public async renderCreatePage() {
    return await Role.query().whereNot('slug', 'active').whereNot('slug', 'active')
  }

  public async findAll(page: number, size: number, search?: string) {
    page = page ?? 1
    size = size ?? 10

    let query = User.query()
    if (search) {
      query = query.whereLike('full_name', '%' + search + '%')
    }

    return query.paginate(page, size)
  }
}
