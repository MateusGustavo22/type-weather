export function getCurrentDateFormatted() {
  const currentDate = new Date()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const hoursFormatted = `${hours}:${String(minutes).padStart(2, '0')}`
  return {
    date: currentDate.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    hours: hoursFormatted,
  }
}
