import React, { SetStateAction } from 'react'
import PopUpModal from '~/components/Global/Modal/pop_up_modal'

export const UserDetailsModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <PopUpModal title={'User Details'} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="min-h-[350px]">
        <div className="border-b border-stroke px-5 py-4 dark:border-strokedark sm:flex items-center justify-between gap-5">
          <h5 className="mb-1.5 font-bold text-black dark:text-white">User Name :</h5>
          <span className="text-sm font-medium"> Emeka ofor </span>
        </div>
        {/*  */}
        <div className="border-b border-stroke px-5 py-4 dark:border-strokedark sm:flex items-center justify-between gap-5">
          <h5 className="mb-1.5 font-bold text-black dark:text-white">User Email :</h5>
          <span className="text-sm font-medium"> Emeka@ofor.com </span>
        </div>
        {/*  */}
        <div className="border-b border-stroke px-5 py-4 dark:border-strokedark sm:flex items-center justify-between gap-5">
          <h5 className="mb-1.5 font-bold text-black dark:text-white">User Role :</h5>
          <span className="text-sm font-medium"> Admin </span>
        </div>
        {/*  */}
        <div className="border-b border-stroke px-5 py-4 dark:border-strokedark sm:flex items-center justify-between gap-5">
          <h5 className="mb-1.5 font-bold text-black dark:text-white">Password :</h5>
          <span className="text-sm font-medium"> Emeka ofor </span>
        </div>
        {/*  */}
        <div className="px-5 py-4  sm:flex items-center justify-between gap-5">
          <h5 className="mb-1.5 font-bold text-black dark:text-white">Added date :</h5>
          <span className="text-sm font-medium"> {new Date().toDateString()} </span>
        </div>
      </div>
    </PopUpModal>
  )
}
