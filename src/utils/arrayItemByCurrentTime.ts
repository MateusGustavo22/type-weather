export const getArrayItemByCurrentTime = (array: number[]) => {
  const date = new Date()
  const hour = date.getHours()

  if (array) {
    return array[hour]
  }
}
