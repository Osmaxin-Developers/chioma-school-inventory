import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { DashboardIndex } from '~/components/Pages/Dashboard/dashboard_index'

const DashboardScreen = () => {
  return <DashboardIndex />
}

DashboardScreen.layout = (page: any) => <DashboardLayout children={page} />

export default DashboardScreen
