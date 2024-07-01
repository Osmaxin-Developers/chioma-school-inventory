import ForbiddenException from '#exceptions/forbidden_exception'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class UserRoleMiddleware {
  async handle(ctx: HttpContext, next: NextFn, options: { roles: string[] }) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const authUser = ctx.auth.user as User
    const user = await User.query().where('id', authUser.id).preload('roles').first()

    const userRoles = user?.roles.map((role) => role.slug) ?? []
    const isMatched = options.roles.some((role) => userRoles.includes(role))

    if (!isMatched) {
      throw new ForbiddenException('You are not permitted to access this endpoint')
    }
    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
