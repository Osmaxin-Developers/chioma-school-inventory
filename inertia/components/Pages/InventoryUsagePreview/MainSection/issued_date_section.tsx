export const IssuedDateSection = () => {
  return (
    <div className="my-7.5 grid grid-cols-1 border border-stroke dark:border-strokedark xsm:grid-cols-2 sm:grid-cols-4">
      <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark sm:border-b-0">
        <h5 className="mb-1.5 font-bold text-black dark:text-white">Usage ID :</h5>
        <span className="text-sm font-medium"> #STK83084398239 </span>
      </div>

      <div className="border-b border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark sm:border-b-0 sm:border-r">
        <h5 className="mb-1.5 font-bold text-black dark:text-white">Date Issued :</h5>
        <span className="text-sm font-medium"> 29, Nov 2027 </span>
      </div>

      <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark xsm:border-b-0">
        <h5 className="mb-1.5 font-bold text-black dark:text-white">Total Quantity :</h5>
        <span className="text-sm font-medium"> 27 </span>
      </div>

      <div className="border-r border-stroke px-5 py-4 last:border-r-0 dark:border-strokedark">
        <h5 className="mb-1.5 font-bold text-black dark:text-white">Total Amount :</h5>
        <span className="text-sm font-medium"> $2,578.90 </span>
      </div>
    </div>
  )
}
