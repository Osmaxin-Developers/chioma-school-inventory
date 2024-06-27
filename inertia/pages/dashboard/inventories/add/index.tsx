import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { AddInventoryIndex } from '~/components/Pages/AddInventory/add_inventory_index'

const AddInventoryPage = () => {
  return <AddInventoryIndex />
}

AddInventoryPage.layout = (page: any) => <DashboardLayout children={page} />
export default AddInventoryPage
