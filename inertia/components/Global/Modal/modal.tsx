import { Transition, TransitionChild } from '@headlessui/react'
import { FC } from 'react'
import { ModalProps } from '~/base/interfaces/i_modal_props'

const Modal: FC<ModalProps> = ({ children, onClose, className, isOpen, renderBackDrop }) => {
  return (
    <Transition
      show={isOpen}
      as="div"
      appear={true}
      className={`fixed inset-0 z-[1000] ${className}`}
    >
      {!renderBackDrop && (
        <TransitionChild
          as={'div'}
          enter="transform transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transform transition duration-150 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 "
          className={`fixed inset-0 -z-10 bg-backdropColor`}
          onClick={onClose}
        ></TransitionChild>
      )}

      {/* if render backdrop is defined and it is a function */}
      {renderBackDrop && typeof renderBackDrop === 'function' && renderBackDrop(onClose)}
      {children}
    </Transition>
  )
}

export default Modal
