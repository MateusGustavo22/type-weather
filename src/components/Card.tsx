import Image from 'next/image'
import Input from './Input'
import logo_min from 'public/icons/logo-min.svg'
import clear_day from 'public/icons/wheather/clear-day.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getWeatherBackground } from '@/utils/weatherBackground'
import { weatherCodeToDescription } from '@/utils/weatherCode'
import { getCurrentDateFormatted } from '@/utils/formatDate'

interface CardProps {
  city?: string
  temperature: number
  temperature_max: number
  temperature_min: number
  weathercode: number
}

export default function Card({
  city,
  temperature,
  temperature_max,
  temperature_min,
  weathercode,
}: CardProps) {
  const [weatherBackground, setWeatherBackground] = useState('')

  const weatherImage = getWeatherBackground(weathercode)

  useEffect(() => {
    if (weatherImage != '') {
      setWeatherBackground('/images/backgrounds/' + weatherImage)
    }
  }, [weatherImage])

  const { date, hours } = getCurrentDateFormatted()

  return (
    <div className="h-full max-h-[720px] w-full max-w-[664px] shrink-0 tablet2:max-w-[630px]">
      <div className="flex aspect-[720/696] flex-col  gap-4 rounded-xl bg-base-gray-800 p-4 tablet2:aspect-[720/696]">
        <div className="flex h-max w-full gap-3">
          <Link
            href="/"
            className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-lg bg-base-gray-600"
          >
            <Image src={logo_min} width={30} height={30} alt="Logo Icon" />
          </Link>
          <Input />
        </div>
        <div
          style={{
            backgroundImage: `url(${weatherBackground})`,
          }}
          className="relative flex h-full w-full flex-col justify-between rounded-lg bg-cover bg-center p-8 mobile2:p-5"
        >
          <div className="flex h-[58px] w-full justify-between">
            <div className="flex w-max flex-col gap-2">
              <span className="font-nunito text-xl font-bold text-white mobile2:text-lg">
                Porto Alegre, RS
              </span>
              <span className="pr-3 font-nunito text-base text-white mobile2:text-sm">
                {date}
              </span>
            </div>
            <span className="font-nunito text-xl font-bold text-white mobile2:text-sm">
              {hours}
            </span>
          </div>
          <div className="w-max">
            <div className="flex w-max flex-col gap-3">
              <span className="font-nunito text-[96px] font-extrabold leading-none text-white mobile2:text-5xl">
                {temperature?.toFixed(0)}ºc
              </span>
              <div className="flex flex-row items-center gap-3 mobile2:flex-col mobile2:items-start mobile2:gap-0">
                <div className="flex w-max gap-2">
                  <span className="flex font-nunito text-xl font-bold text-white mobile2:text-base">
                    {temperature_max?.toFixed(0)}ºc
                  </span>
                  <span className="flex font-nunito text-xl font-bold text-white mobile2:text-base">
                    /
                  </span>
                  <span className="flex font-nunito text-xl font-bold text-white mobile2:text-base">
                    {temperature_min?.toFixed(0)}
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
          <div className="absolute bottom-0 right-0 h-[248px] w-[248px] mobile2:h-[160px] mobile2:w-[160px]">
            <Image src={clear_day} fill alt="Weather Icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
