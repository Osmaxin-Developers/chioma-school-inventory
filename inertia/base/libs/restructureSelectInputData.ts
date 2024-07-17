interface IData {
  name?: string
  id: number
  [key: string]: any
}

export const restructureSelectInputData = (
  dataArray: IData[],
  valueKey: string = 'id',
  labelKey: string = 'name'
) => {
  if (dataArray) {
    return dataArray?.map((data: IData) => ({
      id: data.id,
      value: data[valueKey],
      label: data[labelKey],
    }))
  }
  return []
}
