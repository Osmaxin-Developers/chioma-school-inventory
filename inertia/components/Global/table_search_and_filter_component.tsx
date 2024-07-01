import { Input } from './FormComponents/input'

export interface TableSearchAndFilterComponent {
  onSearch?: (value: any) => any
  children?: React.ReactNode
}

const TableSearchAndFilterComponent = ({ onSearch, children }: TableSearchAndFilterComponent) => {
  return (
    <div className="md:flex block items-center space-x-4 px-4 md:px-0 bg-white dark:bg-boxdark pt-2">
      {/* The search input */}
      <Input
        name="search"
        containerClassName="w-[100%] md:w-[30%] h-9"
        className=""
        onChange={(e) => {
          if (onSearch) {
            onSearch(e.target.value)
          }
        }}
        placeholder="Search here..."
      />
      {children}
    </div>
  )
}

export default TableSearchAndFilterComponent
