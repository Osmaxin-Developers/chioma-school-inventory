import { BoxIcon } from 'lucide-react'
import { Input } from '~/components/Global/FormComponents/input'
import { ItemsSection } from './items_section'

export const RightSection = () => {
  const isShow = true
  return (
    <div className="xl:col-span-5 md:col-span-3 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
      {isShow ? (
        <>
          {/* items section */}
          <div className="mb-8">
            <ItemsSection />
          </div>
          {/* form section */}
          <form>
            <div className="mb-5.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Key Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Key Message"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
              <div className="w-full xl:w-1/2">
                <Input
                  name="receiver_name"
                  label="Receiver name *"
                  placeholder="Enter receiver name"
                />
                <Input
                  name="receiver_location"
                  label="Receiver Location *"
                  placeholder="Enter receiver Location"
                />
              </div>
            </div>

            <button className="flex w-full justify-center capitalize rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Complete record
            </button>
          </form>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <BoxIcon size={30} />
          <p className="capitalize text-lg">select an item to record usage</p>
        </div>
      )}
    </div>
  )
}
