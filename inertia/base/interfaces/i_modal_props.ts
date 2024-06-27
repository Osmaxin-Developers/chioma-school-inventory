import { ReactNode } from 'react'
import { AnyFunctionType } from './i_type'

export interface ModalProps {
  children: ReactNode
  isOpen?: boolean
  onClose?: AnyFunctionType
  renderBackDrop?: (onClose?: AnyFunctionType) => JSX.Element
  className?: string
  message?: string
  title?: string | any
  Icon?: any
  modalHeaderClassName?: string
  ContainerClassName?: string
  onConfirm?: AnyFunctionType
  titleValue?: string | any
  isLoading?: boolean
  iconClassName?: string
  onMountRemoved?: () => any
}
