import type Inventory from '#models/inventory'
import { useState } from 'react'

export const useSelectedInventories = () => {
  //
  const [selectedInventories, setSelectedInventories] = useState<Inventory[]>([])
  //   const [selectedInventoriesId, setSelectedInventoriesId] = useState<number[]>([])

  //
  const handleSelectInventory = (inventory: Inventory) => {
    setSelectedInventories((oldValues) => {
      // Ensure oldValues is an array
      const inventories = oldValues ? [...oldValues] : []
      const inventoryIndex = inventories.findIndex((inv) => inv.id === inventory.id)

      if (inventoryIndex === -1) {
        // Add the new inventory
        inventories.push(inventory)
      } else {
        // Remove the existing inventory
        inventories.splice(inventoryIndex, 1)
      }

      return inventories
    })
  }

  const isSelectedInventory = (inventoryId: number) => {
    return selectedInventories?.find((inventory) => inventory.id === inventoryId) ? true : false
  }

  return { isSelectedInventory, selectedInventories, handleSelectInventory }
}
