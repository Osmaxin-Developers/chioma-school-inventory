import { MainSectionIndex } from './MainSection/main_section_index'

export const InventoryUsagePreviewIndex = () => {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 ">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-bold text-black dark:text-white">Usage preview</h2>

        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <a className="font-medium" href="/dashboard/inventory-usages">
                Inventory usages /
              </a>
            </li>
            <li className="font-medium text-primary">Usage preview</li>
          </ol>
        </nav>
      </div>

      {/*  */}
      <MainSectionIndex />
    </div>
  )
}
