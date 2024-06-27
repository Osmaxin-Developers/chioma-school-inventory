import { AddInventoryForm } from './AddInventoryForm/add_inventory_form'

export const AddInventoryIndex = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-md font-bold text-black dark:text-white">Add new inventory</h2>
        </div>
      </div>

      {/*  */}
      <AddInventoryForm />
    </div>
  )
}
