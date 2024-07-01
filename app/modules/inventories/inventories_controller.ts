import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { InventoryService } from './inventories_service.js'
import { createInventoryValidator } from './validators/createInventoryValidator.js'

@inject()
export default class InventoryController {
  constructor(
    private readonly ctx: HttpContext,
    private readonly inventoryService: InventoryService
  ) {}

  public async create() {
    const data = await this.ctx.request.validateUsing(createInventoryValidator)

    await this.inventoryService.create(data)

    return this.ctx.response.redirect().back()
  }
}
