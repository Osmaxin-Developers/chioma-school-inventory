import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { InventoryUsagesIndex } from '~/components/Pages/InventoryUsages/inventory_usages_index'

const InventoryUsagesPage = () => {
  return <InventoryUsagesIndex />
}

InventoryUsagesPage.layout = (page: any) => <DashboardLayout children={page} />

export default InventoryUsagesPage
