import { ModelPagination } from '#interfaces/model.interface'
import type Inventory from '#models/inventory'
import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { InventoriesIndex } from '~/components/Pages/Inventories/inventories_index'

const InventoriesPage = ({ inventories }: { inventories: ModelPagination<Inventory> }) => {
  return <InventoriesIndex inventories={inventories} />
}

InventoriesPage.layout = (page: any) => <DashboardLayout children={page} />
export default InventoriesPage
