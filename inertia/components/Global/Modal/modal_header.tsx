import { XIcon } from 'lucide-react'
import { FC } from 'react'
import { AnyFunctionType } from '~/base/interfaces/i_type'
import { cn } from '~/base/libs/twm'

interface ModalHeaderProps {
  title: string
  className?: string
  iconClassName?: string
  onClose?: AnyFunctionType
}

const ModalHeader: FC<ModalHeaderProps> = ({ title, className, onClose, iconClassName }) => {
  return (
    <div
      className={cn(
        'relative bg-grayColor100 px-4  py-4 text-center text-lg font-semibold dark:bg-darkThemeBackground500 lg:py-4 lg:px-8 lg:text-xl',
        className
      )}
    >
      <p className="dark:text-darkThemeText400">{title}</p>
      <button type="button" className="group" onClick={onClose}>
        <XIcon
          className={` absolute top-2  right-2 flex h-7 w-7 cursor-pointer rounded-full border border-zinc-700 text-zinc-600  shadow-sm hover:!text-secondaryColor dark:border-darkThemeBorder500 dark:text-zinc-400  dark:shadow-none lg:top-4 lg:right-4 ${iconClassName}`}
        />
      </button>
    </div>
  )
}

export default ModalHeader
