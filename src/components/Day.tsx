import { useEffect, useState } from 'react'
import { formatTimestampToDay } from '@/utils/timestampToDay'
import { weatherCodeToDescription } from '@/utils/weatherCodes'
import { getWeatherIcon } from '@/utils/weatherIconsByCode'

interface DayProps {
  temperature_max: number
  temperature_min: number
  weathercode: number
  timestamp: number
  icon?: string
}

export default function Day({
  temperature_max,
  temperature_min,
  timestamp,
  weathercode,
  icon,
}: DayProps) {
  interface DayType {
    dayOfWeek: string
    dayOfWeekMin: string
  }

  const [dayOfWeek, setDayOfweek] = useState<DayType | null>(null)
  const [weatherIcon, setWeatherIcon] = useState('')

  let weatherStatusDescription = ''
  let weatherIconStatus = ''

  if (weathercode != undefined) {
    weatherIconStatus = getWeatherIcon(weathercode)
    weatherStatusDescription =
      weatherCodeToDescription[
        weathercode as keyof typeof weatherCodeToDescription
      ]
  }

  useEffect(() => {
    if (weatherIconStatus != '') {
      setWeatherIcon('/icons/weather/' + weatherIconStatus)
    }
  }, [weatherIconStatus])

  useEffect(() => {
    if (timestamp) {
      setDayOfweek(formatTimestampToDay(timestamp))
    }
  }, [timestamp])

  return (
    <div className="flex h-[212px] w-[116px] flex-col items-center justify-center gap-0 mobile1:h-[150px] mobile1:w-[26px] mobile2:h-[152px] mobile2:w-[88px] desktop1:w-[88px]">
      <span className="font-nunito text-sm font-bold text-base-gray-200 mobile2:hidden desktop2:hidden">
        {dayOfWeek ? dayOfWeek.dayOfWeek : null}
      </span>
      <span className="hidden font-nunito text-sm font-bold text-base-gray-200 mobile2:block desktop2:block">
        {dayOfWeek ? dayOfWeek.dayOfWeekMin : null}
      </span>
      <div
        className="relative h-[116px] w-[116px] bg-cover bg-center mobile2:h-[68px] mobile2:w-[68px]"
        style={{
          backgroundImage: `url(${weatherIcon})`,
        }}
      />
      <div className="flex w-max flex-col items-center justify-center gap-1">
        <span className="font-nunito text-sm text-base-gray-200 mobile2:hidden desktop2:hidden">
          {weatherStatusDescription}
        </span>
        <div className="flex w-full flex-row items-center justify-center gap-2 mobile2:flex-col mobile2:gap-0">
          <span className="font-nunito text-sm font-bold text-base-gray-100">
            {temperature_max?.toFixed(0)}ºc
          </span>
          <span className="font-nunito text-sm font-bold text-base-gray-400">
            {temperature_min?.toFixed(0)}ºc
          </span>
        </div>
      </div>
    </div>
  )
}
