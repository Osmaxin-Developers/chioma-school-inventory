export const BillingAddressSection = () => {
  return (
    <div className="flex flex-wrap justify-between gap-5">
      <div>
        <p className="mb-1.5 font-medium text-black dark:text-white">Billing From:</p>
        <h4 className="mb-3 text-xl font-bold text-black dark:text-white">Super Technologies</h4>
        <a href="#" className="block">
          <span className="font-medium text-black dark:text-white">Email:</span>
          contact@example.com
        </a>
        <span className="mt-1.5 block">
          <span className="font-medium text-black dark:text-white">Address:</span>
          2972 Westheimer Rd. Santa Ana.
        </span>
      </div>

      <div className="max-w-150">
        <p className="mb-1.5 font-medium text-black dark:text-white">Billing To:</p>
        <h4 className="mb-3 text-xl font-bold text-black dark:text-white">Devid wilium</h4>
        <span className="mt-1.5 block">
          <span className="font-medium text-black dark:text-white">Location: </span>
          New York, USA 2707 Davis Anenue
        </span>
        <span className="mt-1.5 block">
          <span className="font-medium text-black dark:text-white">Key Message: </span>
          New York, USA 2707 Davis Anenue
        </span>
      </div>
    </div>
  )
}
