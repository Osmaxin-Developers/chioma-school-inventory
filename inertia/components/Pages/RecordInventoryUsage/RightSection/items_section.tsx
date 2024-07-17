import type Inventory from '#models/inventory'
import { MinusIcon, PlusIcon } from 'lucide-react'

interface IInventory extends Inventory {
  addedQuantity?: number
}

export const ItemsSection = ({
  selectedInventories,
  handleQuantityIncrement,
  handleQuantityDecrement,
}: {
  selectedInventories: IInventory[]
  handleQuantityIncrement: (value: IInventory) => void
  handleQuantityDecrement: (value: IInventory) => void
}) => {
  //
  return (
    <div>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="pb-3">
          <h4 className="text-lg font-bold text-black dark:text-white">
            Selected items({selectedInventories.length})
          </h4>
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  Name
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Price per item
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">Quantity</th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {[...selectedInventories].map((item) => (
                <tr>
                  <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <div className="flex items-center flex-wrap gap-3">
                      <img
                        src={item.image_url ?? ''}
                        alt="profile"
                        className="h-7 w-7 object-cover object-center rounded-md"
                      />
                      <h5 className="font-medium text-black dark:text-white">{item.name}</h5>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white font-medium">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'GBP',
                        maximumFractionDigits: 10,
                        currencyDisplay: 'symbol',
                      }).format(Number(item.price ?? 0))}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="w-[100px] flex items-center justify-between">
                      <button
                        onClick={() => handleQuantityDecrement(item)}
                        className="h-6 w-6 rounded-full  border border-stroke dark:border-strokedark flex items-center justify-center hover:text-danger hover:bg-danger/15"
                      >
                        <MinusIcon />
                      </button>
                      {/*  */}
                      <p className="font-semibold flex-1 text-center mx-1">{item.addedQuantity}</p>
                      {/*  */}
                      <button
                        onClick={() => handleQuantityIncrement(item)}
                        className="h-6 w-6 rounded-full  border border-stroke dark:border-strokedark flex items-center justify-center hover:text-primary hover:bg-primary/15"
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white font-medium">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'GBP',
                        maximumFractionDigits: 10,
                        currencyDisplay: 'symbol',
                      }).format(Number(item.price * Number(item?.addedQuantity ?? 0)))}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
