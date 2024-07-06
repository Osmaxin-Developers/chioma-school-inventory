import type UsagesInventory from '#models/usages_inventory'

export const ItemsListTable = ({ usageItems }: { usageItems: UsagesInventory[] }) => {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="min-w-[670px]">
        {/* <!-- table header start --> */}
        <div className="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark">
          <div className="col-span-3">
            <h5 className="font-medium text-black dark:text-white">Brand name</h5>
          </div>

          <div className="col-span-4">
            <h5 className="font-medium text-black dark:text-white">Description</h5>
          </div>

          <div className="col-span-2">
            <h5 className="font-medium text-black dark:text-white">Quantity</h5>
          </div>

          <div className="col-span-2">
            <h5 className="font-medium text-black dark:text-white">Price Per Unit</h5>
          </div>

          <div className="col-span-1">
            <h5 className="text-right font-medium text-black dark:text-white">Total</h5>
          </div>
        </div>
        {/* <!-- table header end --> */}

        {/* <!-- product item --> */}
        {usageItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-strokedark"
          >
            <div className="col-span-3 flex items-center flex-wrap gap-3">
              <img
                src={item.inventory.image_url ?? ''}
                alt="profile"
                className="h-7 w-7 object-cover object-center rounded-md"
              />
              <p className="font-medium">{item.inventory.name}</p>
            </div>

            <div className="col-span-4">
              <p className="font-medium">{item.inventory.description}</p>
            </div>

            <div className="col-span-2">
              <p className="font-medium">{item.quantity}</p>
            </div>

            <div className="col-span-2">
              <p className="font-medium">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'GBP',
                  maximumFractionDigits: 10,
                  currencyDisplay: 'symbol',
                }).format(Number(item.usage_price))}{' '}
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-right font-medium">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'GBP',
                  maximumFractionDigits: 10,
                  currencyDisplay: 'symbol',
                }).format(Number(item.usage_price) * item.quantity)}{' '}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
