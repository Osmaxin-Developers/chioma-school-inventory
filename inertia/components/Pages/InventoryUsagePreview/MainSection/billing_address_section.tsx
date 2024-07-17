import type Usage from '#models/usage'

export const BillingAddressSection = ({ usageData }: { usageData: Usage }) => {
  //
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
        <h4 className="mb-3 text-xl font-bold text-black dark:text-white capitalize">
          {usageData.receiver_name}
        </h4>
        <span className="mt-1.5 block">
          <span className="font-medium text-black dark:text-white">Location: </span>
          {usageData.receiver_location}
        </span>
        <span className="mt-1.5 block">
          <span className="font-medium text-black dark:text-white">Key Message: </span>
          {usageData.description}
        </span>
      </div>
    </div>
  )
}
