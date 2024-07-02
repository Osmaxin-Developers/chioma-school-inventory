import { inject } from '@adonisjs/core'
import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { Infer } from '@vinejs/vine/types'
import Inventory from '../../models/inventory.js'
import UsageRefund from '../../models/usage_refund.js'
import { createUsageRefundValidator } from './validators/createUsageRefundValidator.js'

@inject()
export class UsageRefundService {
  constructor(private readonly ctx: HttpContext) {}

  public async create(data: Infer<typeof createUsageRefundValidator>) {
    const { inventories } = data

    const usageRefund = await db.transaction(async (trx) => {
      const usedInventories = await Inventory.query().whereIn(
        'id',
        inventories.map((inv) => inv.id)
      )

      if (inventories.length !== usedInventories.length) {
        throw new Exception('inconsistent inventories, some inventories are not found')
      }

      const usageRefunds = await UsageRefund.createMany(
        inventories.map(({ id, quantity }) => ({
          inventory_id: id,
          quantity,
          quantity_after: (usedInventories.find((inv) => inv.id === id)?.quantity ?? 0) - quantity,
          quantity_before: usedInventories.find((inv) => inv.id === id)?.quantity,
          usage_price: usedInventories.find((inv) => inv.id === id)?.price,
          user_id: this.ctx.auth?.user?.id,
        })),
        {
          client: trx,
        }
      )

      for (const inv of inventories) {
        const inventory = await Inventory.findOrFail(inv.id, {
          client: trx,
        })
        inventory.quantity += inv.quantity
        inventory.save()
      }

      return usageRefunds
    })

    return usageRefund
  }

  public async findOne(id: number) {
    const usage = await UsageRefund.findOrFail(id)

    usage.load('inventory')

    return usage
  }

  public async findAll(page: number, size: number) {
    page = page ?? 1
    size = size ?? 10

    let query = UsageRefund.query()

    query.preload('inventory')

    return query.paginate(page, size)
  }
}
