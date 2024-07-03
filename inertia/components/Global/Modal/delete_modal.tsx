import { TransitionChild } from '@headlessui/react'
import { FC, useEffect } from 'react'
import { ModalProps } from '~/base/interfaces/i_modal_props'
import { cn } from '~/base/libs/twm'
import Modal from './modal'
import ModalHeader from './modal_header'
import { CircleIcon, LoaderIcon } from 'lucide-react'

// const inter = Inter({ subsets: ['latin'], display: 'swap' });

const DeleteModal: FC<Omit<ModalProps, 'children'>> = ({
  isOpen,
  onClose,
  message,
  title,
  Icon,
  modalHeaderClassName,
  ContainerClassName,
  onConfirm,
  titleValue,
  isLoading,
  onMountRemoved,
}) => {
  useEffect(() => {
    return () => {
      if (onMountRemoved) {
        onMountRemoved()
      }
    }
  }, [])
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        if (!isLoading && onClose) {
          onClose()
        }
      }}
      className={cn('flex  items-center justify-center')}
    >
      <TransitionChild
        as={'div'}
        enter="transform transition duration-[350ms] ease-out"
        enterFrom=" opacity-0"
        enterTo="opacity-1"
        leave="transform transition duration-[350ms] ease-out"
        leaveFrom="opacity-1"
        leaveTo=" opacity-0"
        className={
          'mx-4 w-full max-w-[30rem] bg-whiteColor dark:bg-darkThemeBackground600 md:mx-auto'
        }
      >
        <ModalHeader
          title={title}
          onClose={() => {
            if (!isLoading && onClose) {
              onClose()
            }
          }}
          className={`!px-5 !py-3.5 text-center text-lg dark:text-darkThemeText400 ${modalHeaderClassName}`}
          iconClassName="right-5 top-2"
        />

        <div
          className={`${ContainerClassName} flex flex-col items-center justify-center pt-8 text-sm`}
        >
          <div className="space-y-5 px-5">
            <div className="flex items-center gap-4">
              {Icon || null}
              <h2 className={`pt-1 text-base font-medium dark:text-darkThemeText400`}>{message}</h2>
            </div>
          </div>

          <div className={`flex items-center justify-end space-x-6  px-5 pt-2.5 pb-8 text-right`}>
            <button
              className="mt-7 border-none flex items-center text-white bg-dangerColor600 px-7 py-2 rounded-sm text-sm font-medium  transition-all hover:bg-dangerColor600/80"
              onClick={onConfirm}
            >
              {titleValue ?? 'Delete'}
              {isLoading ? <LoaderIcon size={18} className="animate-spin ml-2" /> : null}
            </button>

            <button
              disabled={isLoading}
              className="text-black mt-7 border px-6 py-2 rounded-sm text-sm font-medium hover:text-primary !shadow-none transition-all hover:bg-gray-3"
              onClick={() => {
                if (!isLoading && onClose) {
                  onClose()
                }
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </TransitionChild>
    </Modal>
  )
}

export default DeleteModal
