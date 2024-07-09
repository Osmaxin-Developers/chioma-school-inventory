import { BoxesIcon, ContainerIcon, DatabaseZapIcon, PackageOpenIcon } from 'lucide-react'
import { InventoryCountCard } from './inventory_count_card'

export const InventoryCountSection = ({
  inventoriesCount,
  outOfStockInventories,
  usagesCount,
}: {
  usagesCount: number
  inventoriesCount: number
  outOfStockInventories: number
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {/* Available items */}
        <InventoryCountCard
          count={inventoriesCount ?? 0}
          title="Available items"
          icon={<BoxesIcon className="h-12 w-12 text-[#8996a1]" />}
        />

        {/* Out of stock */}
        <InventoryCountCard
          count={outOfStockInventories ?? 0}
          title="Out of stock"
          indicatorClassName="bg-danger"
          icon={<PackageOpenIcon className="h-12 w-12 text-[#8996a1]" />}
        />

        {/* Total usages */}
        <InventoryCountCard
          count={usagesCount ?? 0}
          title="Total usages"
          indicatorClassName="bg-warning"
          icon={<DatabaseZapIcon className="h-12 w-12 text-[#8996a1]" />}
        />
      </div>
    </>
  )
}
