import type Inventory from '../../../../app/models/inventory'
import { InventoryDetailsLeftSection } from './inventory_details_left_section'

export const InventoryPreviewIndex = ({ inventory }: { inventory: Inventory }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-md font-bold text-black dark:text-white">Inventory preview</h2>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col gap-7.5">
        <div className="min-h-[500px] flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h3 className="font-medium text-black dark:text-white">Inventory details</h3>
          </div>

          {/*  */}
          <div className="flex-1 flex flex-col gap-6 xl:flex-row py-4 xl:py-6 px-4 sm:px-6 xl:px-9">
            <div className="w-full xl:w-1/2 flex items-center justify-center border border-stroke rounded-lg overflow-hidden dark:border-strokedark">
              <img
                src={inventory.image_url}
                alt=""
                className="object-contain max-w-[300px] max-h-[300px] rounded-lg"
              />
            </div>
            {/*  */}
            <div className="w-full xl:w-1/2">
              <InventoryDetailsLeftSection inventory={inventory} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
