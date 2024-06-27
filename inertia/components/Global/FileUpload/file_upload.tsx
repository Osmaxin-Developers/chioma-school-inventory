import { useState } from 'react'
import Files from 'react-files'

import { ImageIcon, PlusIcon, XCircleIcon } from 'lucide-react'
import FilePreviewModal from './file_preview_modal'
import { useFileUpload } from './hooks/use_file_upload'
import { File } from './ifile'
import { cn } from '~/base/libs/twm'

const FileUpload = ({
  multiple = false,
  name,
  label,
  onChange,
  previews,
  labelClassName,
  errorMessage,
}: {
  name: string
  label: string
  multiple?: boolean
  onChange?: (files: File[]) => any
  previews?: string[]
  labelClassName?: string
  errorMessage?: string
}) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  const [openFilePreview, setOpenFilePreview] = useState<boolean>(false)
  const { handleFileUpload, handleError, isFile, selectedFiles, handleRemoveFile } = useFileUpload(
    name,
    onChange,
    multiple,
    previews
  )

  return (
    <>
      <div className={` relative space-y-2`}>
        {label ? (
          <label
            className={cn(
              `mb-3 block text-sm font-medium text-black dark:text-white ${labelClassName}`
            )}
          >
            {label}
          </label>
        ) : null}
        <div className="files">
          <Files
            className="files-dropzone"
            onChange={handleFileUpload}
            onError={handleError}
            accepts={['image/*', '.pdf']}
            multiple={multiple}
            maxFileSize={10000000}
            minFileSize={1000}
            clickable
          >
            <div
              className={`relative h-48 w-full rounded-lg bg-gray-100/50 text-center dark:border-none dark:bg-darkThemeBackground600 ${
                errorMessage ? 'border border-dangerColor/50' : 'border border-borderColor500'
              }`}
            >
              {!isFile ? (
                <label
                  htmlFor="image"
                  className="flex h-full w-full flex-col items-center justify-center"
                >
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <ImageIcon />
                    <p className="mt-3 text-sm dark:text-darkThemeText400">
                      drop your images here, or select
                    </p>
                    <h3 className="mt-1 text-base font-medium text-textColor300/90 dark:text-darkThemeText400">
                      Click to browse
                    </h3>
                  </div>
                </label>
              ) : (
                <div className="h-full w-full flex space-x-2 flex-wrap overflow-y-scroll p-3 scrollbar-thin">
                  {selectedFiles.map((file: any) => (
                    <button
                      key={file.id}
                      className="relative h-40 w-32 mb-5 cursor-pointer rounded-sm border border-grayColor300 block overflow-hidden"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setSelectedFile(file)
                        setOpenFilePreview(true)
                      }}
                    >
                      {file.type === 'application/pdf' ? (
                        <img
                          src={'/img/pdf-preview.png'}
                          alt=""
                          style={{ objectFit: 'contain' }}
                          className="rounded-sm"
                        />
                      ) : (
                        <img
                          src={file.preview.url}
                          alt=""
                          style={{ objectFit: 'cover' }}
                          className="rounded-sm"
                        />
                      )}

                      <button
                        className="group absolute -right-1 -top-1 rounded-full border border-dangerColor/60 transition-all hover:border-dangerColor"
                        onClick={(e) => handleRemoveFile(e, file)}
                      >
                        <XCircleIcon className="h-5 w-5 text-dangerColor/60 transition-all group-hover:text-dangerColor" />
                      </button>
                    </button>
                  ))}

                  {multiple ? (
                    <div className="group relative flex h-40 w-32 cursor-pointer items-center justify-center rounded-sm border-2 border-grayColor200 transition-all hover:border-grayColor300">
                      <PlusIcon className="h-8 w-8 text-textColor200 transition-all group-hover:text-textColor300" />
                    </div>
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-center rounded-b-lg bg-grayColor300/60 px-4 py-4 dark:bg-darkThemeBackground500">
                    <p className="text-sm font-semibold text-textColor400 first-letter:capitalize dark:text-darkThemeText400">
                      select or drop more image here
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Files>
        </div>
        {/* Error message display */}
        <span className="absolute -bottom-5 right-0 text-xs font-medium text-red-700">
          {errorMessage}
        </span>
      </div>
      {/* Preview a particular file */}
      <FilePreviewModal
        file={selectedFile}
        isOpen={openFilePreview}
        onClose={(e) => {
          e.preventDefault()
          setOpenFilePreview(false)
        }}
      />
    </>
  )
}

export default FileUpload
