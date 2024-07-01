import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { InventoryUsagePreviewIndex } from '~/components/Pages/InventoryUsagePreview/inventory_usage_preview_index'

const UsagePreviewPage = () => {
  return <InventoryUsagePreviewIndex />
}

UsagePreviewPage.layout = (page: any) => <DashboardLayout children={page} />

export default UsagePreviewPage
