import { InputHTMLAttributes } from 'react'
import { cn } from '~/base/libs/twm'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  placeholder: string
  errorMessage?: string
}

export const Input = ({
  className,
  type,
  name,
  placeholder,
  onChange,
  label,
  errorMessage,
  ...props
}: InputProps) => {
  return (
    <div className="mb-5 relative">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(
          `w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${className}`
        )}
        onChange={onChange}
        {...props}
      />
      {errorMessage ? (
        <p className="absolute left-0 right-0 -bottom-5 text-right text-sm text-danger">
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}
