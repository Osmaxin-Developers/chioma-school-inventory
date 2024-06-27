import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { RecordInventoryUsageIndex } from '~/components/Pages/RecordInventoryUsage/record_inventory_usage_index'

const RecordInventoryUsagePage = () => {
  return <RecordInventoryUsageIndex />
}

RecordInventoryUsagePage.layout = (page: any) => <DashboardLayout children={page} />

export default RecordInventoryUsagePage
