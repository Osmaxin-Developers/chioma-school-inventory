import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { UsersIndex } from '~/components/Pages/Users/users_index'

const UsersPage = () => {
  return <UsersIndex />
}

UsersPage.layout = (page: any) => <DashboardLayout children={page} />

export default UsersPage
