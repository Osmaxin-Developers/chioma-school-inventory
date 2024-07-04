import type Inventory from '#models/inventory'
import { BoxIcon } from 'lucide-react'
import { useCalculateSelectedInventories } from '~/base/hooks/inventoryUsages/useCalculateSelectedInventories'
import { FormSection } from './form_section'
import { ItemsSection } from './items_section'

export const RightSection = ({ selectedInventories }: { selectedInventories: Inventory[] }) => {
  //
  const {
    handleQuantityIncrement,
    inventories,
    handleQuantityDecrement,
    totalSelectedQuantity,
    totalSelectedAmount,
  } = useCalculateSelectedInventories({
    selectedInventories: selectedInventories,
  })

  return (
    <div className="xl:col-span-5 md:col-span-3 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5 overflow-y-auto">
      {inventories?.length > 0 ? (
        <>
          {/* items section */}
          <div className="mb-8">
            <ItemsSection
              selectedInventories={inventories}
              handleQuantityIncrement={handleQuantityIncrement}
              handleQuantityDecrement={handleQuantityDecrement}
            />
          </div>
          {/*  */}
          <div className="mb-5.5 py-3 flex flex-col gap-6 xl:flex-row border-y border-stroke dark:border-s-strokedark">
            <div className="w-full xl:w-1/2">
              <h4 className="text-lg font-bold text-black dark:text-white">Total quantity</h4>
              <p className="my-4 text-lg xl:text-xl text-black dark:text-white font-bold">
                {totalSelectedQuantity()}
              </p>
            </div>
            <div className="w-full xl:w-1/2">
              <h4 className="text-lg font-bold text-black dark:text-white">Total price</h4>
              <p className="my-4 text-lg xl:text-xl text-black dark:text-white font-bold">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'GBP',
                  maximumFractionDigits: 10,
                  currencyDisplay: 'symbol',
                }).format(totalSelectedAmount())}
              </p>
            </div>
          </div>
          {/* form section */}
          <FormSection inventories={inventories} />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <BoxIcon size={30} />
          <p className="capitalize text-lg">select an item to record usage</p>
        </div>
      )}
    </div>
  )
}
