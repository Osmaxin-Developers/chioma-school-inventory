import type Usage from '#models/usage'
import { TransitionChild } from '@headlessui/react'
import { XCircleIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import Modal from '~/components/Global/Modal/modal'
import TableSearchAndFilterComponent from '~/components/Global/table_search_and_filter_component'

export const ReturnsHistoryModal = ({
  isModalOpen = false,
  setIsModalOpen,
  usageData,
}: {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  usageData: Usage
}) => {
  //
  const { usagesRefunds: returnHistory } = usageData
  //
  return (
    <Modal className="flex items-center justify-center px-10 z-99999" isOpen={isModalOpen}>
      <TransitionChild
        as="div"
        className={
          'w-full max-w-5xl min-h-[500px] max-h-[90%] overflow-y-auto rounded-md bg-white border border-zinc-300'
        }
        enter="transform transition duration-[350ms] ease-out"
        enterFrom=" opacity-0"
        enterTo="opacity-1"
        leave="transform transition duration-[350ms] ease-out"
        leaveFrom="opacity-1"
        leaveTo=" opacity-0"
      >
        <div className="sticky top-0 z-20">
          <div className="relative bg-grayColor100 px-10 py-5 text-center text-xl font-medium capitalize text-textColor500">
            Return history{' '}
            <button
              onClick={() => setIsModalOpen(false)}
              className="group absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white border-zinc-200 border shadow-sm"
            >
              <XCircleIcon className="h-4 w-4 text-textColor300/80 group-hover:text-dangerColor/50" />
            </button>
          </div>
        </div>
        {/*  */}
        {returnHistory.length > 0 ? (
          <div className=" px-5 lg:px-10 py-4 overflow-y-auto relative">
            {/*  */}
            <div>
              <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="gap-4 mb-8 sm:flex items-center justify-between">
                  <h4 className="text-xl font-bold text-black dark:text-white">Items</h4>
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
                        <th className="px-4 py-4 font-medium text-black dark:text-white">
                          Quantity
                        </th>
                        <th className="px-4 py-4 font-medium text-black dark:text-white">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {returnHistory.map((item) => (
                        <tr>
                          <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                            <div className="flex items-center flex-wrap gap-3">
                              <img
                                src={item.inventory.image_url ?? ''}
                                alt="profile"
                                className="h-7 w-7 object-cover object-center rounded-md"
                              />
                              <h5 className="font-medium text-black dark:text-white">
                                {item.inventory.name}
                              </h5>
                            </div>
                          </td>
                          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                            <p className="text-black dark:text-white font-medium">
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'GBP',
                                maximumFractionDigits: 10,
                                currencyDisplay: 'symbol',
                              }).format(item.inventory.price)}
                            </p>
                          </td>
                          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                            <p className="font-semibold flex-1">{item.quantity}</p>
                          </td>
                          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                            <p className="font-semibold flex-1">
                              {new Date(item.created_at.toString()).toDateString()}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/*  */}
        {!returnHistory.length ? (
          <div className="flex mt-20 items-center justify-center">
            <p>No return history</p>
          </div>
        ) : null}
      </TransitionChild>
    </Modal>
  )
}
