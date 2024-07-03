import { TransitionChild } from '@headlessui/react'
import { CheckIcon, MinusIcon, PlusIcon, XCircleIcon } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { inventories } from '~/base/dummy_data/inventories'
import { Input } from '~/components/Global/FormComponents/input'
import Modal from '~/components/Global/Modal/modal'

export const RecordReturnsModal = ({
  isModalOpen = false,
  setIsModalOpen,
}: {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}) => {
  //
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <Modal className="flex items-center justify-center px-10 z-99999" isOpen={isModalOpen}>
      <TransitionChild
        as="div"
        className={
          'w-full max-w-5xl max-h-[90%] overflow-y-auto rounded-md bg-white border border-zinc-300'
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
            Record returns{' '}
            <button
              onClick={() => setIsModalOpen(false)}
              className="group absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white border-zinc-200 border shadow-sm"
            >
              <XCircleIcon className="h-4 w-4 text-textColor300/80 group-hover:text-dangerColor/50" />
            </button>
          </div>
        </div>
        <div className=" px-5 lg:px-10 py-4 overflow-y-auto relative">
          {/*  */}
          <div>
            <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
              <div className="pb-3 gap-4 flex items-center justify-between">
                <h4 className="text-lg font-bold text-black dark:text-white">Items</h4>
                <div>
                  <label
                    htmlFor="checkboxLabelTwo"
                    className="flex cursor-pointer select-none items-center"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkboxLabelTwo"
                        className="sr-only"
                        onChange={() => {
                          setIsChecked(!isChecked)
                        }}
                      />
                      <div
                        className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                          isChecked && 'border-primary bg-gray dark:bg-transparent'
                        }`}
                      >
                        <span className={`opacity-0 ${isChecked && '!opacity-100'}`}>
                          <CheckIcon />
                        </span>
                      </div>
                    </div>
                    Return all
                  </label>
                </div>
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
                      <th className="px-4 py-4 font-medium text-black dark:text-white">Returns</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventories.slice(2).map((item) => (
                      <tr>
                        <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                          <div className="flex items-center flex-wrap gap-3">
                            <img
                              src="../../../../resources/images/product-image.jpg"
                              alt="profile"
                              className="h-7 w-7 object-cover object-center rounded-md"
                            />
                            <h5 className="font-medium text-black dark:text-white">Free Package</h5>
                          </div>
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          <p className="text-black dark:text-white font-medium">$0.00</p>
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          <p className="font-semibold flex-1">40</p>
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          <div className="max-w-[100px]">
                            <Input
                              name=""
                              type="number"
                              placeholder="Quantity"
                              className="py-1 px-2"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className=" px-5 lg:px-10 flex justify-end sticky bottom-0 bg-white border-b border-stroke dark:border-strokedark">
          <div className="grid sm:grid-cols-2 sm:gap-x-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="inline-flex items-center justify-center my-5 gap-2.5 rounded-md border border-primary px-7.5 py-2.5 text-center font-medium text-primary hover:bg-opacity-90"
            >
              Cancel
            </button>
            <button
              onClick={() => {}}
              className="my-5 inline-flex items-center justify-center gap-2.5 rounded bg-primary px-7.5 py-2.5 font-medium text-white hover:bg-opacity-90"
            >
              Record return
            </button>
          </div>
        </div>
      </TransitionChild>
    </Modal>
  )
}
