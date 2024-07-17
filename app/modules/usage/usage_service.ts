import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { Infer } from '@vinejs/vine/types'
import Inventory from '../../models/inventory.js'
import Usage from '../../models/usage.js'
import { createUsageValidator } from './validators/createUsageValidator.js'

@inject()
export class UsageService {
  public constructor(private readonly ctx: HttpContext) {}

  public async create(data: Infer<typeof createUsageValidator>) {
    const { inventories, description, receiver_location, receiver_name } = data
    const usedInventories: Inventory[] = []

    // make sure inventories quantity is available
    for (const inventoryData of inventories) {
      const inventory = await Inventory.find(inventoryData.id)

      if (!inventory) {
        this.ctx.session.flashMessages.set(
          'errors',
          'One of the inventory you are trying to record for does not exist'
        )
        return false
      }

      if (inventory.quantity < inventoryData.quantity) {
        this.ctx.session.flashMessages.set(
          'errors',
          `${inventory.name} remaining quantity is below the requested quantity`
        )
        return false
      }

      usedInventories.push(inventory)
    }

    const usage = await db.transaction(async (trx) => {
      const usage = await Usage.create(
        {
          description,
          receiver_location,
          receiver_name,
          user_id: this.ctx.auth.getUserOrFail().id,
        },
        {
          client: trx,
        }
      )

      await usage.related('usagesInventories').createMany(
        inventories.map(({ id, quantity }) => ({
          inventory_id: id,
          quantity,
          quantity_after: (usedInventories.find((inv) => inv.id === id)?.quantity ?? 0) - quantity,
          quantity_before: usedInventories.find((inv) => inv.id === id)?.quantity,
          usage_price: usedInventories.find((inv) => inv.id === id)?.price,
        }))
      )

      for (const inv of inventories) {
        const inventory = await Inventory.findOrFail(inv.id)
        inventory.quantity -= inv.quantity
        inventory.save()
      }

      return usage
    })

    return usage
  }

  public async findOne(id: number) {
    let query = Usage.query()
      .where('id', id)
      .preload('usagesInventories', (query) => {
        query.preload('inventory')
      })

    query = query.withCount('usagesInventories', (query) => query.as('inventories_count'))
    query = query.withAggregate('usagesInventories', (query) =>
      query.sum('quantity').as('inventories_quantity')
    )

    query = query.preload('usagesInventories', (builder) => builder.preload('inventory'))
    query = query.preload('usagesRefunds', (builder) => builder.preload('inventory'))

    return query.firstOrFail()
  }

  public async findAll(page: number, size: number, search?: string) {
    page = page ?? 1
    size = size ?? 10

    let query = Usage.query()
    if (search) {
      query = query.whereLike('receiver_name', '%' + search + '%')
    }

    query = query.withCount('usagesInventories', (query) => query.as('inventories_count'))
    query = query.withAggregate('usagesInventories', (query) =>
      query.sum('quantity').as('inventories_quantity')
    )

    query = query.preload('usagesInventories', (query) =>
      query.select(db.raw('quantity * usage_price as total_price'))
    )

    const usages = await query.orderBy('created_at', 'desc').paginate(page, size)

    return usages
  }
}
