import type Role from '#models/role'
import { useForm, usePage } from '@inertiajs/react'
import { Loader } from 'lucide-react'
import { useRef } from 'react'
import { toast } from 'sonner'
import { getFormError } from '~/base/libs/get_form_error'
import { restructureSelectInputData } from '~/base/libs/restructureSelectInputData'
import DefaultSelectInput from '~/components/Global/FormComponents/DefaultSelectInput'
import { Input } from '~/components/Global/FormComponents/input'

export const CreateUserForm = () => {
  //
  const { roles } = usePage<{ roles: Role[] }>().props
  //
  const { setData, processing, errors, post, reset } = useForm({
    full_name: '',
    email: '',
    password: '',
    role_id: '' as number | string,
  })

  const formRef = useRef<HTMLFormElement>(null)

  const createUser = (e: any) => {
    e.preventDefault()

    post('/dashboard/users/create', {
      onSuccess: () => {
        toast.success('User created successfully', {style:{color:'green'}})
        reset()
        formRef.current?.reset()
      },
      onError: () => {
        toast.error('Something went wrong!')
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
        <form ref={formRef} onSubmit={createUser}>
          <div className="p-6.5">
            <div className="mb-5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <Input
                  name="username"
                  label="User name *"
                  placeholder="Enter User name"
                  onChange={(e) => {
                    setData('full_name', e.target.value)
                  }}
                  errorMessage={getFormError(errors.full_name as string)}
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
              <div className="w-full xl:w-1/2 relative">
                <DefaultSelectInput
                  name="role_id"
                  label="User role"
                  options={[...restructureSelectInputData(roles)]}
                  onChange={(value: { id: number; value: number; label: string }) =>
                    setData('role_id', value.id)
                  }
                />
                <p className="absolute left-0 right-0 -bottom-1 text-right text-sm text-danger">
                  {getFormError(errors.role_id as string)}
                </p>
              </div>
            </div>

            <button className="flex w-full justify-center items-center capitalize rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Add new user
              {processing ? <Loader size={18} className="animate-spin rotate-180 ml-2" /> : null}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
