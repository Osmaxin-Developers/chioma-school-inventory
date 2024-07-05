import type Inventory from '#models/inventory'
import { router } from '@inertiajs/react'
import debounce from 'lodash.debounce'
import { ChangeEvent, useState } from 'react'

export const useSelectedInventories = () => {
  //

  //
  const [selectedInventories, setSelectedInventories] = useState<Inventory[]>([])
  //

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

  //
  const handleSearchInventory = debounce((e: ChangeEvent<HTMLInputElement>) => {
    router.get(
      `/dashboard/record-inventory-usage?search=${e.target.value.trim()}`,
      {},
      { preserveState: true }
    )
  }, 300)

  return { isSelectedInventory, selectedInventories, handleSelectInventory, handleSearchInventory }
}
