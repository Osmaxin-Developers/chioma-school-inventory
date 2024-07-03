import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { InventoriesIndex } from '~/components/Pages/Inventories/inventories_index'

const InventoriesPage = () => {
  return <InventoriesIndex />
}

InventoriesPage.layout = (page: any) => <DashboardLayout children={page} />
export default InventoriesPage
