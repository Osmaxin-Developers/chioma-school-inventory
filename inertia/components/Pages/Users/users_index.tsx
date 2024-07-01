import { PlusSquareIcon } from 'lucide-react'
import { UsersTable } from './users_table'

export const UsersIndex = () => {
  return (
    <div>
      {/*  */}
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <div>
          <h2 className="text-title-md font-bold text-black dark:text-white">Users</h2>
        </div>
        <button className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          <span>
            <PlusSquareIcon />
          </span>
          Add new user
        </button>
      </div>

      {/*  */}
      <UsersTable />
    </div>
  )
}
