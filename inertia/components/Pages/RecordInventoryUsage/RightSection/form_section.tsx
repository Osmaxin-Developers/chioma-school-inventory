import { Input } from '~/components/Global/FormComponents/input'

export const FormSection = () => {
  return (
    <form>
      <div className="mb-5.5 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Key Message
          </label>
          <textarea
            rows={5}
            placeholder="Key Message"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          ></textarea>
        </div>
        <div className="w-full xl:w-1/2">
          <Input name="receiver_name" label="Receiver name *" placeholder="Enter receiver name" />
          <Input
            name="receiver_location"
            label="Receiver Location *"
            placeholder="Enter receiver Location"
          />
        </div>
      </div>

      <button className="flex w-full justify-center capitalize rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
        Complete record
      </button>
    </form>
  )
}
