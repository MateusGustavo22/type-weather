'use client'
import Card from '@/components/Card'
import DetailsToday from '@/components/DetailsToday'
import NextDays from '@/components/NextDays'
import { fetchWeatherAPI } from '@/utils/fetchWeatherApi'
import { getArrayItemByCurrentTime } from '@/utils/arrayItemByCurrentTime'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const forecastWeatherUrl = process.env.NEXT_PUBLIC_FORECAST_WEATHER

interface DashboardProps {
  params: {
    longitude: string
    latitude: string
  }
}

export default function Dashboard({ params }: DashboardProps) {
  const [weatherData, setWeatherData] = useState<any>(null)
  const [forecastWeatherData, setForecastWeatherData] = useState<any>(null)
  const searchParams = useSearchParams()
  const latitude = searchParams.get('latitude')
  const longitude = searchParams.get('longitude')
  const cityName = searchParams.get('city')

  const currentWeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,windspeed_10m,uv_index&daily=temperature_2m_max,temperature_2m_min,rain_sum&current_weather=true&timeformat=unixtime&timezone=America%2FSao_Paulo&forecast_days=1`
  const forecastWeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timeformat=unixtime&timezone=America%2FSao_Paulo`

  const getWeatherApi = async (
    apiUrl: string,
    setDate: React.Dispatch<React.SetStateAction<any>>,
  ) => {
    const data = await fetchWeatherAPI(apiUrl)
    setDate(data)
  }

  useEffect(() => {
    if (currentWeatherUrl != undefined && forecastWeatherUrl != undefined) {
      getWeatherApi(currentWeatherUrl, setWeatherData)
      getWeatherApi(forecastWeatherUrl, setForecastWeatherData)
    } else {
      console.log('currentWeatherUrl não está definida.')
    }
  }, [searchParams])

  return (
    <div className="flex h-full w-full gap-4 p-6 pb-4 mobile1:gap-3  mobile1:p-2 tablet2:flex-col tablet2:items-center">
      <Card
        cityName={cityName}
        temperature={weatherData?.current_weather.temperature}
        temperature_max={weatherData?.daily.temperature_2m_max[0]}
        temperature_min={weatherData?.daily.temperature_2m_min[0]}
        weathercode={weatherData?.current_weather.weathercode}
      />
      <div className="relative flex h-full w-full flex-col  gap-4  mobile1:gap-3 tablet2:items-center desktop1:w-full">
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
