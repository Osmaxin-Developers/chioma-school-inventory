import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { EditInventoryIndex } from '~/components/Pages/EditInventory/edit_inventory_index'

const EditInventoryPage = () => {
  return <EditInventoryIndex />
}

EditInventoryPage.layout = (page: any) => <DashboardLayout children={page} />
export default EditInventoryPage
