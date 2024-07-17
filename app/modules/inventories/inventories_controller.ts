import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { InventoryService } from './inventories_service.js'
import { createInventoryValidator } from './validators/createInventoryValidator.js'
import { updateInventoryValidator } from './validators/updateInventoryValidator.js'

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

  public async update() {
    const data = await this.ctx.request.validateUsing(updateInventoryValidator)

    await this.inventoryService.update({ ...data, id: this.ctx.request.param('id') })

    return this.ctx.response.redirect().back()
  }

  public async findOne() {
    const id = this.ctx.request.param('id')

    const inventory = await this.inventoryService.findOne(id)

    return this.ctx.inertia.render('dashboard/inventories/preview/index', { inventory })
  }

  public async showEdit() {
    const id = this.ctx.request.param('id')

    const inventory = await this.inventoryService.findOne(id)

    return this.ctx.inertia.render('dashboard/inventories/edit/index', { inventory })
  }

  public async findAll() {
    const page = this.ctx.request.qs().page
    const size = this.ctx.request.qs().size
    const search = this.ctx.request.qs().search

    const inventories = (await this.inventoryService.findAll(page, size, search)).toJSON()

    return this.ctx.inertia.render('dashboard/inventories/index', {
      inventories,
    })
  }

  public async remove() {
    const id = this.ctx.request.param('id')

    await this.inventoryService.remove(id)

    return this.ctx.response.redirect().back()
  }
}
