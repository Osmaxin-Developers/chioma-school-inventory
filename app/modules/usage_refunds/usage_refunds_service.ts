import UsagesInventory from '#models/usages_inventory'
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
    const { usage_id, usage_inventories } = data

    const usageRefund = await db.transaction(async (trx) => {
      const usedInventories = await UsagesInventory.query({ client: trx })
        .whereIn(
          'id',
          usage_inventories.map((inv) => inv.id)
        )
        .preload('inventory')

      if (usage_inventories.length !== usedInventories.length) {
        throw new Exception('inconsistent inventories, some inventories are not found')
      }

      const usageRefunds = await UsageRefund.createMany(
        usedInventories.map(({ id, inventory_id }) => ({
          inventory_id: inventory_id,
          quantity: usage_inventories.find((usageInv) => usageInv.id === id)?.quantity,
          quantity_after:
            (usedInventories.find((inv) => inv.id === id)?.inventory.quantity ?? 0) -
            (usage_inventories.find((usageInv) => usageInv.id === id)?.quantity ?? 0),
          quantity_before: usedInventories.find((inv) => inv.id === id)?.inventory.quantity,
          user_id: this.ctx.auth?.user?.id,
          usage_id,
        })),
        {
          client: trx,
        }
      )

      for (const inv of usedInventories) {
        // reduce inventory quantity
        const usageInventory = await UsagesInventory.findOrFail(inv.id, {
          client: trx,
        })
        usageInventory.quantity -=
          usage_inventories.find((usageInv) => usageInv.id === inv.id)?.quantity ?? 0
        usageInventory.save()

        // increase inventory quantity
        const inventory = await Inventory.findOrFail(inv.inventory_id, {
          // client: trx,
        })
        inventory.quantity +=
          usage_inventories.find((usageInv) => usageInv.id === inv.id)?.quantity ?? 0
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
