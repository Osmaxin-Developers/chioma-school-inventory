import Inventory from '#models/inventory'
import Usage from '#models/usage'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export class DashboardService {
  public constructor(private readonly ctx: HttpContext) {}

  public async getDashboardData() {
    const inventoriesCount = await Inventory.query().count('* as inventories_count')
    const outOfStockInventories = await Inventory.query()
      .where('quantity', 0)
      .count('* as out_of_stock_inventories')
    const usagesCount = await Usage.query().count('* as usages_count')

    const inventories = await Inventory.query().limit(5)

    return {
      inventoriesCount,
      outOfStockInventories,
      usagesCount,
      inventories,
    }
  }
}
