function isDaytime() {
  const currentHour = new Date().getHours()
  return currentHour >= 6 && currentHour < 18
}

export function getWeatherBackground(weatherCode: number) {
  const isDay = isDaytime()

  let style
  switch (weatherCode) {
    case 0:
    case 1:
      style = isDay ? 'clear-day.png' : 'clear-night.png'
      break
    case 2:
    case 3:
    case 45:
    case 48:
      style = isDay ? 'clouds-day.png' : 'clouds-night.png'
      break
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      style = isDay ? 'rain-day.png' : 'rain-night.png'
      break
    case 61:
    case 65:
    case 80:
    case 81:
    case 81:
    case 95:
    case 96:
    case 99:
      style = isDay ? 'storm-day.png' : 'storm-night.png'
      break
    case 66:
    case 67:
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      style = isDay ? 'snow-day.png' : 'snow-night.png'
      break
    default:
      style = ''
      break
  }

  return style
}
