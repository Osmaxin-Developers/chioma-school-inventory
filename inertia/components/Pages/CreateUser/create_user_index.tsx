import { CreateUserForm } from './CreateUserForm/create_user_form'

export const CreateUserIndex = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-md font-bold text-black dark:text-white">Add new user</h2>
        </div>
      </div>

      {/*  */}
      <CreateUserForm />
    </div>
  )
}
