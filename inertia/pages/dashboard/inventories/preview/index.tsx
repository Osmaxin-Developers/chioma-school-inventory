import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { InventoryPreviewIndex } from '~/components/Pages/InventoryPreview/inventory_preview_index'

const InventoryPreviewPage = () => {
  return <InventoryPreviewIndex />
}

InventoryPreviewPage.layout = (page: any) => <DashboardLayout children={page} />

export default InventoryPreviewPage
