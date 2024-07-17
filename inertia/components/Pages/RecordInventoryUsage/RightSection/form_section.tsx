import type Inventory from '#models/inventory'
import { router, useForm } from '@inertiajs/react'
import { LoaderIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { Input } from '~/components/Global/FormComponents/input'

interface IInventory extends Inventory {
  addedQuantity?: number
}
interface AddedInventory {
  id: number
  quantity: number | undefined
}

type Errors = Partial<
  Record<'inventories' | 'description' | 'receiver_location' | 'receiver_name', string>
>

export const FormSection = ({ inventories }: { inventories: IInventory[] }) => {
  //
  const { processing, post, setData, errors } = useForm({
    description: '',
    receiver_name: '',
    receiver_location: '',
    inventories: [] as AddedInventory[],
  })

  const formRef = useRef<HTMLFormElement>(null)

  const createInventoryUsage = (e: any) => {
    e.preventDefault()
    //
    post('/usages', {
      forceFormData: true,
      onSuccess: () => {
        toast.success('Usage recorded successfully')
        router.visit('/dashboard/record-inventory-usage')
      },
      onError: () => {
        //
        const errorTypes: Array<keyof Errors> = [
          'receiver_location',
          'description',
          'receiver_name',
          'inventories',
        ]

        let errorMessage = 'Something went wrong!'
        for (const errorType of errorTypes) {
          if (errors[errorType]) {
            errorMessage = errors[errorType]![0]
            break
          }
        }

        toast.error(errorMessage)
      },
    })
  }

  useEffect(() => {
    const addedInventories = inventories.map((inv) => ({
      id: inv.id,
      quantity: inv.addedQuantity,
    }))

    setData('inventories', addedInventories)
  }, [inventories])

  return (
    <form ref={formRef} onSubmit={createInventoryUsage}>
      <div className="mb-5.5 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Key Message
          </label>
          <textarea
            rows={5}
            placeholder="Key Message"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={(e) => setData('description', e.target.value)}
          ></textarea>
        </div>
        <div className="w-full xl:w-1/2">
          <Input
            name="receiver_name"
            label="Receiver name *"
            placeholder="Enter receiver name"
            onChange={(e) => setData('receiver_name', e.target.value)}
          />
          <Input
            name="receiver_location"
            label="Receiver Location *"
            placeholder="Enter receiver Location"
            onChange={(e) => setData('receiver_location', e.target.value)}
          />
        </div>
      </div>

      <button className="flex w-full justify-center items-center capitalize rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
        Complete record
        {processing ? <LoaderIcon size={18} className="animate-spin ml-2" /> : null}
      </button>
    </form>
  )
}
