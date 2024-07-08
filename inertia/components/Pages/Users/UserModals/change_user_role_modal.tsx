import type Role from '#models/role'
import type User from '#models/user'
import { useForm } from '@inertiajs/react'
import { Loader } from 'lucide-react'
import React, { SetStateAction } from 'react'
import { toast } from 'sonner'
import { restructureSelectInputData } from '~/base/libs/restructureSelectInputData'
import DefaultSelectInput from '~/components/Global/FormComponents/DefaultSelectInput'
import PopUpModal from '~/components/Global/Modal/pop_up_modal'

export const ChangeUserRoleModal = ({
  isModalOpen,
  setIsModalOpen,
  user,
  roles,
}: {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
  user: User
  roles: Role[]
}) => {
  //
  const { setData, processing, errors, patch } = useForm({
    role_id: user.roles[0].id,
    user_id: user.id,
  })

  const changeUserRole = (e: any) => {
    e.preventDefault()

    patch('/dashboard/users/change-role', {
      onSuccess: () => {
        toast.success('User role changed successfully', { style: { color: 'green' } })
        setIsModalOpen(false)
      },
      onError: () => {
        toast.error('Something went wrong!', { style: { color: 'red' } })
      },
    })
  }

  return (
    <PopUpModal title={'User Details'} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <form onSubmit={changeUserRole} className="min-h-[300px] px-4 pt-5 lg:px-6">
        <div className="w-full">
          <DefaultSelectInput
            name="role"
            label="User role"
            options={[...restructureSelectInputData(roles)]}
            onChange={(value: { id: number; value: number; label: string }) =>
              setData('role_id', value.id)
            }
            defaultValue={[{ label: user.roles[0].name, value: user.roles[0].id }]}
            labelClassName="text-[18px]"
          />
        </div>

        <button className="flex w-full justify-center items-center capitalize rounded bg-primary p-3 mt-8 font-medium text-gray hover:bg-opacity-90">
          Change user role
          {processing ? <Loader size={18} className="animate-spin rotate-180 ml-2" /> : null}
        </button>
      </form>
    </PopUpModal>
  )
}
