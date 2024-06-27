export const getFormError = (data: string | string[]) => {
  return Array.isArray(data) ? data[0] : data
}
