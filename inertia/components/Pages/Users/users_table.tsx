import { ModelPagination } from '#interfaces/model.interface'
import type Role from '#models/role'
import type User from '#models/user'
import { router, usePage } from '@inertiajs/react'
import debounce from 'lodash.debounce'
import { ChevronDownIcon } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import TableSearchAndFilterComponent from '~/components/Global/table_search_and_filter_component'
import Pagination from '~/components/Pagination/Pagination'

export const UsersTable = ({
  setIsUserDetailsModalOpen,
  setIsChangeUserRoleModalOpen,
  setUser,
  setIsDeleteUserModalOpen,
  users,
}: {
  setIsUserDetailsModalOpen: Dispatch<SetStateAction<boolean>>
  setIsChangeUserRoleModalOpen: Dispatch<SetStateAction<boolean>>
  setUser: Dispatch<SetStateAction<User | undefined>>
  setIsDeleteUserModalOpen: Dispatch<SetStateAction<boolean>>
  users: ModelPagination<User>
}) => {
  //
  const [isOpen, setIsOpen] = useState(false)
  const [isActiveId, setIsActiveId] = useState<number>()

  const { data, meta } = users

  //
  const handleSearchUsers = debounce((inputValue: string) => {
    router.get(`/dashboard/users?search=${inputValue.trim()}`, {}, { preserveState: true })
  }, 300)

  return (
    <>
      <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="gap-4 sm:flex items-center justify-between">
          <h4 className="mb-6 text-xl font-bold text-black dark:text-white">Users info</h4>
          <TableSearchAndFilterComponent onSearch={handleSearchUsers}>
            <></>
          </TableSearchAndFilterComponent>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 md:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">User name</h5>
            </div>
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Email</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5 hidden md:block">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Role</h5>
            </div>
            <div className="hidden md:block p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Date added</h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5>
            </div>
          </div>

          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-stroke dark:border-strokedark md:grid-cols-5"
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="font-medium text-black dark:text-white">{item.full_name}</p>
              </div>

              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="font-medium text-black dark:text-white">{item.email}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="hidden md:block font-medium text-black dark:text-white">
                  {item.roles[0]?.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="hidden md:block font-normal">
                  {new Date(item.created_at.toString()).toDateString()}
                </p>
              </div>

              <div className="items-center justify-center p-2.5 flex xl:p-5">
                <div className="col-span-1 relative">
                  <div>
                    <button
                      onClick={() => {
                        setIsOpen(!isOpen)
                        setIsActiveId(index)
                      }}
                      className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none"
                    >
                      Action
                      <ChevronDownIcon />
                    </button>

                    <div
                      className={`absolute right-0 top-full z-10 mt-1 w-36 border border-stroke dark:border-strokedark rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark 
                        ${isOpen && isActiveId === index ? 'block' : 'hidden'}`}
                    >
                      <button
                        onClick={() => {
                          setUser(item)
                          setIsUserDetailsModalOpen(true)
                        }}
                        className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => {
                          setUser(item)
                          setIsChangeUserRoleModalOpen(true)
                        }}
                        className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4"
                      >
                        Change role
                      </button>
                      <button
                        onClick={() => {
                          setUser(item)
                          setIsDeleteUserModalOpen(true)
                        }}
                        className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-danger dark:hover:bg-meta-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  */}
      <Pagination meta={meta} pageBaseUrl="/dashboard/users" />
    </>
  )
}
