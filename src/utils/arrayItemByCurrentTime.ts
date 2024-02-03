export const getArrayItemByCurrentTime = (array: number[]) => {
  const date = new Date()
  const hour = date.getHours()

  return array[hour]
}
