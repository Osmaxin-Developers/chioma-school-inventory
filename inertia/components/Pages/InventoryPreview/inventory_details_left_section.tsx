import type Inventory from '../../../../app/models/inventory'

export const InventoryDetailsLeftSection = ({ inventory }: { inventory: Inventory }) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col">
        <h3 className="text-title-sm font-medium text-black dark:text-white">Name:</h3>
        <p className="text-lg">{inventory.name}</p>
      </div>
      {/*  */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <h3 className="text-title-sm font-medium text-black dark:text-white">Price:</h3>
          <p className="text-lg">${inventory.price}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-title-sm font-medium text-black dark:text-white">Quantity:</h3>
          <p className="text-lg">{inventory.quantity}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-title-sm font-medium text-black dark:text-white">Status:</h3>
          <p className={`text-lg inline-block font-medium text-success`}>in stock</p>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <h3 className="text-title-sm font-medium text-black dark:text-white">Added date:</h3>
          <p className="text-lg">{inventory.created_at.toString()}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-title-sm font-medium text-black dark:text-white">Updated date:</h3>
          <p className="text-lg">{inventory.updated_at.toString()}</p>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col mt-4">
        <h3 className="text-title-sm font-medium text-black dark:text-white">Description:</h3>
        <p className="text-md">{inventory.description}</p>
      </div>
    </div>
  )
}
