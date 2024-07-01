import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import LoginService from './login_service.js'
import { loginValidator } from './validator/loginValidator.js'

@inject()
export default class LoginController {
  constructor(
    protected ctx: HttpContext,
    private readonly loginService: LoginService
  ) {}

  public async login() {
    // validate request
    const data = await this.ctx.request.validateUsing(loginValidator)

    // login user
    await this.loginService.login(data.email, data.password)

    return this.ctx.response.redirect('/dashboard')
  }
}
