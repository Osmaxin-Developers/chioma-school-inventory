import User from '#models/user'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

@inject()
export default class LoginService {
  constructor(protected ctx: HttpContext) {}

  /**
   * Login user
   */
  public async login(email: string, password: string) {
    const user = await User.verifyCredentials(email, password)

    /**
     * Step 3: Login user
     */
    await this.ctx.auth.use('web').login(user)

    await hash.verify(user.password, password)
  }
}
