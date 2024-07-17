import { BoxesIcon } from 'lucide-react'
import { cn } from '~/base/libs/twm'

export const InventoryCountCard = ({
  count,
  title,
  indicatorClassName,
  icon,
}: {
  count: number
  title: string
  indicatorClassName?: string
  icon: React.ReactNode
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">{count}</h3>
          <p className="font-medium">{title}</p>
          <span className="mt-2 flex items-center gap-2">
            <span
              className={cn(
                `flex items-center gap-1 rounded-md bg-meta-3 p-1 text-xs font-medium text-white ${indicatorClassName}`
              )}
            >
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                  fill="white"
                ></path>
              </svg>
              <span>+2.5%</span>
            </span>

            <span className="text-sm font-medium">Since last week</span>
          </span>
        </div>

        <div>{icon}</div>
      </div>
    </div>
  )
}
