import { useForm } from '@inertiajs/react'
import { Loader } from 'lucide-react'
import React, { SetStateAction } from 'react'
import DefaultSelectInput from '~/components/Global/FormComponents/DefaultSelectInput'
import PopUpModal from '~/components/Global/Modal/pop_up_modal'

export const ChangeUserRoleModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
  //
  const { setData, processing, errors, post, reset, data } = useForm({
    role: '',
  })
  return (
    <PopUpModal title={'User Details'} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="min-h-[300px] px-4 pt-5 lg:px-6">
        <div className="w-full">
          <DefaultSelectInput
            name="role"
            label="User role"
            options={[
              { label: 'admin', value: 'admin' },
              { label: 'sales manager', value: 'manager' },
            ]}
            onChange={(value) => setData('role', value)}
            defaultValue={[{ label: 'admin', value: 'admin' }]}
            labelClassName="text-[18px]"
          />
        </div>

        <button
          onClick={() => console.log({ data })}
          className="flex w-full justify-center capitalize rounded bg-primary p-3 mt-8 font-medium text-gray hover:bg-opacity-90"
        >
          Change user role
          {processing ? <Loader className="animate-spin rotate-180" /> : null}
        </button>
      </div>
    </PopUpModal>
  )
}
