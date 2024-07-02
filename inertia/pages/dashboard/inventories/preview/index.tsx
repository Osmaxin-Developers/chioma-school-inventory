import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { InventoryPreviewIndex } from '~/components/Pages/InventoryPreview/inventory_preview_index'
import type Inventory from '../../../../../app/models/inventory'

const InventoryPreviewPage = ({ inventory }: { inventory: Inventory }) => {
  return <InventoryPreviewIndex inventory={inventory} />
}

InventoryPreviewPage.layout = (page: any) => <DashboardLayout children={page} />

export default InventoryPreviewPage
