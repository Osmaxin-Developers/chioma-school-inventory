import type Usage from '#models/usage'

export const IssuedDateSection = ({
  usageData,
  totalAmount,
}: {
  usageData: Usage
  totalAmount: number
}) => {
  //

  return (
    <div className="my-7.5 grid grid-cols-1 border border-stroke dark:border-strokedark xsm:grid-cols-2 sm:grid-cols-4">
      <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark sm:border-b-0">
        <h5 className="mb-1.5 font-bold text-black dark:text-white">Usage ID :</h5>
        <span className="text-sm font-medium"> #STK83084398239 </span>
      </div>

      <div className="border-b border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark sm:border-b-0 sm:border-r">
        <h5 className="mb-1.5 font-bold text-black dark:text-white">Date Issued :</h5>
        <span className="text-sm font-medium">
          {' '}
          {new Date(usageData.created_at.toString()).toDateString()}{' '}
        </span>
      </div>

      <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark xsm:border-b-0">
        <h5 className="mb-1.5 font-bold text-black dark:text-white">Total Quantity :</h5>
        <span className="text-sm font-medium"> {Number(usageData.inventories_quantity)} </span>
      </div>

      <div className="border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark">
        <h5 className="mb-1.5 font-bold text-black dark:text-white">Total Amount :</h5>
        <span className="text-sm font-medium">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'GBP',
            maximumFractionDigits: 10,
            currencyDisplay: 'symbol',
          }).format(totalAmount)}{' '}
        </span>
      </div>
    </div>
  )
}
