import { Link } from '@inertiajs/react'
import { PlusSquareIcon } from 'lucide-react'
import { InventoryTable } from '~/components/Global/inventory_table'

export const InventoriesIndex = () => {
  //

  return (
    <div>
      {/*  */}
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-0">
        <Link
          href="/dashboard/inventories/add"
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>
            <PlusSquareIcon />
          </span>
          Add new inventory
        </Link>
      </div>
      {/*  */}
      <InventoryTable />
    </div>
  )
}
