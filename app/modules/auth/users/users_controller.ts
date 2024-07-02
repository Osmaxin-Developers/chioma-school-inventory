import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { UserService } from './users_service.js'
import { createUserValidator } from './validators/createUserValidator.js'

@inject()
export class UserController {
  public constructor(
    private readonly ctx: HttpContext,
    private readonly userService: UserService
  ) {}

  public async create() {
    const data = await this.ctx.request.validateUsing(createUserValidator)

    await this.userService.create(data)

    return this.ctx.response.redirect().back()
  }

  public async findOne() {
    const id = await this.ctx.request.param('id')

    const usage = await this.userService.findOne(id)

    return this.ctx.inertia.render('dashboard/inventory-usages/usage-preview/index', { usage })
  }

  public async findAll() {
    const page = this.ctx.request.qs().page
    const size = this.ctx.request.qs().size
    const search = this.ctx.request.qs().search

    const usages = await this.userService.findAll(page, size, search)

    return this.ctx.inertia.render('dashboard/inventory-usages/index', { usages })
  }

  public async changeRole() {
    const userId = this.ctx.request.body().user_id
    const roleId = this.ctx.request.body().role_id

    await this.userService.changeRole(userId, roleId)

    return this.ctx.response.redirect().back()
  }

  public async delete() {
    const userId = this.ctx.request.body().user_id

    await this.userService.delete(userId)

    return this.ctx.response.redirect().back()
  }
}
