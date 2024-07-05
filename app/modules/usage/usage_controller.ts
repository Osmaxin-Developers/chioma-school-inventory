import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { InventoryService } from '../inventories/inventories_service.js'
import { UsageService } from './usage_service.js'
import { createUsageValidator } from './validators/createUsageValidator.js'

@inject()
export default class UsageController {
  public constructor(
    private readonly ctx: HttpContext,
    private readonly usageService: UsageService,
    private readonly inventoryService: InventoryService
  ) {}

  public async create() {
    const data = await this.ctx.request.validateUsing(createUsageValidator)

    await this.usageService.create(data)

    return this.ctx.response.redirect().back()
  }

  public async findOne() {
    const id = await this.ctx.request.param('id')

    const usage = await this.usageService.findOne(id)

    return this.ctx.inertia.render('dashboard/inventory-usages/usage-preview/index', { usage })
  }

  public async findAll() {
    const page = this.ctx.request.qs().page
    const size = this.ctx.request.qs().size
    const search = this.ctx.request.qs().search

    const usages = (await this.usageService.findAll(page, size, search)).toJSON()

    return this.ctx.inertia.render('dashboard/inventory-usages/index', { usages })
  }
  public async renderRecordUsagePage() {
    const page = this.ctx.request.qs().page
    const size = this.ctx.request.qs().size
    const search = this.ctx.request.qs().search

    const inventories = (await this.inventoryService.findAll(page, size, search)).toJSON()

    return this.ctx.inertia.render('dashboard/record-inventory-usage/index', { inventories })
  }
}
