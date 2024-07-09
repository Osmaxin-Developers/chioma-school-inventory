import Inventory from '#models/inventory'
import { usePage } from '@inertiajs/react'
import { InventoryTable } from '~/components/Global/inventory_table'
import { InventoryCountSection } from './inventory_count_section'

export const DashboardIndex = () => {
  //
  const { dashboardData } = usePage<{
    dashboardData: {
      inventories: Inventory[]
      usagesCount: { usages_count: number }[]
      inventoriesCount: { inventories_count: number }[]
      outOfStockInventories: { out_of_stock_inventories: number }[]
    }
  }>().props
  //
  console.log(dashboardData)
  return (
    <div>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-sm font-bold text-black dark:text-white">
            This Week’s Overview
          </h2>
        </div>
      </div>

      {/* <!-- Overview Section --> */}
      <InventoryCountSection
        usagesCount={dashboardData.usagesCount[0].usages_count}
        inventoriesCount={dashboardData.inventoriesCount[0].inventories_count}
        outOfStockInventories={dashboardData.outOfStockInventories[0].out_of_stock_inventories}
      />

      {/*  */}
      <div className="mt-10 lg:mt-16">
        <InventoryTable data={dashboardData.inventories} />
      </div>
    </div>
  )
}
