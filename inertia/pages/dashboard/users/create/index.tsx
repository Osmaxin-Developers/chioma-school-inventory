import { DashboardLayout } from '~/components/Layouts/dashboard_layout'
import { CreateUserIndex } from '~/components/Pages/CreateUser/create_user_index'

const CreateUserPage = () => {
  return <CreateUserIndex />
}

CreateUserPage.layout = (page: any) => <DashboardLayout children={page} />

export default CreateUserPage
