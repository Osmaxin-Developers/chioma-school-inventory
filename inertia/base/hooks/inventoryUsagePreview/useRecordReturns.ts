import type Usage from '#models/usage'
import type UsagesInventory from '#models/usages_inventory'
import { router, useForm } from '@inertiajs/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'sonner'

interface IReturn {
  id: number
  quantity: number
}

export const useRecordReturns = (usageData: Usage) => {
  const { usagesInventories } = usageData
  //
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isErrorId, setIsErrorId] = useState<number>()
  //
  const [selectedReturns, setSelectedReturns] = useState<IReturn[]>([])

  //
  const { processing, post, setData } = useForm({
    usage_inventories: [] as IReturn[],
    usage_id: usageData.id,
  })

  //
  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>, item: UsagesInventory) => {
    //
    if (Number(e.target.value) > item.quantity || Number(e.target.value) <= 0) {
      setIsErrorId(item.id)
      return
    }
    setIsErrorId(0)
    //
    setSelectedReturns((oldValues) => {
      // Ensure oldValues is an array
      const items = oldValues ? [...oldValues] : []
      const itemIdex = items.findIndex((inv) => inv.id === item.id)

      if (itemIdex === -1) {
        // Add the new item
        items.push({ id: item.id, quantity: Number(e.target.value) })
      } else {
        // Update the existing item
        const updatedItem = { id: item.id, quantity: Number(e.target.value) }
        items.splice(itemIdex, 1, updatedItem)
      }

      setData('usage_inventories', items)
      return items
    })
  }

  //
  const recordReturns = () => {
    //
    post('/usage-refunds', {
      onSuccess: () => {
        toast.success('Returns recorded successfully')
        router.visit(`/dashboard/inventory-usages/${usageData.id}`)
      },
      onError: () => {
        //
        toast.error('Oops! Something went wrong!')
      },
    })
  }

  //
  useEffect(() => {
    if (isChecked) {
      const items = usagesInventories.map((item) => ({ id: item.id, quantity: item.quantity }))
      setSelectedReturns(items)
      setData('usage_inventories', items)
    }
  }, [isChecked])

  return {
    isChecked,
    setIsChecked,
    isErrorId,
    selectedReturns,
    handleQuantityChange,
    isLoading: processing,
    recordReturns,
  }
}
