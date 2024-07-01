import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import TableSearchAndFilterComponent from '~/components/Global/table_search_and_filter_component'

export const UsersTable = () => {
  //
  const [isOpen, setIsOpen] = useState(false)
  const [isActiveId, setIsActiveId] = useState<number>()

  return (
    <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="gap-4 sm:flex items-center justify-between">
        <h4 className="mb-6 text-xl font-bold text-black dark:text-white">Users info</h4>
        <TableSearchAndFilterComponent onSearch={() => {}}>
          <></>
        </TableSearchAndFilterComponent>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 md:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">User name</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Role</h5>
          </div>
          <div className="hidden md:block p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Date added</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5>
          </div>
        </div>

        {[...new Array(5)].map((item, index) => (
          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark md:grid-cols-4">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden font-medium text-black dark:text-white sm:block">Google</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="font-medium text-black dark:text-white">
                No.6 Amadike avenue, new town
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="font-normal">{new Date().toDateString()}</p>
            </div>

            <div className="items-center justify-center p-2.5 flex xl:p-5">
              <div className="col-span-1 relative">
                <div>
                  <button
                    onClick={() => {
                      setIsOpen(!isOpen)
                      setIsActiveId(index)
                    }}
                    className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none"
                  >
                    Action
                    <ChevronDownIcon />
                  </button>

                  <div
                    x-cloak
                    x-show="isOpen"
                    className={`absolute right-0 top-full z-10 mt-1 w-36 border border-stroke dark:border-strokedark rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark 
                        ${isOpen && isActiveId === index ? 'block' : 'hidden'}`}
                  >
                    <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                      Change role
                    </button>
                    <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-danger dark:hover:bg-meta-4">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
