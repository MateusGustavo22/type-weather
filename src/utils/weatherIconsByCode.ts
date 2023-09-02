function isDaytime() {
  const currentHour = new Date().getHours()
  return currentHour >= 6 && currentHour < 18
}

export function getWeatherIcon(weatherCode: number) {
  const isDay = isDaytime()

  let style
  switch (weatherCode) {
    case 0:
    case 1:
      style = isDay ? 'clear-day.svg' : 'clear-night.svg'
      break
    case 2:
    case 3:
    case 45:
    case 48:
      style = isDay ? 'clouds-day.svg' : 'clouds-night.svg'
      break
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      style = isDay ? 'rain-day.svg' : 'rain-night.svg'
      break
    case 61:
    case 65:
    case 80:
    case 81:
    case 81:
    case 95:
    case 96:
    case 99:
      style = isDay ? 'storm-day.svg' : 'storm-night.svg'
      break
    case 66:
    case 67:
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      style = isDay ? 'snow-day.svg' : 'snow-night.svg'
      break
    default:
      style = ''
      break
  }

  return style
}
