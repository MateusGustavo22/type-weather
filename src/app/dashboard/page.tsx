'use client'
import Card from '@/components/Card'
import DetailsToday from '@/components/DetailsToday'
import NextDays from '@/components/NextDays'
import { getArrayItemByCurrentTime } from '@/utils/arrayItemByCurrentTime'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import SpinnerLoading from '@/components/Loading'
import { useEffect } from 'react'

interface DashboardProps {
  searchParams: {
    longitude: string
    latitude: string
    city: string
  }
}

export default function Dashboard({ searchParams }: DashboardProps) {
  async function getCurrentWeather() {
    try {
      const response = await api.get(
        `/forecast?latitude=${searchParams.latitude}&longitude=${searchParams.longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,windspeed_10m,uv_index&daily=temperature_2m_max,temperature_2m_min,rain_sum&current_weather=true&timeformat=unixtime&timezone=America%2FSao_Paulo&forecast_days=1`,
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async function getForecastWeather() {
    try {
      const response = await api.get(
        `forecast?latitude=${searchParams.latitude}&longitude=${searchParams.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timeformat=unixtime&timezone=America%2FSao_Paulo`,
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const {
    data: currentWeather,
    isLoading: currentWeatherIsLoading,
    refetch: currentWeatherRefetch,
  } = useQuery({
    queryKey: ['current-weather'],
    queryFn: getCurrentWeather,
  })

  const { data: forecastWeather, refetch: forecastWeatherRefetch } = useQuery({
    queryKey: ['forecast-weather'],
    queryFn: getForecastWeather,
  })

  useEffect(() => {
    currentWeatherRefetch()
    forecastWeatherRefetch()
  }, [searchParams, currentWeatherRefetch, forecastWeatherRefetch])

  currentWeatherIsLoading && <SpinnerLoading />

  return (
    <div>
      {currentWeatherIsLoading ? (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <SpinnerLoading />
        </div>
      ) : (
        <div className="flex min-h-screen items-center px-2 pb-6 tablet2:mt-2">
          {currentWeather && searchParams.city && (
            <div className="flex w-full justify-center gap-5 tablet2:flex-col tablet2:items-center tablet2:gap-3">
              <Card
                cityName={searchParams.city}
                temperature={currentWeather.current_weather.temperature}
                temperature_max={currentWeather.daily.temperature_2m_max[0]}
                temperature_min={currentWeather.daily.temperature_2m_min[0]}
                weathercode={currentWeather.current_weather.weathercode}
              />
              <div className="flex flex-col items-center gap-4 tablet2:w-full tablet2:gap-3">
                <DetailsToday
                  thermal_sensation={getArrayItemByCurrentTime(
                    currentWeather.hourly.apparent_temperature,
                  )}
                  windspeed={getArrayItemByCurrentTime(
                    currentWeather.hourly.windspeed_10m,
                  )}
                  probability_of_rain={currentWeather.daily.rain_sum[0]}
                  air_humidity={getArrayItemByCurrentTime(
                    currentWeather.hourly.relativehumidity_2m,
                  )}
                  uv_index={getArrayItemByCurrentTime(
                    currentWeather.hourly.uv_index,
                  )}
                />
                {forecastWeather && (
                  <NextDays
                    timestamp={forecastWeather.daily.time}
                    temperature_max={forecastWeather.daily.temperature_2m_max}
                    temperature_min={forecastWeather.daily.temperature_2m_min}
                    weathercode={forecastWeather.daily.weathercode}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
