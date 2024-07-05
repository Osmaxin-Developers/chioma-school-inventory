import { ModelPagination } from '#interfaces/model.interface'
import type Inventory from '#models/inventory'
import { Link, useForm, usePage } from '@inertiajs/react'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import Pagination from '../Pagination/Pagination'
import DeleteModal from './Modal/delete_modal'

export const InventoryTable = () => {
  const { inventories } = usePage<{ inventories: ModelPagination<Inventory> }>().props

  const { data, meta } = inventories
  // 
  const [isOpen, setIsOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isActiveId, setIsActiveId] = useState<number>()
  const { delete: remove, processing } = useForm()

  //
  const handleDeleteInventory = () =>
    remove(`/inventories/${isActiveId}`, {
      onSuccess: () => setIsDeleteModalOpen(false),
    })

  return (
    <>
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
              {data.map((inventory) => (
                <div
                  key={inventory.id}
                  className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
                >
                  <div className="col-span-3 flex items-start space-x-3">
                    <div className="h-9 hidden sm:block w-full max-w-9 relative flex-shrink-0 rounded-xl overflow-hidden">
                      <img
                        src={inventory.image_url}
                        alt="inventory_image"
                        className="object-cover object-center h-full w-full"
                      />
                    </div>
                    <p className="text-[#637381] dark:text-bodydark">{inventory.name}</p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-bodydark">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'GBP',
                        maximumFractionDigits: 10,
                        currencyDisplay: 'symbol',
                      }).format(Number(inventory.price ?? 0))}
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-[#637381] dark:text-bodydark">{inventory.quantity}</p>
                  </div>

                  <div className="col-span-2">
                    {inventory.quantity > 0 ? (
                      <p className="inline-flex rounded-full bg-success bg-opacity-10 px-3 py-1 text-sm font-medium text-success">
                        in stock
                      </p>
                    ) : (
                      <p className="inline-flex rounded-full bg-danger bg-opacity-10 px-3 py-1 text-sm font-medium text-danger">
                        out of stock
                      </p>
                    )}
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
                        className={`absolute right-0 top-full z-10 mt-1 w-full max-w-39.5 border border-stroke dark:border-strokedark rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark 
                        ${isOpen && isActiveId === inventory.id ? 'block' : 'hidden'}`}
                      >
                        <Link
                          href={`/dashboard/inventories/edit/${inventory.id}`}
                          className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4"
                        >
                          Edit
                        </Link>
                        <Link
                          href={`/dashboard/inventories/${inventory.id}`}
                          className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4"
                        >
                          Details
                        </Link>
                        <button
                          onClick={() => setIsDeleteModalOpen(true)}
                          className="flex w-full px-4 py-2 text-sm hover:bg-danger/10 hover:text-danger dark:hover:bg-meta-4"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Pagination meta={meta} pageBaseUrl='/dashboard/inventories' />
            {/* <!-- table body end --> */}
          </div>
        </div>
      </div>

      {/*  */}
      {isDeleteModalOpen ? (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          title={'Delete Inventory'}
          message={`Are you sure you want to delete this inventory? This action can't be reversed.`}
          isLoading={processing}
          onConfirm={handleDeleteInventory}
        />
      ) : null}
    </>
  )
}
