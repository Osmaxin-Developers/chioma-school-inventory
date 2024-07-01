import { useForm } from '@inertiajs/react'
import { Loader } from 'lucide-react'
import { useRef } from 'react'
import { toast } from 'sonner'
import { getFormError } from '~/base/libs/get_form_error'
import FileUpload from '~/components/Global/FileUpload/file_upload'
import { Input } from '~/components/Global/FormComponents/input'

export const AddInventoryForm = () => {
  //
  const { setData, processing, errors, post, reset } = useForm({
    name: '',
    price: '',
    quantity: '',
    inventory_photo: '' as any,
    description: '',
  })

  const formRef = useRef<HTMLFormElement>(null)

  const createInventory = (e: any) => {
    e.preventDefault()

    post('/inventories', {
      forceFormData: true,
      onSuccess: () => {
        toast('Inventory created successfully')
        reset()
        formRef.current?.reset()
      },
    })
  }

  return (
    <div className="flex flex-col gap-9">
      {/* <!-- Contact Form Two --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white text-title-xsm">
            Fill inventory details
          </h3>
        </div>
        <form ref={formRef} onSubmit={createInventory}>
          <div className="p-6.5">
            <div className="mb-5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <Input
                  name="name"
                  label="Inventory name *"
                  placeholder="Enter inventory name"
                  onChange={(e) => {
                    setData('name', e.target.value)
                  }}
                  errorMessage={getFormError(errors.name as string)}
                />
              </div>

              <div className="w-full xl:w-1/2">
                <Input
                  name="quantity"
                  label="Inventory quantity *"
                  placeholder="Enter inventory quantity"
                  onChange={(e) => setData('quantity', e.target.value)}
                  errorMessage={getFormError(errors.quantity as string)}
                />
              </div>
            </div>

            <div className="mb-5.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full">
                <Input
                  name="price"
                  label="Inventory price *"
                  placeholder="Enter inventory price"
                  type="number"
                  onChange={(e) => setData('price', e.target.value)}
                  errorMessage={getFormError(errors.price as string)}
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
                  name="description"
                  placeholder="Description"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  onChange={(e) => setData('description', e.target.value)}
                ></textarea>

                <p className="absolute left-0 right-0 -bottom-5 text-right text-sm text-danger">
                  {getFormError(errors.description as string)}
                </p>
              </div>
              <div className="w-full xl:w-1/2">
                <FileUpload
                  label="inventory image"
                  name="inventory_photo"
                  onChange={(files) => {
                    setData('inventory_photo', files)
                  }}
                  errorMessage={getFormError(errors.inventory_photo as string)}
                />
              </div>
            </div>

            <button className="flex w-full justify-center capitalize rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Add new inventory
              {processing ? <Loader className="animate-spin rotate-180" /> : null}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
