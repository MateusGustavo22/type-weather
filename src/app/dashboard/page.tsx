'use client'
import Card from '@/components/Card'
import DetailsToday from '@/components/DetailsToday'
import NextDays from '@/components/NextDays'
import { fetchWeatherAPI } from '@/utils/fetchApi'
import { getArrayItemByCurrentTime } from '@/utils/arrayItemByCurrentTime'
import { useEffect, useState } from 'react'

const currentWeatherUrl = process.env.NEXT_PUBLIC_CURRENT_WEATHER
const forecastWeatherUrl = process.env.NEXT_PUBLIC_FORECAST_WEATHER

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState<any>(null)
  const [forecastWeatherData, setForecastWeatherData] = useState<any>(null)

  const getWeatherApi = async (
    currentWeatherUrl: string,
    setter: React.Dispatch<React.SetStateAction<any>>,
  ) => {
    const data = await fetchWeatherAPI(currentWeatherUrl)
    setter(data)

    return data
  }

  useEffect(() => {
    if (currentWeatherUrl != undefined && forecastWeatherUrl != undefined) {
      getWeatherApi(currentWeatherUrl, setWeatherData)
      getWeatherApi(forecastWeatherUrl, setForecastWeatherData)
    } else {
      console.log('currentWeatherUrl não está definida.')
    }
  }, [])

  return (
    <div className="flex h-full w-full justify-center gap-4 p-6 pb-4 mobile1:gap-3  mobile1:p-2 tablet2:flex-col tablet2:items-center">
      <Card
        temperature={weatherData?.current_weather.temperature}
        temperature_max={weatherData?.daily.temperature_2m_max[0]}
        temperature_min={weatherData?.daily.temperature_2m_min[0]}
        weathercode={weatherData?.current_weather.weathercode}
      />
      <div className="relative flex h-full flex-col items-center gap-4 mobile1:gap-3 desktop1:w-full">
        <DetailsToday
          thermal_sensation={getArrayItemByCurrentTime(
            weatherData?.hourly.apparent_temperature,
          )}
          windspeed={getArrayItemByCurrentTime(
            weatherData?.hourly.windspeed_10m,
          )}
          probability_of_rain={weatherData?.daily.rain_sum[0]}
          air_humidity={getArrayItemByCurrentTime(
            weatherData?.hourly.relativehumidity_2m,
          )}
          uv_index={getArrayItemByCurrentTime(weatherData?.hourly.uv_index)}
        />
        <NextDays
          timestamp={forecastWeatherData?.daily.time}
          temperature_max={forecastWeatherData?.daily.temperature_2m_max}
          temperature_min={forecastWeatherData?.daily.temperature_2m_min}
          weathercode={forecastWeatherData?.daily.weathercode}
        />
      </div>
    </div>
  )
}
