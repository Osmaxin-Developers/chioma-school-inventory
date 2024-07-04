import { ModelPagination } from '#interfaces/model.interface'
import type Inventory from '#models/inventory'
import { router, usePage } from '@inertiajs/react'
import { SearchIcon } from 'lucide-react'
import { ChangeEvent } from 'react'
import { Input } from '~/components/Global/FormComponents/input'

export const LeftSection = ({
  handleSelectInventory,
  isSelectedInventory,
  handleSearchInventory,
}: {
  handleSelectInventory: (value: Inventory) => void
  isSelectedInventory: (value: number) => boolean
  handleSearchInventory: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  //
  const { inventories } = usePage<{ inventories: ModelPagination<Inventory> }>().props

  const { data, meta } = inventories

  return (
    <div className="xl:col-span-2 md:col-span-1 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark overflow-y-auto">
      {/*  */}
      <div className="sticky top-0 z-10 px-4 py-0.5  bg-white dark:bg-boxdark">
        <div className="relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
            <SearchIcon className="" />
          </div>

          <Input
            name="search"
            type="text"
            placeholder="Type to search inventory"
            className="w-full bg-gray-2 dark:bg-boxdark-2 pl-10 pr-4 focus:outline-none"
            onChange={handleSearchInventory}
            vla
          />
        </div>
      </div>
      {/*  */}
      <div className="overflow-y-auto px-4 pb-4">
        {[...data]
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <div
              onClick={() => handleSelectInventory(item)}
              className={`mb-5 flex cursor-pointer items-center rounded px-4 py-2  ${
                isSelectedInventory(item.id)
                  ? 'bg-primary/10 dark:bg-strokedark border border-primary'
                  : 'bg-gray dark:bg-strokedark'
              }`}
            >
              <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-xl overflow-hidden">
                <img
                  src={item.image_url ?? ''}
                  alt="profile"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="w-full">
                <h5 className="text-sm font-medium text-black dark:text-white">Name:</h5>
                <p className="text-sm font-medium">{item.name}</p>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-sm font-medium text-black dark:text-white">Quantity:</h5>
                    <p className="text-sm font-medium">{item.quantity}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-black dark:text-white">Price:</h5>
                    <p className="text-sm font-medium">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'GBP',
                        maximumFractionDigits: 10,
                        currencyDisplay: 'symbol',
                      }).format(Number(item.price ?? 0))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/*  */}
      {!data.length ? (
        <div className="max-h-full h-[400px] flex flex-col items-center justify-center">
          <p className="font-medium">No item found. Nothing to show here</p>
        </div>
      ) : null}
    </div>
  )
}
