import { ClassNamesConfig } from 'react-select'
import DynamicSelect from 'react-select'
import DynamicCreatableSelect from 'react-select'
import { ISelectInput } from './formComponents.interface'

export const colorStyles: ClassNamesConfig = {
  control(props) {
    return `pl-2 h-12  overflow-hidden rounded border-[1px] border-stroke bg-transparent font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`
  },
  input(props) {
    return '!outline-none'
  },
  valueContainer(props) {
    return 'rounded-2xl overflow-hidden !outline-none'
  },
  option(props) {
    return 'bg-black dark:bg-darkThemeBackground500 dark:text-zinc-300 dark:hover:bg-darkThemeBackground600 '
  },
  multiValue(props) {
    return '!rounded-2xl px-3 space-x-3 flex items-center py-0.5 !bg-grayColor200/50  dark:text-white'
  },
  multiValueRemove: () =>
    'p-0.5 !px-0.5 !border !border-textColor300/80 bg-grayColor300 text-textColor300 !rounded-full hover:!bg-grayColor300/70 hover:!text-textColor300/70 dark:hover:!bg-red-400',

  placeholder: () => 'dark:text-zinc-200',
  singleValue: () => 'dark:text-white ',
  menu: () => 'dark:bg-darkThemeBackground500',
}

const DefaultSelectInput = ({
  label,
  name,
  value,
  options,
  defaultValues,
  onChange = (value: any) => {},
  isMulti,
  labelClassName,
  isLoading,
  isSearchable,
  isCreateable,
  ...props
}: ISelectInput) => {
  return (
    <div className="relative space-y-2">
      {label && (
        <label
          htmlFor="select"
          className={`mb-3 block text-sm font-medium text-black dark:text-white ${labelClassName}`}
        >
          {label}
        </label>
      )}
      {!isCreateable ? (
        <div>
          <DynamicSelect
            inputId="select"
            classNames={colorStyles}
            isMulti={isMulti}
            name={name}
            options={options}
            value={value}
            id={'select'}
            isLoading={isLoading}
            isSearchable={isSearchable}
            onChange={onChange}
            {...props}
          />
        </div>
      ) : (
        <div>
          <DynamicCreatableSelect
            inputId="select"
            isClearable
            isMulti={isMulti}
            options={options}
            classNames={colorStyles}
            name={name}
            value={value}
            id={'select'}
            isLoading={isLoading}
            isSearchable={isSearchable}
            onChange={onChange}
            {...props}
          />
        </div>
      )}
    </div>
  )
}

export default DefaultSelectInput
