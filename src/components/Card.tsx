'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo_min from 'public/icons/logo-min.svg'

import { getWeatherBackground } from '@/utils/backgroundByCode'
import { weatherCodeToDescription } from '@/utils/weatherCodes'
import { getCurrentDateFormatted } from '@/utils/formatDate'
import { getWeatherIcon } from '@/utils/weatherIconsByCode'
import Input from '@/components/Input'

interface CardProps {
  cityName: string
  temperature: number
  temperature_max: number
  temperature_min: number
  weathercode: number
}

export default function Card({
  cityName,
  temperature,
  temperature_max,
  temperature_min,
  weathercode,
}: CardProps) {
  const [weatherBackground, setWeatherBackground] = useState('')
  const [weatherIcon, setWeatherIcon] = useState('')
  const [currentDate, setCurrentDate] = useState({ date: '', hours: '' })
  const [IsLoading, setIsLoading] = useState(false)

  const weatherImageBackground = getWeatherBackground(weathercode)
  const weatherIconStatus = getWeatherIcon(weathercode)

  useEffect(() => {
    if (weatherImageBackground != '' && weatherIconStatus != '') {
      setWeatherBackground('/images/backgrounds/' + weatherImageBackground)
      setWeatherIcon('/icons/weather/' + weatherIconStatus)
    }
  }, [weatherImageBackground, weatherIconStatus])

  useEffect(() => {
    const { date, hours } = getCurrentDateFormatted()
    setCurrentDate({ date: date, hours: hours })
  }, [])

  return (
    <div className="h-full max-h-[720px] w-full max-w-[664px] shrink-0 rounded-xl border border-slate-700 tablet2:max-w-[630px]">
      <div className="flex aspect-[720/696] flex-col  gap-4 rounded-xl bg-base-gray-800 p-4 tablet2:aspect-[720/696]">
        <div className="flex h-max w-full gap-3">
          <Link
            href="/"
            className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-lg bg-base-gray-600"
          >
            <Image src={logo_min} width={30} height={30} alt="Logo Icon" />
          </Link>
          <Input loading={IsLoading} />
        </div>

        <div
          style={{
            backgroundImage: `url(${weatherBackground})`,
          }}
          className="relative flex h-full w-full flex-col justify-between rounded-lg bg-cover bg-center p-8 mobile2:p-5"
        >
          <div className="flex h-[58px] w-full justify-between">
            <div className="flex w-max flex-col gap-2">
              <span className="font-nunito text-xl font-bold text-white mobile1:text-lg">
                {cityName}
              </span>
              <span className="pr-3 font-nunito text-base text-white mobile1:text-sm">
                {currentDate.date}
              </span>
            </div>
            <span className="font-nunito text-xl font-bold text-white mobile1:text-sm">
              {currentDate.hours}
            </span>
          </div>
          <div className="w-max">
            <div className="flex w-max flex-col gap-3">
              <span className="font-nunito text-[96px] font-extrabold leading-none text-white mobile2:text-5xl">
                {temperature ? `${temperature.toFixed(0)}ºc` : null}
              </span>
              <div className="flex flex-row items-center gap-3 mobile1:gap-0 mobile2:flex-col mobile2:items-start">
                <div className="flex w-max gap-2">
                  <span className="flex font-nunito text-xl font-bold text-white mobile2:text-base">
                    {temperature_max ? `${temperature_max.toFixed(0)}ºc` : null}
                  </span>
                  <span className="flex font-nunito text-xl font-bold text-white mobile2:text-base">
                    /
                  </span>
                  <span className="flex font-nunito text-xl font-bold text-white mobile2:text-base">
                    {temperature_min ? `${temperature_min.toFixed(0)}ºc` : null}
                  </span>
                </div>
                <div className="h-2 w-2 rounded-full bg-white opacity-40 mobile2:hidden" />
                <span className="font-nunito text-xl font-normal text-white mobile2:text-base">
                  {weatherCodeToDescription[
                    weathercode as keyof typeof weatherCodeToDescription
                  ] || ''}
                </span>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 right-0 h-[248px] w-[248px] bg-cover bg-center mobile2:h-[160px] mobile2:w-[160px]"
            style={{
              backgroundImage: `url(${weatherIcon})`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
