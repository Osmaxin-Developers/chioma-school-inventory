import { ModelPagination } from '#interfaces/model.interface'
import { Link } from '@inertiajs/react'
import classNames from 'classnames'

interface PaginationProps {
  meta: ModelPagination<any>['meta']
}

export default function Pagination({ meta }: PaginationProps) {
  //
  const pageCount = (): number => {
    if (meta.total <= meta.per_page) {
      return 1
    } else {
      return Math.ceil(meta.total / meta.per_page)
    }
  }
  /**
   * If there are only 3 links, it means there are no previous or next pages.
   * So, we don't need to render the pagination.
   */

  if (meta.total <= meta.per_page) return null

  return (
    <div className="flex flex-wrap mt-6 -mb-1">
      {[...new Array(pageCount()).keys()].map((link, index) => {
        index = index + 1
        const pageUrl = meta.first_page_url?.split('=')[0].split('/')[1]
        //
        return (
          <PaginationItem
            key={index}
            active={meta.current_page === index}
            label={`${index}`}
            url={`/dashboard/inventories${pageUrl}=${index}`}
          />
        )
      })}
    </div>
  )
}

interface PaginationItem {
  url: null | string
  label: string
  active: boolean
}

function PaginationItem({ active, label, url }: PaginationItem) {
  const className = classNames(
    [
      'mr-2 mb-1',
      'px-4 py-3',
      ' rounded',
      'text-sm',
      'bg-white',
      'text-[#637381] dark:text-bodydark',
      'hover:bg-white',
      'focus:outline-none focus:border-indigo-700 focus:text-indigo-700',
    ],
    {
      'font-bold border border-solid border-primary': active,
    }
  )

  /**
   * Note: In general you should be aware when using `dangerouslySetInnerHTML`.
   *
   * In this case, `label` from the API is a string, so it's safe to use it.
   * It will be either `&laquo; Previous` or `Next &raquo;`
   */
  return (
    <Link className={className} href={url as string}>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </Link>
  )
}

function PageInactive({ label }: Pick<PaginationItem, 'label'>) {
  const className = classNames(
    'mr-2 mb-1 px-4 py-3 text-sm rounded  text-[#637381] dark:text-bodydark bg-white dark:bg-boxdark'
  )

  /**
   * Note: In general you should be aware when using `dangerouslySetInnerHTML`.
   *
   * In this case, `label` from the API is a string, so it's safe to use it.
   * It will be either `&laquo; Previous` or `Next &raquo;`
   */
  return <div className={className} dangerouslySetInnerHTML={{ __html: label }} />
}
