import type Inventory from '#models/inventory'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface IInventory extends Inventory {
  addedQuantity?: number
}

export const useCalculateSelectedInventories = ({
  selectedInventories,
}: {
  selectedInventories: Inventory[]
}) => {
  //

  const [inventories, setInventories] = useState<IInventory[]>([])

  useEffect(() => {
    if (selectedInventories.length > 0) {
      setInventories((oldValues) => {
        return selectedInventories.map((inventory, index) => {
          // Ensure oldValues[index] is defined before accessing addedQuantity
          const oldValue = oldValues[index] || {}
          return { ...inventory, addedQuantity: oldValue.addedQuantity ?? 1 }
        })
      })
    } else {
      setInventories([])
    }
  }, [selectedInventories])

  //
  const handleQuantityIncrement = (inventory: IInventory) => {
    const clickedInventory = inventories.find((inv) => inv.id === inventory.id)
    if (clickedInventory) {
      if (clickedInventory.addedQuantity === inventory.quantity) {
        toast(`Maximum quantity should be ${inventory.quantity}`, { position: 'top-right' })
        return
      }

      setInventories((oldValues) => {
        // Ensure oldValues is an array
        const inventories = oldValues ? [...oldValues] : []
        const inventoryIndex = inventories.findIndex((inv) => inv.id === clickedInventory.id)

        if (inventoryIndex !== -1) {
          inventories[inventoryIndex] = {
            ...clickedInventory,
            addedQuantity: (clickedInventory.addedQuantity ?? 0) + 1, // Corrected addition logic
          }
        }

        return inventories
      })
    }
  }

  //
  const handleQuantityDecrement = (inventory: IInventory) => {
    const clickedInventory = inventories.find((inv) => inv.id === inventory.id)
    if (clickedInventory) {
      if (clickedInventory.addedQuantity === 1) {
        toast(`Minimum quantity should be 1`, { position: 'top-right' })
        return
      }

      setInventories((oldValues) => {
        // Ensure oldValues is an array
        const inventories = oldValues ? [...oldValues] : []
        const inventoryIndex = inventories.findIndex((inv) => inv.id === clickedInventory.id)

        if (inventoryIndex !== -1) {
          inventories[inventoryIndex] = {
            ...clickedInventory,
            addedQuantity: (clickedInventory.addedQuantity ?? 0) - 1, // Corrected addition logic
          }
        }

        return inventories
      })
    }
  }

  //
  const totalSelectedQuantity = () =>
    inventories.reduce((acc, curr) => acc + Number(curr?.addedQuantity ?? 0), 0)

  //
  const totalSelectedAmount = () =>
    inventories.reduce((acc, curr) => acc + curr.price * Number(curr.addedQuantity ?? 0), 0)

  return {
    handleQuantityIncrement,
    inventories,
    handleQuantityDecrement,
    totalSelectedQuantity,
    totalSelectedAmount,
  }
}
