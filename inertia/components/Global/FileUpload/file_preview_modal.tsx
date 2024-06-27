import { TransitionChild } from '@headlessui/react'
import { XCircleIcon } from 'lucide-react'
import Modal from '../Modal/modal'
import { File } from './ifile'

const FilePreviewModal = ({
  isOpen = false,
  onClose,
  file,
}: {
  isOpen: boolean
  onClose: (e: any) => any
  file: File | undefined
}) => {
  return (
    <Modal className="flex items-center justify-center px-10 z-99999" isOpen={isOpen}>
      <TransitionChild
        as="div"
        className={'w-full max-w-4xl overflow-hidden rounded-md bg-white border border-zinc-300'}
        enter="transform transition duration-[350ms] ease-out"
        enterFrom=" opacity-0"
        enterTo="opacity-1"
        leave="transform transition duration-[350ms] ease-out"
        leaveFrom="opacity-1"
        leaveTo=" opacity-0"
      >
        <div className="relative bg-grayColor100 px-10 py-5 text-center text-xl font-medium capitalize text-textColor500">
          File preview{' '}
          <button
            onClick={onClose}
            className="group absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white border-zinc-200 border shadow-sm"
          >
            <XCircleIcon className="h-4 w-4 fill-current text-textColor300/80 group-hover:text-dangerColor/50" />
          </button>
        </div>
        <div className="px-10 py-4">
          {file?.type === 'application/pdf' ? (
            <div className="flex h-52 w-full items-center justify-center">
              <p className="text-center text-xl text-textColor300">
                Preview not supported on this file
              </p>
            </div>
          ) : (
            <div className="relative h-[80vh] w-full">
              <img src={`${file?.preview.url}`} alt="" style={{ objectFit: 'contain' }} />
            </div>
          )}
        </div>
      </TransitionChild>
    </Modal>
  )
}

export default FilePreviewModal
