export interface File {
  id: string
  extension: string
  sizeReadable: string
  preview: Preview
  name: string
  size: number
  type: string
}

export interface Preview {
  type: string
  url: string
}
