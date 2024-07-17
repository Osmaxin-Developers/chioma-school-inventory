import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { UsageRefundService } from './usage_refunds_service.js'
import { createUsageRefundValidator } from './validators/createUsageRefundValidator.js'

@inject()
export default class UsageRefundController {
  public constructor(
    private readonly ctx: HttpContext,
    private readonly usageRefundService: UsageRefundService
  ) {}

  public async create() {
    const data = await this.ctx.request.validateUsing(createUsageRefundValidator)

    await this.usageRefundService.create(data)

    return this.ctx.response.redirect().back()
  }

  public async findOne() {
    const id = await this.ctx.request.param('id')

    const usageRefund = await this.usageRefundService.findOne(id)

    return this.ctx.inertia.render('dashboard/inventory-usages/usage-preview/index', {
      usageRefund,
    })
  }

  public async findAll() {
    const page = this.ctx.request.qs().page
    const size = this.ctx.request.qs().size
    const usageId = this.ctx.request.qs().usageId

    const usageRefunds = await this.usageRefundService.findAll(page, size, usageId)

    return this.ctx.inertia.render('dashboard/inventory-usages/index', { usageRefunds })
  }
}
