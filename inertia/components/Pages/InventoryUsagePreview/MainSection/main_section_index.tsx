import type Usage from '#models/usage'
import { HistoryIcon, RecycleIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { BillingAddressSection } from './billing_address_section'
import { IssuedDateSection } from './issued_date_section'
import { ItemsListTable } from './items_list_table'

export const MainSectionIndex = ({
  setIsRecordReturnsModalOpen,
  setIsRecordHistoryModalOpen,
  usageData,
}: {
  setIsRecordReturnsModalOpen: Dispatch<SetStateAction<boolean>>
  setIsRecordHistoryModalOpen: Dispatch<SetStateAction<boolean>>
  usageData: Usage
}) => {
  //
  const totalAmount = usageData.usagesInventories.reduce(
    (acc, curr) => acc + curr.quantity * Number(curr.usage_price),
    0
  )

  return (
    <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-4 sm:p-6 xl:p-9">
        {/*  */}
        <BillingAddressSection usageData={usageData} />

        {/*  */}
        <IssuedDateSection usageData={usageData} totalAmount={totalAmount} />

        <div className="border border-stroke dark:border-strokedark">
          {/*  */}
          <ItemsListTable usageItems={usageData.usagesInventories} />

          {/* <!-- total price start --> */}
          <div className="flex justify-end p-6">
            <div className="w-full max-w-115">
              <div className="flex flex-col gap-4">
                <p className="flex justify-between font-medium text-black dark:text-white">
                  <span> Total quantity </span>
                  <span> {Number(usageData.inventories_quantity)} </span>
                </p>
              </div>

              <p className="mt-4 flex justify-between border-t border-stroke pt-5 dark:border-strokedark">
                <span className="font-medium text-black dark:text-white">Total amount</span>
                <span className="font-bold text-meta-3">
                  {' '}
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'GBP',
                    maximumFractionDigits: 10,
                    currencyDisplay: 'symbol',
                  }).format(totalAmount)}{' '}
                </span>
              </p>

              <div className="grid sm:grid-cols-2 sm:gap-x-8">
                <button
                  onClick={() => setIsRecordHistoryModalOpen(true)}
                  className="inline-flex items-center justify-center mt-10 gap-2.5 rounded-md border border-primary px-7.5 py-2.5 text-center font-medium text-primary hover:bg-opacity-90"
                >
                  <span>
                    <HistoryIcon />
                  </span>
                  Return history
                </button>
                <button
                  onClick={() => setIsRecordReturnsModalOpen(true)}
                  className="mt-10 inline-flex items-center justify-center gap-2.5 rounded bg-primary px-7.5 py-2.5 font-medium text-white hover:bg-opacity-90"
                >
                  <RecycleIcon />
                  Record return
                </button>
              </div>
            </div>
          </div>
          {/* <!-- total price end --> */}
        </div>
      </div>
    </div>
  )
}
