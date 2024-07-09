import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { DashboardService } from './dashboard_service.js'

@inject()
export default class DashboardController {
  public constructor(
    private readonly ctx: HttpContext,
    private readonly usageService: DashboardService
  ) {}

  public async getDashboardData() {
    //

    const dashboardData = await this.usageService.getDashboardData()

    return this.ctx.inertia.render('dashboard/index', { dashboardData })
  }
}
