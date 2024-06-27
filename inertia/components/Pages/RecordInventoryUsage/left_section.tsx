import { SearchIcon } from 'lucide-react'
import { inventories } from '~/base/dummy_data/inventories'
import { Input } from '~/components/Global/FormComponents/input'

export const LeftSection = () => {
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
          />
        </div>
      </div>
      {/*  */}
      <div className="overflow-y-auto px-4 pb-4">
        {[...inventories, ...inventories].map((item) => (
          <div className="mb-5 flex cursor-pointer items-center rounded px-4 py-2 bg-gray dark:bg-strokedark">
            <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-xl overflow-hidden">
              <img
                src="../../../../resources/images/product-image.jpg"
                alt="profile"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="w-full">
              <h5 className="text-sm font-medium text-black dark:text-white">Name:</h5>
              <p className="text-sm font-medium">I cam across your profile and...</p>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <div>
                  <h5 className="text-sm font-medium text-black dark:text-white">Quantity:</h5>
                  <p className="text-sm font-medium">4</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-black dark:text-white">Price:</h5>
                  <p className="text-sm font-medium">4000</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
