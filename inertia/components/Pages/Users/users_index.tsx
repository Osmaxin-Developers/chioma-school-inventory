import { ModelPagination } from '#interfaces/model.interface'
import type Role from '#models/role'
import type User from '#models/user'
import { Link, useForm, usePage } from '@inertiajs/react'
import { PlusSquareIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import DeleteModal from '~/components/Global/Modal/delete_modal'
import { ChangeUserRoleModal } from './UserModals/change_user_role_modal'
import { UserDetailsModal } from './UserModals/user_details_modal'
import { UsersTable } from './users_table'

export const UsersIndex = () => {
  //
  const { users, roles } = usePage<{ users: ModelPagination<User>; roles: Role[] }>().props
  //
  const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false)
  const [isChangeUserRoleModalOpen, setIsChangeUserRoleModalOpen] = useState(false)
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false)
  //
  const [user, setUser] = useState<User>()
  //
  const { delete: deleteUser, processing } = useForm()

  //
  const handleDeleteUser = () =>
    deleteUser(`/dashboard/users/${user?.id}`, {
      onSuccess: () => {
        setIsDeleteUserModalOpen(false)
        toast.success('User deleted successfully', { style: { color: 'green' } })
      },
    })

  return (
    <>
      <div>
        {/*  */}
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div>
            <h2 className="text-title-md font-bold text-black dark:text-white">Users</h2>
          </div>
          <Link
            href="/dashboard/users/create"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            <span>
              <PlusSquareIcon />
            </span>
            Add new user
          </Link>
        </div>

        {/*  */}
        <UsersTable
          setIsUserDetailsModalOpen={setIsUserDetailsModalOpen}
          setIsChangeUserRoleModalOpen={setIsChangeUserRoleModalOpen}
          setUser={setUser}
          setIsDeleteUserModalOpen={setIsDeleteUserModalOpen}
          users={users}
        />
      </div>

      {/*  */}
      {isUserDetailsModalOpen ? (
        <UserDetailsModal
          isModalOpen={isUserDetailsModalOpen}
          setIsModalOpen={setIsUserDetailsModalOpen}
          user={user}
        />
      ) : null}

      {/*  */}
      {isChangeUserRoleModalOpen ? (
        <ChangeUserRoleModal
          isModalOpen={isChangeUserRoleModalOpen}
          setIsModalOpen={setIsChangeUserRoleModalOpen}
          user={user as User}
          roles={roles}
        />
      ) : null}

      {/*  */}
      {isDeleteUserModalOpen ? (
        <DeleteModal
          isOpen={isDeleteUserModalOpen}
          onClose={() => setIsDeleteUserModalOpen(false)}
          title={'Delete User'}
          message={`Are you sure you want to delete this user? This action can't be reversed.`}
          isLoading={processing}
          onConfirm={handleDeleteUser}
        />
      ) : null}
    </>
  )
}
