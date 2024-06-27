import { InventoryCountSection } from './inventory_count_section'

export const DashboardIndex = () => {
  return (
    <div>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            This Week’s Overview
          </h2>
        </div>
      </div>

      {/* <!-- Overview Section --> */}
      <InventoryCountSection />
    </div>
  )
}
