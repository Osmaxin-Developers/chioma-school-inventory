/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../../resources/css/app.css'
import '../../resources/css/data-tables-css.css'
import '../../resources/css/satoshi.css'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { DashboardLayout } from '~/components/Layouts/dashboard_layout'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    createRoot(el).render(
      <DashboardLayout>
        <App {...props} />
      </DashboardLayout>
    )
  },
})
