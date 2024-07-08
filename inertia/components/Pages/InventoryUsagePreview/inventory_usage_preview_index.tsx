import type Usage from '#models/usage'
import { usePage } from '@inertiajs/react'
import { useState } from 'react'
import { MainSectionIndex } from './MainSection/main_section_index'
import { RecordReturnsModal } from './UsagePreviewModals/record_returns_modal'
import { ReturnsHistoryModal } from './UsagePreviewModals/returns_history_modal'

export const InventoryUsagePreviewIndex = () => {
  //
  const [isRecordReturnsModalOpen, setIsRecordReturnsModalOpen] = useState(false)
  const [isRecordHistoryModalOpen, setIsRecordHistoryModalOpen] = useState(false)
  //

  //
  const { usage } = usePage<{ usage: Usage }>().props

  return (
    <>
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
        <MainSectionIndex
          setIsRecordReturnsModalOpen={setIsRecordReturnsModalOpen}
          setIsRecordHistoryModalOpen={setIsRecordHistoryModalOpen}
          usageData={usage}
        />
      </div>

      {/*  */}
      {isRecordReturnsModalOpen ? (
        <RecordReturnsModal
          isModalOpen={isRecordReturnsModalOpen}
          setIsModalOpen={setIsRecordReturnsModalOpen}
          usageData={usage}
        />
      ) : null}

      {/*  */}
      {isRecordHistoryModalOpen ? (
        <ReturnsHistoryModal
          isModalOpen={isRecordHistoryModalOpen}
          setIsModalOpen={setIsRecordHistoryModalOpen}
          usageData={usage}
        />
      ) : null}
    </>
  )
}
