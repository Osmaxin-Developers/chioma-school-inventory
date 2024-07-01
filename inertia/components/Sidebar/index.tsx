import React, { useEffect, useRef, useState } from 'react'

import { Link } from '@inertiajs/react'
import {
  AlertOctagonIcon,
  CoinsIcon,
  DollarSign,
  GiftIcon,
  LayoutDashboardIcon,
  ListChecksIcon,
  ListFilter,
  ListIcon,
  ListMinusIcon,
  MenuIcon,
  PackagePlusIcon,
  SubscriptIcon,
  Users,
} from 'lucide-react'
import SidebarLinkGroup from './sidebar_link_group'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = window.location.pathname

  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  let storedSidebarExpanded = 'true'
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target))
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/dashboard">
          <h1 className="text-white font-bold text-2xl">Inventory</h1>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <MenuIcon />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup activeCondition={pathname === '/' || pathname === '/dashboard'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/' || pathname === '/dashboard') &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                      >
                        <LayoutDashboardIcon />
                        Dashboard
                      </Link>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  )
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/dashboard/inventories'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard/inventories"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname === '/dashboard/inventories' && 'bg-graydark dark:bg-meta-4'
                        }`}
                      >
                        <ListMinusIcon />
                        Inventories
                      </Link>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  )
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/dashboard/record-inventory-usage'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard/record-inventory-usage"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname === '/dashboard/record-inventory-usage' &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                      >
                        <PackagePlusIcon />
                        Record usage
                      </Link>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  )
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/dashboard/inventory-usages'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/dashboard/inventory-usages"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname === '/dashboard/inventory-usages' && 'bg-graydark dark:bg-meta-4'
                        }`}
                      >
                        <ListChecksIcon />
                        Inventory usages
                      </Link>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  )
                }}
              </SidebarLinkGroup>

              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  )
}

export default Sidebar
