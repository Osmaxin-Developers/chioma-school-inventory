import { LeftSection } from './left_section'
import { RightSection } from './RightSection/right_section'

export const RecordInventoryUsageIndex = () => {
  return (
    <div className="">
      {/* <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-md font-bold text-black dark:text-white">Record usage</h2>
        </div>
      </div> */}

      {/*  */}
      <div className="h-[calc(100vh-14rem)] grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-7 md:gap-6 2xl:gap-7.5">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  )
}
