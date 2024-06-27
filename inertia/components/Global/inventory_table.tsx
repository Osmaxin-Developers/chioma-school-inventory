import { Link } from '@inertiajs/react'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import { inventories } from '~/base/dummy_data/inventories'

export const InventoryTable = () => {
  //
  const [isOpen, setIsOpen] = useState(false)
  const [isActiveId, setIsActiveId] = useState<number>()
  return (
    <div>
      <div className="w-full overflow-x-auto min-h-[600px]">
        <div className="min-w-[1170px]">
          {/* <!-- table header start --> */}
          <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
            <div className="col-span-3">
              <h5 className="font-medium text-white">Name</h5>
            </div>

            <div className="col-span-3">
              <h5 className="font-medium text-white">Price</h5>
            </div>

            <div className="col-span-3">
              <h5 className="font-medium text-white">Quantity</h5>
            </div>

            <div className="col-span-2">
              <h5 className="font-medium text-white">Status</h5>
            </div>

            <div className="col-span-1">
              <h5 className="text-right font-medium text-white">Edit</h5>
            </div>
          </div>
          {/* <!-- table header end --> */}

          {/* <!-- table body start --> */}
          <div className="bg-white dark:bg-boxdark rounded-b-[10px]">
            {/* <!-- table row item --> */}
            {inventories.map((inventory) => (
              <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">{inventory.name}</p>
                </div>

                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">{inventory.price}</p>
                </div>

                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">{inventory.quantity}</p>
                </div>

                <div className="col-span-2">
                  <p className="text-[#637381] dark:text-bodydark">{inventory.status}</p>
                </div>

                <div className="col-span-1 relative">
                  <div x-data="{ isOpen: false }">
                    <button
                      onClick={() => {
                        setIsOpen(!isOpen)
                        setIsActiveId(inventory.id)
                      }}
                      className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none"
                    >
                      Action
                      <ChevronDownIcon />
                    </button>

                    <div
                      x-cloak
                      x-show="isOpen"
                      className={`absolute right-0 top-full z-10 mt-1 w-full max-w-39.5 rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark 
                        ${isOpen && isActiveId === inventory.id ? 'block' : 'hidden'}`}
                    >
                      <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                        Edit
                      </button>
                      <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                        Delete
                      </button>
                      <Link
                        href={`/dashboard/inventories/preview`}
                        className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- table body end --> */}
        </div>
      </div>
    </div>
  )
}
