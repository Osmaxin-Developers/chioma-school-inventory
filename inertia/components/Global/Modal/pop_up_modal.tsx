import { TransitionChild } from '@headlessui/react'

import { ModalProps } from '~/base/interfaces/i_modal_props'
import { cn } from '~/base/libs/twm'
import Modal from './modal'
import ModalHeader from './modal_header'

const PopUpModal = ({
  children,
  title,
  isOpen,
  onClose,
  titleClassName,
  className,
  iconClassName,
}: ModalProps & { title: string; titleClassName?: string }) => {
  return (
    <Modal isOpen={isOpen} className={`flex items-center justify-center`}>
      <TransitionChild
        as={'div'}
        enter="transform transition duration-[350ms] ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-1"
        leave="transform transition duration-[350ms] ease-out"
        leaveFrom="opacity-1"
        leaveTo="opacity-0"
        className={cn(
          'modal-scrollbar w-full max-w-[32rem] rounded-md bg-whiteColor dark:bg-darkThemeBackground800',
          className
        )}
      >
        <ModalHeader
          title={title}
          className={cn(
            'sticky top-0 z-50 mb-4 !py-4 text-center text-textColor400',
            titleClassName
          )}
          onClose={onClose}
          iconClassName={`${iconClassName}`}
        />

        {children}
      </TransitionChild>
    </Modal>
  )
}

export default PopUpModal
