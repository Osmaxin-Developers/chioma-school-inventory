import { ModelPagination } from '#interfaces/model.interface'
import type Usage from '#models/usage'
import { Link, router, usePage } from '@inertiajs/react'
import debounce from 'lodash.debounce'
import { EyeIcon } from 'lucide-react'
import TableSearchAndFilterComponent from '~/components/Global/table_search_and_filter_component'
import Pagination from '~/components/Pagination/Pagination'

export const UsagesTable = () => {
  //
  const { usages } = usePage<{ usages: ModelPagination<Usage> }>().props

  const { data, meta } = usages

  //
  const handleSearchUsages = debounce((inputValue: string) => {
    router.get(
      `/dashboard/inventory-usages?search=${inputValue.trim()}`,
      {},
      { preserveState: true }
    )
  }, 300)

  console.log(data)

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="gap-4 sm:flex items-center justify-between">
          <h4 className="mb-6 text-xl font-bold text-black dark:text-white">Details</h4>
          <TableSearchAndFilterComponent onSearch={handleSearchUsages}>
            <></>
          </TableSearchAndFilterComponent>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Receiver name</h5>
            </div>
            <div className="hidden sm:block p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Location</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Items</h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Total amount</h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Date</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">View</h5>
            </div>
          </div>

          {[...data].map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6"
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="hidden font-medium text-black dark:text-white sm:block">
                  {item.receiver_name}
                </p>
              </div>

              <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-black dark:text-white">
                  {item.receiver_location ?? 'N/A'}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-meta-3">{item.inventories_count}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="font-medium text-meta-5">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'GBP',
                    maximumFractionDigits: 10,
                    currencyDisplay: 'symbol',
                  }).format(
                    item.usagesInventories.reduce((acc, curr) => acc + Number(curr.total_price), 0)
                  )}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="font-medium text-black dark:text-white">
                  {new Date(item.created_at.toString()).toDateString()}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <Link
                  href={`/dashboard/inventory-usages/${item.id}`}
                  className="hover:bg-primary/20 rounded-full p-1 transition-all"
                >
                  <EyeIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <Pagination meta={meta} pageBaseUrl="/dashboard/inventory-usages" />
    </>
  )
}
