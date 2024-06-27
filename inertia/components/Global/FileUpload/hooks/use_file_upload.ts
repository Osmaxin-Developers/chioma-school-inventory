import { useEffect, useState } from 'react'
import { File } from '../ifile'

export const useFileUpload = (
  name: string,
  onChange?: (files: File[]) => any,
  multiple?: boolean,
  previews?: string[]
) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isFile, setIsFile] = useState(false)
  const [fileError, setFileError] = useState('')

  useEffect(() => {
    if (previews && previews.length > 0) {
      const filePreviews = previews.map((previewUrl) => {
        const id = Date.now() + previewUrl
        return {
          preview: {
            url: previewUrl,
            type: undefined,
          },
          id,
        }
      })

      setSelectedFiles(filePreviews as any)
    }
  }, [previews?.length])

  //handles the error on the file such as "size", "format" etc
  const handleError = (error: any, files: any) => setFileError(error.message)

  //set uploaded file/files as form field value
  const handleFileUpload = (files: any) => {
    const oldFiles: any[] = []
    const uploadedFiles = multiple ? [...oldFiles, ...files] : files[0]

    if (onChange) {
      onChange(uploadedFiles)
    }
    setSelectedFiles([...oldFiles, ...files])
  }

  // Remove uploaded file
  const handleRemoveFile = (e: any, fFile: File) => {
    e.preventDefault()
    e.stopPropagation()
    const newFiles: File[] = selectedFiles.filter((item: File) => item.id !== fFile.id)
    setSelectedFiles(newFiles)
  }

  //show uploaded files if the "selectedFiles" is not empty
  useEffect(() => {
    if (selectedFiles.length > 0) {
      setIsFile(true)
    } else {
      setIsFile(false)
    }
  }, [selectedFiles])

  return {
    handleError,
    handleFileUpload,
    isFile,
    selectedFiles,
    setSelectedFiles,
    handleRemoveFile,
  }
}
