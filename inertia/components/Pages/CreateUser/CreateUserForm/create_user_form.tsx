import { useForm } from '@inertiajs/react'
import { Loader } from 'lucide-react'
import { useRef } from 'react'
import { toast } from 'sonner'
import { getFormError } from '~/base/libs/get_form_error'
import FileUpload from '~/components/Global/FileUpload/file_upload'
import DefaultSelectInput from '~/components/Global/FormComponents/DefaultSelectInput'
import { Input } from '~/components/Global/FormComponents/input'

export const CreateUserForm = () => {
  //
  const { setData, processing, errors, post, reset } = useForm({
    username: '',
    email: '',
    password: '',
    role: '' as any,
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
            Fill user details
          </h3>
        </div>
        <form ref={formRef} onSubmit={createInventory}>
          <div className="p-6.5">
            <div className="mb-5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <Input
                  name="username"
                  label="User name *"
                  placeholder="Enter User name"
                  onChange={(e) => {
                    setData('username', e.target.value)
                  }}
                  errorMessage={getFormError(errors.username as string)}
                />
              </div>

              <div className="w-full xl:w-1/2">
                <Input
                  name="email"
                  label="User email"
                  placeholder="Enter user email"
                  type="email"
                  onChange={(e) => setData('email', e.target.value)}
                  errorMessage={getFormError(errors.email as string)}
                />
              </div>
            </div>

            <div className="mb-5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <Input
                  name="password"
                  label="User password *"
                  placeholder="Enter user password"
                  type="text"
                  onChange={(e) => setData('password', e.target.value)}
                  errorMessage={getFormError(errors.password as string)}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <DefaultSelectInput
                  name="role"
                  label="User role"
                  options={[
                    { label: 'admin', value: 'admin' },
                    { label: 'sales manager', value: 'manager' },
                  ]}
                  onChange={(value) => setData('role', value)}
                />
              </div>
            </div>

            <button className="flex w-full justify-center capitalize rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Add new user
              {processing ? <Loader className="animate-spin rotate-180" /> : null}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
