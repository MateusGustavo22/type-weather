export function formatTimestampToDay(timestamp: number) {
  const daysOfWeek = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
  ]

  const daysOfWeekMin = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']

  const date = new Date(timestamp * 1000)

  const dayOfWeek = daysOfWeek[date.getDay()]
  const dayOfWeekMin = daysOfWeekMin[date.getDay()]

  return {
    dayOfWeek: dayOfWeek,
    dayOfWeekMin: dayOfWeekMin,
  }
}
