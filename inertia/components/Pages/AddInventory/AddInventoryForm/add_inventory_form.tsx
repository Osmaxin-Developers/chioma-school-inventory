import { useForm } from '@inertiajs/react'
import { getFormError } from '~/base/libs/get_form_error'
import FileUpload from '~/components/Global/FileUpload/file_upload'
import { File } from '~/components/Global/FileUpload/ifile'
import { Input } from '~/components/Global/FormComponents/input'

export const AddInventoryForm = () => {
  //
  const { setData, data, processing, errors, post } = useForm({
    inventory_name: '',
    inventory_price: '',
    inventory_quantity: '',
    inventory_avatar: '' as any,
  })

  return (
    <>
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form Two --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white text-title-xsm">
              Fill inventory details
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">
              <div className="mb-5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <Input
                    name="inventory_name"
                    label="Inventory name *"
                    placeholder="Enter inventory name"
                    onChange={(e) => setData('inventory_name', e.target.value)}
                    errorMessage={getFormError(errors.inventory_name as string)}
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <Input
                    name="inventory_quantity"
                    label="Inventory quantity *"
                    placeholder="Enter inventory quantity"
                    onChange={(e) => setData('inventory_quantity', e.target.value)}
                    errorMessage={getFormError(errors.inventory_quantity as string)}
                  />
                </div>
              </div>

              <div className="mb-5.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                  <Input
                    name="inventory_price"
                    label="Inventory price *"
                    placeholder="Enter inventory price"
                    type="number"
                    onChange={(e) => setData('inventory_price', e.target.value)}
                    errorMessage={getFormError(errors.inventory_price as string)}
                  />
                </div>
              </div>

              <div className="mb-5.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Description
                  </label>
                  <textarea
                    rows={7}
                    placeholder="Description"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>
                <div className="w-full xl:w-1/2">
                  <FileUpload
                    label="inventory image"
                    name="inventory_image"
                    onChange={(files: File[]) => setData('inventory_avatar', files)}
                    errorMessage={getFormError(errors.inventory_avatar as string)}
                  />
                </div>
              </div>

              <button className="flex w-full justify-center capitalize rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Add new inventory
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
