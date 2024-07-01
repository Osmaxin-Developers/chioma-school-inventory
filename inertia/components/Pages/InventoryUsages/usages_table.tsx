import { EyeIcon } from 'lucide-react'
import TableSearchAndFilterComponent from '~/components/Global/table_search_and_filter_component'

export const UsagesTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="gap-4 sm:flex items-center justify-between">
        <h4 className="mb-6 text-xl font-bold text-black dark:text-white">Details</h4>
        <TableSearchAndFilterComponent onSearch={() => {}}>
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

        {[...new Array(5)].map((item, index) => (
          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden font-medium text-black dark:text-white sm:block">Google</p>
            </div>

            <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
              <p className="font-medium text-black dark:text-white">
                No.6 Amadike avenue, new town
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="font-medium text-meta-3">98</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="font-medium text-meta-5">$5,768</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="font-medium text-black dark:text-white">{new Date().toDateString()}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <button className="hover:bg-primary/20 rounded-full p-1 transition-all">
                <EyeIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
